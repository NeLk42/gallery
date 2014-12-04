angular.module('directives', [])
    .directive('navigateHome',
        ['$window',
            function($window) {
                return {
                    restrict: 'A',
                    link: function (scope, elem, attrs) {
                        elem.bind('click', function () {
                            $window.location.href="index.html";
                        })
                    }
                }
            }
        ]
    )
    .directive('navigateBack',
        ['$window',
            function($window) {
                return {
                    restrict: 'A',
                    link: function (scope, elem, attrs) {
                        elem.bind('click', function () {
                            $window.history.back();
                        })
                    }
                }
            }
        ]
    );