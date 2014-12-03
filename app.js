angular.module('img-gallery', [])
	.controller('MainCtrl',
		['$scope',
			function ($scope) {
				$scope.test = 'Bleh';

				$scope.imgs = [
					{title:'Donatello', favourite: false, link: '', added: new Date()},
					{title:'Michelangelo', favourite: true, link: '',  added: new Date()},
					{title:'Raphael', favourite: false, link: '',  added: new Date()},
					{title:'Leonardo', favourite: false, link: '',  added: new Date()},
				];

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
				}

				$scope.update = function (img) {
					img.added = new Date();
				}
			}
		]
	);
