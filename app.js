angular.module('img-gallery', ['ui.router'])
	.config(
		['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {

				$stateProvider
					.state('home', {
						url: '/home',
						templateUrl: 'templates/home.html',
						controller: 'MainController'
					})
					.state('image', {
						url:'/image/{id}',
						templateUrl: 'templates/images.html',
						controller: 'ImagesController'
					});

				$urlRouterProvider.otherwise('home');
			}
		]
	)
	.factory('imageFactory',
		[
			function () {
				var o = {

					imageList: [
						{title:'Red shirt', image: './img/shirt3.jpg' , favourite: false, link: '',  added: new Date()},
						{title:'Superman shirt', image: './img/shirt.jpg' ,favourite: false, link: '', added: new Date()},
						{title:'Jeans', image: './img/pants.jpg' , favourite: false, link: '',  added: new Date()},
						{title:'Chinese shirt', image: './img/shirt2.jpg' , favourite: true, link: '',  added: new Date()}
					]
				};

				return o;
			}
		]
	)
	.controller('MainController',
		['$scope', 'imageFactory',
			function ($scope, images) {

				$scope.imgs = images.imageList;

				$scope.addImg = function () {
					if(!$scope.title || $scope.title === ''){return;}

					$scope.imgs.push({
						title: $scope.title,
						favourite: false,
						link: $scope.link,
						added: new Date()
					});

					$scope.title = '';
					$scope.link = '';

				};

				$scope.favourite = function (img) {
					img.favourite = !img.favourite;
				};

				$scope.update = function (img) {
					img.added = new Date();
				};
			}
		]
	)
	.controller('ImagesController',
		['$scope', 'imageFactory',
			function ($scope, images) {

				$scope.imgs = images.imageList;

				$scope.addImg = function () {
					if(!$scope.title || $scope.title === ''){return;}

					$scope.imgs.push({
						title: $scope.title,
						favourite: false,
						link: $scope.link,
						added: new Date()
					});

					$scope.title = '';
					$scope.link = '';

				};

				$scope.favourite = function (img) {
					img.favourite = !img.favourite;
				};

				$scope.update = function (img) {
					img.added = new Date();
				};
			}
		]
	);
