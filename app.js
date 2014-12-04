angular.module('img-gallery', [
		'ui.router',
		'directives'
		]
	)
	.config(
		['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {

				$stateProvider
					.state('home', {
						url: '/home',
						templateUrl: 'templates/home.html',
						controller: 'MainController'
					})
					.state('images', {
						url:'/images/{id}',
						templateUrl: 'templates/image.html',
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
						{title:'Chinese shirt', image: './img/shirt2.jpg' , favourite: false, link: '',  added: new Date(),
							worn: [], category: 'Shirt', colors: ['black', 'yellow'], price: 50, seasons: ['winter', 'fall']},
						{title:'Jeans', image: './img/pants.jpg' , favourite: true, link: '',  added: new Date(),
							worn: [], category: 'Pants', colors: ['blue'], price: 50, seasons: ['any']},
						{title:'Superman shirt', image: './img/shirt.jpg' ,favourite: true, link: '', added: new Date(),
							worn: [], category: 'Shirt', colors: ['red', 'blue'], price: 50, seasons: ['summer']},
						{title:'Red shirt', image: './img/shirt3.jpg' , favourite: false, link: '',  added: new Date(),
							worn: [], category: 'Shirt', colors: ['red'], price: 50, seasons: ['summer']}
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
						image: './img/boots.jpg',
						favourite: false,
						link: $scope.link,
						added: new Date(),
						worn: [],
						category: 'Shoes',
						colors: ['black'],
						price: 50,
						seasons: ['any']
					});
					$scope.title = '';
					$scope.link = '';

				};

				$scope.favourite = function (img) {
					img.favourite = !img.favourite;
				};

				$scope.update = function (img) {
					img.worn.push(new Date());
				};
			}
		]
	)
	.controller('ImagesController',
		['$scope', '$stateParams', 'imageFactory',
			function ($scope, $stateParams, images) {

				$scope.img = images.imageList[$stateParams.id];




				$scope.favourite = function (img) {
					img.favourite = !img.favourite;
				};

				$scope.update = function (img) {
					img.worn.push(new Date());
				};
			}
		]
	);
