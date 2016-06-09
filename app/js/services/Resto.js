var app = angular.module('myApp');



// service qui lit le fichier json du chef 
app.factory('Resto', function($http){
     var resto = 
       {
         infosResto : function(paramChef) {
            //return $http.get('app/data/menu1.json').then(function(response) { 
                console.log(" demande du chef "+paramChef);
            return $http.get(API_URL+'/lecture/'+paramChef).then(function(response) {   
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
            //return $http.get(API_URL+'/data/nextMonth.json').then(function(response) { 
             return $http.get(API_URL+'/lecture/suivant').then(function(response) {     
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
            //return $http.get(API_URL+'/data/prevMonth.json').then(function(response) { 
             return $http.get(API_URL+'/lecture/precedent').then(function(response) {   
                        return response.data;
            });
          }
        };
        return prev;
    });