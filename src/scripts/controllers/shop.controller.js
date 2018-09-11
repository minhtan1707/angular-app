angular.module('shop.controller', []).controller("ShopController", _shopController)

function _shopController($scope,$http) {
	$http({
		method: 'GET',
		url: '/db/shop.json'
	}).then(function (response) {
		$scope.shop = eval(response.data.lists);
	}, function (error) {
		console.log('Lỗi 003 - Shop: ' + error);
	});
}
