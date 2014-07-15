(function (angular) {

    var demoApp = angular.module("demoApp", []);

    demoApp.service("utils", function() {
        return {
            log:function (msg) { console.log(msg); }

        };
    });

    demoApp.controller("DemoCtrl", ["$scope", "$http", "utils", function($scope, $hello, utils) {
        utils.log("In DemoCtrl");

        $scope.model = {
            name: "Mike"
        };

        $scope.people = [
            { name: "Maurice" },
            { name: "John" },
            { name: "Jack" }
        ];

        $scope.clicked = function() {
            console.log($scope.model);
        }
    }]);


}(angular));

