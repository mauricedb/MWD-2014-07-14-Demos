(function (angular) {

    var demoApp = angular.module("demoApp", ["ngResource"]);

    //demoApp.factory("booksSvc", function ($http) {

    //    return {
    //        query: function () {
    //            return $http.get("/api/books")
    //             .then(function (e) {
    //                 var books = e.data;
    //                 return books;
    //             },
    //             function () {
    //                 alert("Oops");
    //             });

    //        }
    //    }
    //});

    //demoApp.controller("BooksCtrl", function ($scope, booksSvc) {
    //    $scope.books = [];
    //    booksSvc.query().then(function (books) {
    //        [].push.apply($scope.books, books);
    //    });
    //});

    demoApp.factory("Book", function($resource) {
        return $resource("/api/books");
    })

    demoApp.controller("BooksCtrl", function ($scope, Book) {
        $scope.books = Book.query();
        $scope.books.$promise.then(function() {
            //alert($scope.books.length);

            $scope.books[0].$save();
        });

    });


}(angular));