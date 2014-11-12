angular.module('portfolio',['ngRoute'])
.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/projects', {
        templateUrl: '/includes/views/projects.html',
        controller: 'dataListCtrl'
    }).
    when('/', {
        templateUrl: '/includes/views/info.html'
    }).
    otherwise({
        redirectTo: ''
    });
}])
.controller("dataListCtrl", function($scope, $http) {
    $scope.data = {};

    $http.get('http://novacourtois.com/data.json').
        success(function(data) {
            $scope.data = data;
        });
})
.filter('unsafe', function($sce) {
	return function(val) {
		return $sce.trustAsHtml(val);
    };
});