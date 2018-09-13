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
					controller: 'CategoryController',
					templateUrl: '/views/category.html'
				}
			}
		})
		.state('images.category', {
			url: '/:category',
			data : { 
				pageTitle: 'Categories' 
			},
			views: {
				"@": {
					controller: 'ImagesCategoryController',
					templateUrl: '/views/imagescategory.html',
				},
				"menu@": {
					controller: 'CategoryController',
					templateUrl: '/views/category.html'
				}
			}
		})
}
