var app = angular.module('myApp', ['ngRoute', 'ngAnimate']);

app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'js/templates/main.html',
        controller: 'homeController'
      })
      .when('/reservation', {
        templateUrl: 'js/templates/reservation.html',
        controller: 'reservationController'
      })
      .when('/cv', {
        templateUrl: 'js/templates/cv.html',
        controller: 'cvController'
      })
      .when('/cvNext', {
        templateUrl: 'js/templates/cv.html',
        controller: 'cvControllerNext'
      })
      .when('/cvPrev', {
        templateUrl: 'js/templates/cvPrecedent.html',
        controller: 'cvControllerPrev'
      })
      .when('/admin', {
        templateUrl: 'js/templates/admin.html',
        controller: 'adminController'
      })
      .when('/about', {
        templateUrl: 'js/templates/about.html',
        controller: 'homeController'
      })
      .when('/contact', {
        templateUrl: 'js/templates/contact.html',
        controller: 'homeController'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);


// TODO : route /about
// TODO : route /contact