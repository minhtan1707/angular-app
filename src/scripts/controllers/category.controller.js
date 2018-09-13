angular.module('category.controller', []).controller("CategoryController", _categoryController)

function _categoryController($scope, $http) {
	$http({
		method: 'GET',
		url: '/db/categories.json'
	}).then(function (response) {
		$scope.data = eval(response.data.categories);
	}, function (error) {
		console.log('Lỗi 006 - Category: ' + error);
	});
}
