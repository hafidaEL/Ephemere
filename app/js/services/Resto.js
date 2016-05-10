var app = angular.module('myApp');


app.factory('Resto', function($http){
     var resto = 
       {
         infosResto : function() {
            return $http.get('data/menu1.json').then(function(response) {    
                        return response.data;
            });
          },
          nextMonth : function() {
             return $http.get('data/nextMonth.json').then(function(response) {    
                        return response.data;
            });
          }
        };
        return resto;
    });