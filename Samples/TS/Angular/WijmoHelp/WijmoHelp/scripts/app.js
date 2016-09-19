var app = angular.module('app', ['ngRoute'] );

// controller for the whole app
app.controller('appCtrl', function ($scope, $location) {

    // add fixed classes when scrolled (TAE)
    window.onscroll = function () {
        if (window.pageYOffset > 170) {
            document.querySelector('.toc').classList.add('fixed');
            document.querySelector('.toc-col').classList.add('fixed');
            document.querySelector('.content-col').classList.add('col-md-offset-2');
        } else {
            document.querySelector('.toc').classList.remove('fixed');
            document.querySelector('.toc-col').classList.remove('fixed');
            document.querySelector('.content-col').classList.remove('col-md-offset-2');
        }
    };

    // add class to show TOC on mobile devices (TAE)
    document.querySelector('.mobileNav').addEventListener('click', function() {
        document.querySelector('.toc-col').classList.toggle('mobileActive');
        document.querySelector('#content').classList.toggle('mobileHide');
    });

    // remove class to hide TOC on click from within TOC (TAE)
    document.querySelector('.toc').addEventListener('click', function() {
        document.querySelector('.toc-col').classList.remove('mobileActive');
        document.querySelector('#content').classList.remove('mobileHide');
    });

    // show inherited members by default
    $scope.ctx = {
        showInherited: true,
        showRaisers: true
    };

    // persist user preferences
    var appKey = 'WijmoHelp';
    window.onunload = function () {
        try {
            localStorage[appKey] = JSON.stringify($scope.ctx);
        } catch (x) { }
    }
    try {
        var pref = localStorage[appKey];
        if (pref) {
            pref = JSON.parse(pref);
            var ctx = $scope.ctx;
            for (var key in pref) {
                if (ctx.hasOwnProperty(key)) {
                    ctx[key] = pref[key];
                }
            }
        }
    } catch(x) {}


    // go method:
    // adds 'topic/' to the relative url so it gets routed to the view
    $scope.go = function (url) {
        $location.path('topic/' + url);
    };

    // collapse/expand nodes
    document.addEventListener('click', function (e) {
        
        if (e.button == 0 && !e.defaultPrevented) {
            var t = e.target,
                c = t.classList;
            if (c.contains('node')) {

                // toggle this node
                c.toggle('collapsed');
                e.preventDefault();

                // when expanding an item in a node list, collapse all siblings
                if (!c.contains('collapsed')) {
                    var p = t.parentElement;
                    if (p.classList.contains('nodelist')) {
                        for (var i = 0; i < p.children.length; i++) {
                            if (p.children[i] != t) {
                                c = p.children[i].classList;
                                if (c.contains('node')) {
                                    c.add('collapsed');
                                }
                            }
                        }
                    }
                }

                // navigate to link
                if (t.tagName == 'A') {
                    var pos = t.href.indexOf('/topic/');
                    $location.path(t.href.substring(pos));
                    if (!$scope.$$phase) {
                        $scope.$apply();
                    }
                }
            }
        }
    }, true);
});

// handle successful topic loading
app.run(function ($rootScope, $anchorScroll) {
    $rootScope.$on('$routeChangeSuccess', function (e, next) {
        var interval = setInterval(function () {
            if (document.readyState == 'complete') {

                // done with timer
                clearInterval(interval);
                $anchorScroll();

                // make topics SEO-friendly
                var heading = document.querySelector('#content h2'),
                    meta = document.querySelector('meta[name=description]'),
                    content = document.querySelector('#content p:not(:empty)');
                if (heading !== null) {
                    document.title = heading.textContent.trim() + ' - Wijmo 5 Help';
                }
                if (meta !== null && content !== null) {
                    meta.setAttribute('content', content.textContent.trim());
                }

                // highlight code blocks 
                var code = document.querySelectorAll('pre');
                for (var i = 0; i < code.length; i++) {
                    hljs.highlightBlock(code[i]);
                }

                // load embedded fiddles
                var async = document.querySelectorAll("#content .fiddle script[async]");
                for (var i = 0; i < async.length; i++) {
                    embedFiddle(async[i]);
                }

                // update TOC to make sure this topic is open
                var url = next.loadedTemplateUrl;
                if (url) {
                    url =
                        url.indexOf('partials/static/') == 0 ? url.substring(9) :
                        url.indexOf('partials/generated/topics/') == 0 ? 'topic/' + url.substring(26) :
                        null;
                    if (url) {
                        var root = document.querySelector('.toc a[href="' + url + '"]');
                        if (root) {

                            // de-select all nodes
                            var nodes = document.querySelectorAll('.toc .selected');
                            for (var i = 0; i < nodes.length; i++) {
                                nodes[i].classList.remove('selected');
                            }

                            // expand current node and all ancestors
                            for (var node = root; node;) {
                                var c = node.classList;
                                c.add('selected');
                                c.remove('collapsed');
                                var p = node.parentElement;
                                node = p.classList.contains('nodelist') ? p.previousElementSibling : null;
                            }
                        }
                    }
                }
            }
        }, 100);
    });

    // see http://jsfiddle.net/Wijmo5/QNb9X/embed/
    function embedFiddle(target) {
        var uid = "JSFEMB_" + (~~(new Date().getTime() / 86400000)),
            uriOriginal = target.src,
            uriEmbedded = target.src.replace('embed', 'embedded');
        var iframe = document.createElement('iframe');
        iframe.src = uriEmbedded;
        iframe.id = uid;
        iframe.width = iframe.height = '100%';
        iframe.frameBorder = '0';
        iframe.allowtransparency = true;
        iframe.sandbox = 'allow-forms allow-popups allow-scripts allow-same-origin';
        target.parentNode.insertBefore(iframe, target.nextSibling);
    }
});

// route provider
app.config(function ($routeProvider, $locationProvider) {

    // no hashes in urls (to be SEO friendly)
    $locationProvider.html5Mode(true);

    $routeProvider.
        when('/topic/:id', { // return url to automatically-generated topic
            templateUrl: function (args) {
                return 'partials/generated/topics/' + args.id;
            }
        }).
        when('/static/:id', { // return url to manually-generated (static) topic
            templateUrl: function (args) {
                return 'partials/static/' + args.id;
            }
        }).
        when('/', { templateUrl: 'partials/static/home.html' }). // default
        otherwise({ redirectTo: '/' });
});

