angular.module('shop.router', []).config(_shopRoute)

function _shopRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('shop', {
			url: '/shop',
			data : { 
				pageTitle: 'Gian Hàng' 
			},
			views: {
				"@": {
					controller: 'ShopController',
					templateUrl: '/views/shop.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		});
}
