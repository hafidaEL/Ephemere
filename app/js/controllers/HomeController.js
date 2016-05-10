console.log('Hello');
app.controller('HomeController', function($scope, Resto) {
        $scope.today = new Date();

         Resto.infosResto().then(function(data) {
             $scope.infos = data;
             console.log($scope.infos.resto.chef) ;
         }).catch(function() {
          $scope.error = 'erreur lors de la lecture du fichier json du resto';
         });

    });
