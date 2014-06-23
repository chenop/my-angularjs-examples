var myApp = angular.module('myApp')
    .factory('dataService', function () {
        var _idCounter = 2;
        var users = [
            {
                'id' : 0,
                'firstName': 'Chen',
                'lastName': 'Oppenhaim'
            },
            {
                'id' : 1,
                'firstName': 'Hadas',
                'lastName': 'Abutbul'
            }

        ];

        var fetchTableData = function () {
            return users;
        };

        function findUser(id, callBack) {
            angular.forEach(users, function (user) {
                if (user.id === id) {
                    callBack(user);
                }
            })
        }

        var updateUser = function (user, id) {
            if (id === undefined) {
                users.push({
                    'id' : _idCounter++,
                    'firstName': user.firstName,
                    'lastName': user.lastName
                });
            }
            else {
                findUser(id, function(existingUser) {
                    existingUser.firstName = user.firstName;
                    existingUser.lastName = user.lastName;
                })
            }
        }

        var deleteUser = function(userId) {
            var foundKey;
            var user = getUser(userId);
            users.splice(user.id, 1);
        }

        var getUser = function(userId) {
            var foundKey;
            angular.forEach(users, function (user, key) {
                if (user.id === userId) {
                    foundKey = key;
                    return;
                }
            });
            return users[foundKey];
        }

        return {
            fetchTableData: fetchTableData
            , updateUser: updateUser
            , getUser: getUser
            , deleteUser: deleteUser
        }
    })
    .factory('alertService', function ($rootScope) {
        var id = 0;
        var alertService = {};

        // create an array of alerts available globally
        $rootScope.alerts = [];

        alertService.add = function (type, msg) {
            $rootScope.alerts.push({'type': type, 'msg': msg + id++});
        };

        alertService.remove = function (index) {
            if (index == undefined)
                index = 0;
            $rootScope.alerts.splice(index, 1);
        };

        return alertService;
    })