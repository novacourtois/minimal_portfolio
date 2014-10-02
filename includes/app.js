angular.module('portfolio',[])
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