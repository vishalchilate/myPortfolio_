// Controllers

app.controller('MainCtrl',[ '$scope', function($scope){
  $scope.personalDetails = {
    name:'Vishal Chilate',
    aboutMe:'I am Computer Science graduate seeking Entry level position. I am committed, dynamic and an adaptable person who loves to accept challenges and who finds out innovative ways to solve/tackle any problem and eager to learn new technologies and Strive for continued excellence.',
    phone:'(228) 596 2671',
    email:'vishalchilate3@gmail.com',
    fbName:'facebook.com/vishal.chilate',
    twitName:'twitter.com/vishalchilate',
    aboutSite:'This site was built using AngularJS and hosted on Github Pages. You can view the source code on'
  };
  

  
  $scope.experiences = [{
    duration: 'Dec 2014 - Present',
    title: 'Java Developer, Deloitte, Santa Fe, NM',
    details:'Developing feature and functionalities using Deloitte NextGen framework for ASPEN Project which is one stop application for all the social security residents of State of New Mexico.'
  },{
    duration: 'Mar 2014 - Dec 2014',
    title: 'AngularJS Developer, Citrix Online, San Francisco, CA',
    details:'Developed cross platform front ends using HTML5, CSS3, JSON, AngularJS and used chrome developer tools for debugging web pages for GoToAssist product of Citrix'
  },
  {
    duration: 'Jul 2013 - Dec 2013',
    title: 'Research Assistant, University of Southern Mississippi',
    details:'Implemented algorithms for creating lists of unique words and text categorization in Python for research in Natural language processing in which the aim of research is to create contextual pattern by using semantic tagging of text document.'
  },
  {
    duration: 'Jun 2011 - Dec 2012',
    title: 'Software Engineer, HSBC GLT, India',
    details:'Implemented security layer to intercept payments flow for HSBCnet in near-real time based on risk weighted result of fraud engine to prevent suspicious payment transactions being processed by the payment back-offices.'
  },
  {
    duration: 'Jan 2013 - Dec 2013',
    title: 'M.S Computer Science, University of Southern Mississippi',
    details:'GPA 3.82/4.0'
  },
  {
    duration: 'May 2007 - May 2011',
    title: 'B.E. Information Technology, Nagpur University, India',
    details:''
  }];
  
  
  $scope.skills = [{
      skill:'HTML/HTML5, CSS/CSS3, SASS, Bootstrap'
  },
  {
      skill:'AngularJS, JavaScript, Jquery, JSP'
  },
  {
      skill:'Java/J2EE'
  },
  {
      skill:'Spring, Hibernate, Servlet'
  },
  {
      skill:'MySQL, Oracle, DB2'
  },
  {
      skill:'REST, SOAP'
  },
  {
      skill:' Mac, Linux'
  },
  {
      skill:'Eclipse, RAD, Visual Studio'
  },
  {
      skill:'Git, SVN, ClearCase'
  }
  ]

}]);


app.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
    
    //$scope.city = cityService.city;
    
    $scope.$watch('city', function() {
       cityService.city = $scope.city; 
    });
    
}]);


app.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {
    
    $scope.city = cityService.city;
    
    var state_cd = '';
    var city_name = $scope.city.split(' ').join('_');
    
    
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily',{ callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherAPI_new = $resource('https://api.wunderground.com/api/458320d0c703de22/conditions/q/:state_code/:city_nam.json', { callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days })
    
    $scope.weatherResult_new = $scope.weatherAPI_new.get({ state_code: state_cd, city_nam: city_name })
    
    
    
    
    $scope.convertToFahrenheit = function(degK) {
        
        return Math.round((1.8 * (degK - 273)) + 32);
        
    }
    
    $scope.convertToDate = function(dt) { 
      
        return new Date(dt * 1000);
        
    };
    
}]);

