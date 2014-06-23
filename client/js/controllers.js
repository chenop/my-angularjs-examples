var myApp = angular.module('myApp')

    .controller('WelcomeController', function ($scope) {
        $scope.greeting = 'This is a template for a simple marketing or informational website. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.';
    })
    .controller('TableController', function ($scope, $modal, dataService) {
        $scope.users = dataService.fetchTableData();

        $scope.deleteUser = function (userId) {
            dataService.deleteUser(userId);
        }

        $scope.updateUser = function () {
            var modalInstance = $modal.open({
                templateUrl: 'angular-only/client/views/user.html',
                controller: 'NewUserController'
            });
        }

        $scope.editUser = function (userId) {
            var modalInstance = $modal.open({
                templateUrl: 'angular-only/client/views/user.html',
                controller: 'EditUserController',
                resolve: {
                    editableUserId: function () {
                        return userId;
                    }
                }
            });
        }
    })
    .controller('NewUserController', function ($scope, dataService, $modalInstance) {
        $scope.user = {};
        $scope.instruction = "New User";


        $scope.buttonName = "Add";

        $scope.updateUser = function () {
            var user = {
                firstName: $scope.user.firstName,
                lastName: $scope.user.lastName
            }
            dataService.updateUser(user);
            $modalInstance.dismiss('canceled');
        }
    })
    .controller('EditUserController', function ($scope, dataService, $modalInstance, editableUserId) {
        $scope.user = {};
        $scope.instruction = "Edit User";
        $scope.buttonName = "Done";

        if (editableUserId != undefined) {
            var existingUser = dataService.getUser(editableUserId);
            $scope.user.firstName = existingUser.firstName;
            lastName: $scope.user.lastName = existingUser.lastName;
        }

        $scope.updateUser = function () {
            var user = {
                firstName: $scope.user.firstName, lastName: $scope.user.lastName
            }
            dataService.updateUser(user, editableUserId);
            $modalInstance.dismiss('canceled');
        }
    })
    .controller('AlertButtonController', function ($scope, alertService, $timeout) {
        $scope.showAlert = function () {
            alertService.add("success", "This is a warning.");
            $timeout(function () {
                alertService.remove();
            }, 3000);
        }
    })
    .controller('AlertPlaceHolderController', function ($scope, alertService) {
        $scope.remove = function (index) {
            alertService.remove(index);
        }
    })
    .controller('FormController', function() {

    })
