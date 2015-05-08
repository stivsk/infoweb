(function(){

	// create the module and name it yeison
	var yeison = angular.module('yeison', ['ngRoute']);

	// configure our routes
	yeison.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/', {
				templateUrl : 'app/components/home/homeView.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/imagenes', {
				templateUrl : 'app/components/imagenes/imagenesView.html',
				controller  : 'imageController'
			})

			// route for the contact page
			.when('/videos', {
				templateUrl : 'app/components/videos/videosView.html',
				controller  : 'videoController'
			})
			.when('/textos', {
				templateUrl : 'app/components/textos/textosView.html',
				controller 	: 'textoController'

			})

			.when('/presentacion', {
				templateUrl : 'app/components/presentacion/presentacion.html',
				controller 	: 'presentacionController'

			});
	});

	// create the controller and inject Angular's $scope
	yeison.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.ruta = 'pages/bla.html';
	});

	yeison.controller('desktopController', function($scope) {
		$scope.titulo = 'Look! I am an about page.';
	});

	yeison.controller('webController', function($scope) {
		$scope.titulo = 'Contact us! JK. This is just a demo.';
	});

	yeison.controller('mobileController', function($scope) {
		$scope.titulo = 'mobile first';
	});

})();