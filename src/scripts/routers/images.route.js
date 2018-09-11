angular.module('images.router', []).config(_imagesRoute)

function _imagesRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('images', {
			url: '/images',
			data : { 
				pageTitle: 'Hình ảnh' 
			},
			views: {
				"@": {
					controller: 'ImagesController',
					templateUrl: '/views/images.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		})
}
