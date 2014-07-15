(function (angular) {
    var module = angular.module("myApp", []);

    module.directive("myClick", function ($http) {
        return {
            restrict: "EA",
            link: function (scope, element) {
                element.bind("click", function () {
                    alert("I was clicked");
                });
            }
        };
    });


    module.directive("myTemplate", function () {
        return {
            restrict: "E",
            replace: true,
            transclude: true,
            //scope: true,
            scope: {
                myDemo: "="
            },
            templateUrl: "/myTemplate.html"
        }
    })

}(angular))