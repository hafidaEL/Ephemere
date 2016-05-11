var app = angular.module('myApp');


app.controller('cvControllerNext', function($scope, nextMonth) {
    $scope.today = new Date();

// gestion des données du mois prochain
    nextMonth.nextMonth().then(function(data) {
        $scope.infos = data;
        $scope.chef = data.resto.chef;
        console.log("chef " + $scope.chef.prenom);
    }).catch(function() {
        $scope.error = 'erreur lors de la lecture du fichier json du mois prochain';
    });

});




