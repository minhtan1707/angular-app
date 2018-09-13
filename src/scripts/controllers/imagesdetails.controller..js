angular.module('imagesdetails.controller', []).controller("ImagesDetailsController", _imagesdetailsController)

function _imagesdetailsController($scope,$http,$stateParams) {
	$scope.id=$stateParams.id
	$http({
		method: 'GET',
		url: '/db/image.json'
	}).then(function (response) {
		$scope.images = eval(response.data.list);
	}, function (error) {
		console.log('Lỗi 007 - Images Details: ' + error);
	});
}
