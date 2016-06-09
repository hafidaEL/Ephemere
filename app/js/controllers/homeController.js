var app = angular.module('myApp');


app.controller('homeController', function($scope, Resto) {
        $scope.today = new Date();

         Resto.infosResto('courant').then(function(data) {
             $scope.infos = data;
             //console.log($scope.infos.resto.chef) ;
         }).catch(function() {
          $scope.error = 'erreur lors de la lecture du fichier json du resto';
         });

    });
