angular.module('myApp', ['ui.router','ctrlModule'])
    .config(function ($locationProvider,$urlRouterProvider,$stateProvider) {
      $locationProvider
      .html5Mode({
        enabled: true, 
        requireBase: false
      });

      $urlRouterProvider
      .when('/','/app/home')
      .otherwise('/app/home')



      $stateProvider
      .state('app',{
        url:'/app',
        templateUrl:'views/test.html',
        controller:'testCtrl'
      })





      .state('app.home',{
        url:'/home',
        views:{
          "content":{
            templateUrl:'views/view.html'
          }
        }
      })
      .state('app.funcpermission',{
        url:'/funcpermission',
        views:{
          "content":{
            templateUrl:'views/view.html'
          }
        }
      })
      .state('app.mdm',{
        url:'/mdm',
        views:{
          "content":{
            templateUrl:'views/view.html'
          }
        }
      })
      .state('app.loginlogs',{
        url:'/loginlogs',
        views:{
          "content":{
            templateUrl:'views/view.html'
          }
        }
      })
      .state('app.setup',{
        url:'/setup',
        views:{
          "content":{
            templateUrl:'views/view.html'
          }
        }
      })
      .state('app.addrprivacyconfig',{
        url:'/addrprivacyconfig',
        views:{
          "content":{
            templateUrl:'views/view.html'
          }
        }
      })
      .state('app.business',{
        url:'/business',
        views:{
          "content":{
            templateUrl:'views/view.html'
          }
        }
      })
      .state('app.managelogs',{
        url:'/managelogs',
        views:{
          "content":{
            templateUrl:'views/view.html'
          }
        }
      })
    })


    
.run(function ($rootScope) {
   $rootScope.$on('$stateChangeSuccess', function (event,toState,toParam,fromState,fromParams) {
      $rootScope.currentState=toState.name
    })
})



 