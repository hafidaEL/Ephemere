var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/js/templates/main.html',
        controller: 'homeController'
      })
      .when('/reservation', {
        templateUrl: 'app/js/templates/reservation.html',
        controller: 'reservationController'
      })
      .when('/cv', {
        templateUrl: 'app/js/templates/cv.html',
        controller: 'cvController'
      })
      .when('/cvNext', {
        templateUrl: 'app/js/templates/cv.html',
        controller: 'cvControllerNext'
      })
      .when('/cvPrev', {
        templateUrl: 'app/js/templates/cvPrecedent.html',
        controller: 'cvControllerPrev'
      })
      .when('/admin', {
        templateUrl: 'app/js/templates/admin.html',
        controller: 'adminController'
      })
      .when('/about', {
        templateUrl: 'app/js/templates/about.html',
        controller: 'homeController'
      })
      .when('/contact', {
        templateUrl: 'app/js/templates/contact.html',
        controller: 'homeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);


// TODO : route /about
// TODO : route /contact