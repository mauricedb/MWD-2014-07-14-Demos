(function() {
    var app = angular.module("myApp", ["ngRoute"]);


    app.config(function($routeProvider) {

        $routeProvider.when("/list", {
            controller: "ListCtrl",
            templateUrl: "/ListTemplate.html"
        });

        $routeProvider.when("/details/:id", {
            controller: "DetailsCtrl",
            templateUrl: "/DetailsTemplate.html",
            resolve: {
                id: function($route) {
                    return $route.current.params.id;
                }
                //book: function($http, $route) {
                //    return $http.get("/api/books/"+ $route.current.params.id)
                //}
            }
        });


        $routeProvider.otherwise({ redirectTo: "/list" });

    });

    app.controller("ListCtrl", function ($scope, $location) {
        console.log("In ListCtrl");
        

        $scope.goto = function(id) {
            $location.path("/details/" + id);
        }
    });

    app.controller("DetailsCtrl", function ($scope, id) {
        $scope.id = id;
        console.log("In DetailsCtrl");

    });

}());