var app = angular.module('myApp');


app.factory('Resto', function($http){
     var resto = 
       {
         infosResto : function() {
            return $http.get('app/data/menu1.json').then(function(response) {    
                        return response.data;
            });
          }
        };
        return resto;
    });


app.factory('nextMonth', function($http){
     var next = 
       {
         nextMonth : function() {
            return $http.get('app/data/nextMonth.json').then(function(response) {    
                        return response.data;
            });
          }
        };
        return next;
    });


app.factory('prevMonth', function($http){
     var prev = 
       {
         prevMonth : function() {
            return $http.get('app/data/prevMonth.json').then(function(response) {    
                        return response.data;
            });
          }
        };
        return prev;
    });