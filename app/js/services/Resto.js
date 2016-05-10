app.factory('Resto', function($http){
     var resto = 
       {
         infosResto : function() {
            return $http.get('menu1.json').then(function(response) {    
                        return response.data;
            });
          },
          nextMonth : function() {
            var test = $http.get('nextMonth.json').success(function(res){
                    return res;
                });
            return test;
          }
        };
        return resto;
    });