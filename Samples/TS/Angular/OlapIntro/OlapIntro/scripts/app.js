'use strict';

// create app object
var app = angular.module('app', ['wj']);

// highlight code blocks 
// (highlight.js requires <pre><code> blocks, we want just <code>)
document.addEventListener("DOMContentLoaded", function () {
    var code = document.querySelectorAll('code');
    for (var i = 0; i < code.length; i++) {
        hljs.highlightBlock(code[i]);
    }
});

