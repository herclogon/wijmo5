/**
 */
module wijmo.auth {
    'use strict';

    /**
     * User authentication class.
     *
     * This class provides basic user authentication on the client-side.
     * It requires a server-side service implemented by the Auth.ashx module.
     *
     * This class supports FaceBook and Google OpenAuth services. To use those
     * services you must include the following files:
     *
     * <pre>&lt;script src='//connect.facebook.net/en_US/all.js' type='text/javascript'&gt;&lt;/script&gt;
     * &lt;script src='https://apis.google.com/js/client:plusone.js' type='text/javascript'&gt;&lt;/script&gt;</pre>
     */
    export class Auth {
        private _user: any;
        private _keep = false;
        private _authFacebook: _AuthFacebook;
        private _authGoogle: _AuthGoogle;
        private _form = {};

        /**
         * Initializes a new instance of an @see:Auth object.
         *
         * For details about authentication using Facebook, please see
         * <a href='https://developers.facebook.com/docs/facebook-login/getting-started-web/'>
         * https://developers.facebook.com/docs/facebook-login/getting-started-web/</a>
         *
         * For details on authentication using Google, please see
         * <a href='https://developers.google.com/+/web/signin/#using_the_client-side_flow'>
         * https://developers.google.com/+/web/signin/#using_the_client-side_flow</a>
         *
         * @param idFacebook Facebook application ID.
         * @param idGoogle Gooble application ID.
         */
        constructor(idFacebook: string, idGoogle: string, options: any) {

            // initialize authentication providers
            if (idFacebook) {
                this._authFacebook = new _AuthFacebook(this, idFacebook);
            }
            if (idGoogle) {
                this._authGoogle = new _AuthGoogle(this, idGoogle);
            }

            // apply any options
            copy(this, options);

            // try logging in using cookie from last session
            var self = this;
            if (document.cookie) {
                self.logIn();
            }
        }

        // gets the current user
        get user(): any {
            return this._user;
        }

        // gets or sets whether users should remain logged in across sessions
        get keep(): boolean {
            return this._keep;
        }
        set keep(value: boolean) {
            this._keep = asBoolean(value);
        }

        // gets an object to use when filling out forms with user information
        get form(): any {
            return this._form;
        }

        // log in using local provider or cookie
        logIn(email?: string, pw?: string, keep?: boolean, complete?: Function) {
            this._submit({
                cmd: 'login',
                email: email,
                pw: pw,
                keep: keep != null ? keep : this.keep,
                complete: complete
            });
        }

        // log out
        logOut() {
            this._submit({
                cmd: 'logout'
            });
        }

        // log in using OAuth provider (Facebook or Google)
        logInOAuth(provider: string, keep?: boolean) {
            if (keep != null) {
                this.keep = keep;
            }
            switch (provider) {
                case 'facebook':
                    this._authFacebook.logIn();
                    break;
                case 'google':
                    this._authGoogle.logIn();
                    break;
            }
        }
        logInOAuthSubmit(provider: string, token: string, keep?: boolean) {
            this._submit({
                cmd: 'loginOAuth',
                provider: provider,
                token: token,
                keep: keep != null ? keep : this.keep
            });
        }

        // create a new account
        createAccount(name: string, email: string, pw: string, complete?: Function) {
            this._submit({
                cmd: 'create',
                name: name,
                email: email,
                pw: pw,
                complete: complete
            });
        }

        // change account information
        changeAccount(pw: string, newname: string, newpw: string, complete?: Function) {
            this._submit({
                cmd: 'change',
                pw: pw,
                newname: newname,
                newpw: newpw,
                complete: complete
            });
        }

        // reset the password
        resetPassword(email: string, complete?: Function) {
            this._submit({
                cmd: 'reset',
                email: email,
                complete: complete
            });
        }

        // set user data (must be a string)
        setUserData(data: string, async: boolean) {
            if (this.user && this.user.name && this.user.data != data) {
                this.user.data = data;
                this._submit({
                    cmd: 'setdata',
                    data: data
                }, async);
            }
        }

        // occurs when the state of the authorization object changes
        stateChanged = new Event();

        // raises the stateChanged event.
        onStateChanged(e?: EventArgs) {
            this.stateChanged.raise(this, e);
        }

        // submit authentication request to the server
        private _submit(parms: any, async = true) {
            var self = this;
            self.onStateChanged();
            httpRequest('auth.ashx', {
                method: 'POST',
                data: parms,
                async: async,
                complete: function (xhr: XMLHttpRequest) {
                    var result = JSON.parse(xhr.response);
                    self._user = result.user;
                    if (result.error) {
                        self._form['error'] = self._getError(result.error);
                    } else {
                        for (var k in self._form) {
                            delete self._form[k];
                        }
                    }
                    self.onStateChanged();
                    if (isFunction(parms.complete)) {
                        parms.complete(result);
                    }
                }
            });
        }

        private _getError(errorCode: number): string {
            var errors = [
                '', // None,
                'Wrong password, please try again.',        // WrongPassword,
                'User not found, please check the e-mail.', // UserNotFound,
                'Sorry, this e-mail is already in use.',    // EmailTaken,
                'Invalid e-mail.',                          // InvalidEmail,
                'Invalid name.',                            // InvalidName,
                'Invalid password.',                        // InvalidPassword,
                'Failed to send password reset notification (the password was not reset)', // CannotSendMail
            ];
            return errorCode > -1 && errorCode < errors.length ? errors[errorCode] : 'Unknown error.';
        }
    }

    //--------------------------------------------------------------------
    // Facebook authentication class
    // https://developers.facebook.com/apps/
    // https://developers.facebook.com/docs/facebook-login/getting-started-web/
    declare var FB: any;
    class _AuthFacebook {
        _auth: Auth;
        _id: string;

        constructor(auth: Auth, id: string) {
            this._auth = auth;
            this._id = id;

            // initialize Facebook API
            FB.init({ appId: id, status: false });

            // when connected, get user info and submit to server
            var self = this;
            FB.Event.subscribe('auth.authResponseChange', function (response) {
                if (response.status == 'connected') {
                    self._auth.logInOAuthSubmit('facebook', response.authResponse.accessToken);
                }
            });
        }
        logIn() {
            FB.login(null, { scope: 'email' });
        }
    }

    //--------------------------------------------------------------------
    // Google authentication class
    // https://console.developers.google.com/project
    // https://developers.google.com/+/web/signin/#using_the_client-side_flow
    // https://developers.google.com/+/web/api/javascript
    declare var gapi: any;
    class _AuthGoogle {
        _auth: Auth;
        _id: string;

        constructor(auth: Auth, id: string) {
            this._auth = auth;
            this._id = id;
        }
        logIn(immediate = false) {
            var self = this;
            var options = {
                client_id: this._id,
                immediate: immediate,
                scope: 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email'
            };
            gapi.auth.authorize(options, function (result) {
                var token = result ? result['access_token'] : null;
                if (token) {
                    self._auth.logInOAuthSubmit('google', token);
                }
            });
        }
    }
}