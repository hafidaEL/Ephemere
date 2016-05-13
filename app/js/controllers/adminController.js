var app = angular.module('myApp');


app.controller('adminController', function($scope, Resto, $http) {
    $scope.today = new Date();


/* pour telecharger le json en local sur le client */
 $scope.enregistrer = function () {
 	

  var data =  JSON.stringify($scope.infos) ;  
  var filename = 'menu1.json';
  var blob = new Blob([data], {type: 'text/json'}),
  e = document.createEvent('MouseEvents'),
  a = document.createElement('a');
  a.download = filename;
  a.href = window.URL.createObjectURL(blob);
  a.dataset.downloadurl = ['text/json', a.download, a.href].join(':');
  e.initEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
  a.dispatchEvent(e);

 }

$scope.enregistrerBAD = function()
{

   //var data = { json : JSON.stringify($scope.infos) };
   var data = { "json": "4" };
   var config = {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
    };
    console.log("enregistrement ... "+data) ;
   $http.post('http://localhost:8000/ChefEnCours', data, config) 
            .success(function (data, status, headers, config) {
              console.log("donnees envoyees ok ") ;
               // $scope.PostDataResponse = data;
            })
            .error(function (data, status, header, config) {

               console.log("pb lors envoi donnees ") ;
               /* $scope.ResponseDetails = "Data: " + data +
                    "<hr />status: " + status +
                    "<hr />headers: " + header +
                    "<hr />config: " + config; */
            });
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
