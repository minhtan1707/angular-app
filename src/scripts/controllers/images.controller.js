angular.module('images.controller', []).controller("ImagesController", _imagesController)

function _imagesController($scope,$http) {
	$http({
		method: 'GET',
		url: '/db/image.json'
	}).then(function (response) {
		$scope.data = eval(response.data.list);
	}, function (error) {
		console.log('Lỗi 005 - Images: ' + error);
	});
}
