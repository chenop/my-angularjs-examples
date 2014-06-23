var myApp = angular.module('myApp')

// Put the focus on the username textfield
.directive('autoFocus', function ($timeout) {
    return {
        restrict: 'AC',
        link: function (_scope, _element) {
            $timeout(function () {
                _element[0].focus(function() {
                    this.select();
                });
            }, 0);
        }
    };
})
