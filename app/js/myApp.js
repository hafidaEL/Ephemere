var app = angular.module('myApp', ['ngRoute']);

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
      .otherwise({
        redirectTo: '/'
      });
  }]);


// TODO : route /about
// TODO : route /contact