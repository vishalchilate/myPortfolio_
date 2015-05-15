// Directives
app.directive('ngExperienceCustom', function(){
    
   return{
    restrict: 'E',
    templateUrl: 'portfolio/directives/experienceCustom.html',
    scope: {
        expObj: "="
    }
   }
    
});

app.directive('ngSkillCustom', function(){
    
   return{
    restrict: 'E',
    templateUrl: 'portfolio/directives/skillCustom.html',
    scope: {
        skillObj: "="
    }
   }
    
});

app.directive("weatherReport", function() {
   return {
       restrict: 'E',
       templateUrl: 'portfolio/directives/weatherReport.html',
       replace: true,
       scope: {
           weatherDay: "=",
           convertToStandard: "&",
           convertToDate: "&",
           dateFormat: "@"
       }
   }
});


