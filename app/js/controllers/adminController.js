var app = angular.module('myApp');


app.controller('adminController', function($scope, Resto) {
    $scope.today = new Date();



 $scope.enregistrer = function () {
 	

   var data =  JSON.stringify($scope.infos) ;


  
   var filename = 'menu1.json';
  var blob = new Blob([data], {type: 'text/json'}),
    e = document.createEvent('MouseEvents'),
    a = document.createElement('a');

  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
  e.initEvent('click', true, false, window,
      0, 0, 0, 0, 0, false, false, false, false, 0, null);
  a.dispatchEvent(e);





 }

// gestion des données du mois en cours
    Resto.infosResto().then(function(data) {
        $scope.infos = data;
        $scope.chef = data.resto.chef;
        console.log("chef " + $scope.chef.prenom);
    }).catch(function() {
        $scope.error = 'erreur lors de la lecture du fichier json du resto';
    });

});
