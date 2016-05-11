var app = angular.module('myApp');


app.controller('cvController', function($scope, Resto) {
    $scope.today = new Date();

    Resto.infosResto().then(function(data) {
        $scope.infos = data;
        $scope.chef = data.resto.chef;
        console.log("chef " + $scope.chef.prenom);
    }).catch(function() {
        $scope.error = 'erreur lors de la lecture du fichier json du resto';
    });

});
