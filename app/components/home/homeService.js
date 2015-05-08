(function(){

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
			});
	});
	
})();