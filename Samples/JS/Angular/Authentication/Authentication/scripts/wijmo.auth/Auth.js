/**
*/
var wijmo;
(function (wijmo) {
    var auth;
    (function (auth_1) {
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
        var Auth = (function () {
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
            function Auth(idFacebook, idGoogle, options) {
                this._keep = false;
                this._form = {};
                // occurs when the state of the authorization object changes
                this.stateChanged = new wijmo.Event();
                // initialize authentication providers
                if (idFacebook) {
                    this._authFacebook = new _AuthFacebook(this, idFacebook);
                }
                if (idGoogle) {
                    this._authGoogle = new _AuthGoogle(this, idGoogle);
                }
                // apply any options
                wijmo.copy(this, options);
                // try logging in using cookie from last session
                var self = this;
                if (document.cookie) {
                    self.logIn();
                }
            }
            Object.defineProperty(Auth.prototype, "user", {
                // gets the current user
                get: function () {
                    return this._user;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Auth.prototype, "keep", {
                // gets or sets whether users should remain logged in across sessions
                get: function () {
                    return this._keep;
                },
                set: function (value) {
                    this._keep = wijmo.asBoolean(value);
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Auth.prototype, "form", {
                // gets an object to use when filling out forms with user information
                get: function () {
                    return this._form;
                },
                enumerable: true,
                configurable: true
            });
            // log in using local provider or cookie
            Auth.prototype.logIn = function (email, pw, keep, complete) {
                this._submit({
                    cmd: 'login',
                    email: email,
                    pw: pw,
                    keep: keep != null ? keep : this.keep,
                    complete: complete
                });
            };
            // log out
            Auth.prototype.logOut = function () {
                this._submit({
                    cmd: 'logout'
                });
            };
            // log in using OAuth provider (Facebook or Google)
            Auth.prototype.logInOAuth = function (provider, keep) {
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
            };
            Auth.prototype.logInOAuthSubmit = function (provider, token, keep) {
                this._submit({
                    cmd: 'loginOAuth',
                    provider: provider,
                    token: token,
                    keep: keep != null ? keep : this.keep
                });
            };
            // create a new account
            Auth.prototype.createAccount = function (name, email, pw, complete) {
                this._submit({
                    cmd: 'create',
                    name: name,
                    email: email,
                    pw: pw,
                    complete: complete
                });
            };
            // change account information
            Auth.prototype.changeAccount = function (pw, newname, newpw, complete) {
                this._submit({
                    cmd: 'change',
                    pw: pw,
                    newname: newname,
                    newpw: newpw,
                    complete: complete
                });
            };
            // reset the password
            Auth.prototype.resetPassword = function (email, complete) {
                this._submit({
                    cmd: 'reset',
                    email: email,
                    complete: complete
                });
            };
            // set user data (must be a string)
            Auth.prototype.setUserData = function (data, async) {
                if (this.user && this.user.name && this.user.data != data) {
                    this.user.data = data;
                    this._submit({
                        cmd: 'setdata',
                        data: data
                    }, async);
                }
            };
            // raises the stateChanged event.
            Auth.prototype.onStateChanged = function (e) {
                this.stateChanged.raise(this, e);
            };
            // submit authentication request to the server
            Auth.prototype._submit = function (parms, async) {
                if (async === void 0) { async = true; }
                var self = this;
                self.onStateChanged();
                wijmo.httpRequest('auth.ashx', {
                    method: 'POST',
                    data: parms,
                    async: async,
                    complete: function (xhr) {
                        var result = JSON.parse(xhr.response);
                        self._user = result.user;
                        if (result.error) {
                            self._form['error'] = self._getError(result.error);
                        }
                        else {
                            for (var k in self._form) {
                                delete self._form[k];
                            }
                        }
                        self.onStateChanged();
                        if (wijmo.isFunction(parms.complete)) {
                            parms.complete(result);
                        }
                    }
                });
            };
            Auth.prototype._getError = function (errorCode) {
                var errors = [
                    '',
                    'Wrong password, please try again.',
                    'User not found, please check the e-mail.',
                    'Sorry, this e-mail is already in use.',
                    'Invalid e-mail.',
                    'Invalid name.',
                    'Invalid password.',
                    'Failed to send password reset notification (the password was not reset)',
                ];
                return errorCode > -1 && errorCode < errors.length ? errors[errorCode] : 'Unknown error.';
            };
            return Auth;
        }());
        auth_1.Auth = Auth;
        var _AuthFacebook = (function () {
            function _AuthFacebook(auth, id) {
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
            _AuthFacebook.prototype.logIn = function () {
                FB.login(null, { scope: 'email' });
            };
            return _AuthFacebook;
        }());
        var _AuthGoogle = (function () {
            function _AuthGoogle(auth, id) {
                this._auth = auth;
                this._id = id;
            }
            _AuthGoogle.prototype.logIn = function (immediate) {
                if (immediate === void 0) { immediate = false; }
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
            };
            return _AuthGoogle;
        }());
    })(auth = wijmo.auth || (wijmo.auth = {}));
})(wijmo || (wijmo = {}));
//# sourceMappingURL=Auth.js.map