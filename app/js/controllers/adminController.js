var app = angular.module('myApp');


app.controller('adminController', function($window, $scope, Resto, $route, $http) {
    $scope.today = new Date();

     // le chef est dans la route (soit courant soit suivant)
   $scope.paramChef = $route.current.$$route.paramChef;

// gestion des données du mois demandé (en cours ou prochain)
    Resto.infosResto($scope.paramChef).then(function(data) {
        $scope.infos = data;
        $scope.chef = data.resto.chef;
        console.log("chef " + $scope.chef.prenom);
    }).catch(function() {
        $scope.error = 'erreur lors de la lecture du fichier json du resto';
    });


    $scope.enregistrer = function()
    {
      var config = {   headers : {'Content-Type': 'application/json'} };
      var data =  JSON.stringify($scope.infos)  ;

      $http.post(API_URL+'/admin/update/'+$scope.paramChef, data, config)
             .then(
                  function(response){
                  console.log(" donnees envoyees "+data);
                  $window.location.href = 'http://hafidael.github.io/Ephemere';
              }, 
                  function(response){
                  alert(' erreur ' + response);
             }
        );          
    };

    $scope.basculer = function() {

      $http.post(API_URL+'/admin/basculer/')
             .then(
                  function(response){
                  console.log(" basculement ok"+response);
                  $window.location.href = 'http://hafidael.github.io/Ephemere';
              }, 
                  function(response){
                  alert(' erreur ' + response);
             }
        ); 

    }
 

});






// /* pour telecharger le json en local sur le client */
//  $scope.enregistrer2 = function () {
  

//   var data =  JSON.stringify($scope.infos) ;  
//   var filename = 'menu1.json';
//   var blob = new Blob([data], {type: 'text/json'}),
//   e = document.createEvent('MouseEvents'),
//   a = document.createElement('a');
//   a.download = filename;
//   a.href = window.URL.createObjectURL(blob);
//   a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
//   e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
//   a.dispatchEvent(e);

//  }
