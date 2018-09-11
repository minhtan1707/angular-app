angular.module('servicedetails.controller', []).controller("ServiceDetailsController", _servicedetailsController)

function _servicedetailsController($scope,$http,$stateParams) {
	$http({
		method: 'GET',
		url: '/db/services.json'
	}).then(function (response) {
		$scope.service = eval(response.data.services[$stateParams.id]);
	}, function (error) {
		console.log('Lỗi 005 - Service Details: ' + error);
	});
}
