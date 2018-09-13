angular.module('imagescategory.controller', []).controller("ImagesCategoryController", _imagescategoryController)

function _imagescategoryController($scope,$http,$stateParams) {
	$scope.category=$stateParams.category
	$http({
		method: 'GET',
		url: '/db/image.json'
	}).then(function (response) {
		$scope.images = eval(response.data.list);
	}, function (error) {
		console.log('Lỗi 007 - Images list: ' + error);
	});
}
