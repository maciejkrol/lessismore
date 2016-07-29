/*global document, window*/
/*jslint this:true */
/*jslint for:true */

(function () {
    'use strict';

    document.lessismore = {
        _initialized: false,

        _init: function () {
            if (this._initialized) {
                return;
            }

            this._initialized = true;

            if (document.readyState === 'complete' || document.readyState === 'interactive') {
                this.clean();
            } else {
                document.addEventListener('DOMContentLoaded', function () {
                    document.lessismore.clean();
                });
            }

            window.setInterval(function () {
                document.lessismore.clean();
            }, 5000);
        },

        clean: function () {
            var styles = {
                '#pagelet_suggested_events': {
                    'display': 'none'
                },
                '#events_suggestion_pagelet': {
                    'display': 'none'
                },
                '.home_right_column': {
                    'min-height': '0px'
                },
                '#pagelet_sidebar': {
                    'display': 'none'
                },
                '#pagelet_ego_pane': {
                    'display': 'none'
                },
                '#appsNav': {
                    'display': 'none'
                },
                '#interestsNav': {
                    'display': 'none'
                },
                '#pagesNav': {
                    'display': 'none'
                },
                '#event_related_events': {
                    'display': 'none'
                },
                '#pagelet_rhc_footer': {
                    'display': 'none'
                },
                '#pageFooter': {
                    'display': 'none'
                },
                '#globalContainer': {
                    'padding-right': '0px'
                }
            };

            Object.keys(styles).forEach(function (_selector) {
                this.getElements(_selector, function (_element) {
                    this.applyStyles(_element, styles[_selector]);
                }, this);
            }, this);
        },

        getElements: function (_selector, _callback, _thisArg) {
            var type = _selector[0];
            var selector = _selector.substring(1);
            if (type === '#') {
                var element = document.getElementById(selector);
                if (element !== null) {
                    _callback.call(_thisArg, element);
                }
            } else if (type === '.') {
                var elements = document.getElementsByClassName(selector);
                var i = 0;
                for (i = 0; i < elements.length; i += 1) {
                    _callback.call(_thisArg, elements[i]);
                }
            }
        },

        applyStyles: function (_element, _styles) {
            Object.keys(_styles).forEach(function (_key) {
                _element.style[_key] = _styles[_key];
            }, this);
        }
    };

    document.lessismore._init();
} ());