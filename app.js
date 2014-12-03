angular.module('img-gallery', ['ui.router'])
	.config(
		['$stateProvider', '$urlRouterProvider',
			function ($stateProvider, $urlRouterProvider) {
				$stateProvider
					.state('home', {
						url:'/home',
						templateUrl: '/home.html',
						controller: 'MainCtrl'
					}
				);

				$urlRouterProvider.otherwise('home');
			}
		]
	)
	.factory('imageFactory',
		[
			function () {
				var o = {

					imageList: [
						{title:'Donatello', favourite: false, link: '', added: new Date()},
						{title:'Michelangelo', favourite: true, link: '',  added: new Date()},
						{title:'Raphael', favourite: false, link: '',  added: new Date()},
						{title:'Leonardo', favourite: false, link: '',  added: new Date()},
					]
				};

				return o;
			}
		]
	)
	.controller('MainCtrl',
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
