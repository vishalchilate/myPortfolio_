// routes

app.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl:'portfolio/pages/home.html'
    })
    .when('/home', {
        templateUrl:'portfolio/pages/home.html'
    })
    .when('/weatherIndex', {
        templateUrl:'portfolio/pages/weatherIndex.html',
        controller: 'homeController'
    })
    .when('/about', {
        templateUrl:'portfolio/pages/about.html',
       
    })
    .when('/contact', {
        templateUrl:'portfolio/pages/contact.html',
       
    })
    .when('/forecast', {
        templateUrl: 'portfolio/pages/forecast.html',
        controller: 'forecastController'
    })
    .when('/forecast/:days', {
        templateUrl: 'portfolio/pages/forecast.html',
        controller: 'forecastController'
    })
    
});

