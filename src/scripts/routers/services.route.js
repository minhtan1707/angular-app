angular.module('services.router', []).config(_servicesRoute)

function _servicesRoute($stateProvider, $urlRouterProvider) {
	$stateProvider
		.state('services', {
			url: '/services',
			data : { 
				pageTitle: 'Dịch Vụ' 
			},
			views: {
				"@": {
					controller: 'ServicesController',
					templateUrl: '/views/services.html',
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		})
		.state('services.details',{
			url: '/:id',
			views: {
				"@": {
					controller: 'ServiceDetailsController',
					templateUrl: '/views/service_details.html'
				},
				"menu@": {
					controller: 'MenuController',
					templateUrl: '/views/menu.html'
				}
			}
		})
}
