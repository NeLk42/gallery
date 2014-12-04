angular.module('directives', [])
    .directive('navigatHome',
        ['$window',
            function($window) {
                return {
                    restrict: 'A',
                    link: function (scope, elem, attrs) {
                        elem.bind('click', function () {
                            $window.location.href="/";
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