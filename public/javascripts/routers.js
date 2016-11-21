angular.module('myApp', ['ui.router','ctrlModule'])
    .config(function ($locationProvider,$urlRouterProvider,$stateProvider) {
      $locationProvider
      .html5Mode({
        enabled: true, 
        requireBase: false
      });

      $urlRouterProvider
      .when('/','/test/view1')
      .otherwise('/test/view1')



      $stateProvider
      .state('test',{
        url:'/test',
        templateUrl:'views/test.html',
        controller:'testCtrl'
      })





      .state('test.view1',{
        url:'/view1',
        views:{
          "content":{
            templateUrl:'views/view1.html'
          }
        }
      })
      .state('test.view2',{
        url:'/view2',
        views:{
          "content":{
            templateUrl:'views/view2.html'
          }
        }
      })
      .state('test.view3',{
        url:'/view3',
        views:{
          "content":{
            templateUrl:'views/view3.html'
          }
        }
      })
      .state('test.view4',{
        url:'/view4',
        views:{
          "content":{
            templateUrl:'views/view4.html'
          }
        }
      })
      .state('test.view5',{
        url:'/view5',
        views:{
          "content":{
            templateUrl:'views/view5.html'
          }
        }
      })
    })
    // .run(function ($rootScope) {
    //    $rootScope.$on('$stateChangeSuccess', function (event,toState,toParam,fromState,fromParams) {
    //         console.log(toState.name)
    //     })
    // });

    .factory('nowstate', function ($rootScope) {
      $rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
        return toState.name
      });
    })
 