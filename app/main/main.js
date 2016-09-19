'use strict';
angular.module('main', [
  'ionic',
  'ngCordova',
  'ui.router',
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/login'); // '/main/home'
  $stateProvider
  // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'main/templates/login.html',
      // controller: 'SomeCtrl as ctrl'
    })
    .state('main.community', {
      url: '/community',
      views: {
        'tab-community': {
          templateUrl: 'main/templates/community/community.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })
    .state('main.listDetail', {
      url: '/community/detail',
      views: {
        'tab-community': {
          templateUrl: 'main/templates/community/community-detail.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })

    // --- New stat --- ---
    .state('main.listDetailTwo', {
      url: '/community/detailTwo',
      views: {
        'tab-community': {
          templateUrl: 'main/templates/community/community-detail-two.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })

    .state('main.userPlebian', {
      url: '/community/userPlebian',
      views: {
        'tab-community': {
          templateUrl: 'main/templates/community/community-user-plebian.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })

    .state('main.tasks', {
      url: '/tasks',
      views: {
        'tab-tasks': {
          templateUrl: 'main/templates/tasks.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })

    .state('main.home', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'main/templates/home/home.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })

    .state('main.homeScore', {
      url: '/home',
      views: {
        'tab-home': {
          templateUrl: 'main/templates/home/home.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })

    .state('main.mail', {
      url: '/mail',
      views: {
        'tab-mail': {
          templateUrl: 'main/templates/mail.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })

    .state('main.conference', {
      url: '/conference',
      views: {
        'tab-conference': {
          templateUrl: 'main/templates/conference.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })

    .state('main.profile', {
      url: '/profile',
      views: {
        'tab-profile': {
          templateUrl: 'main/templates/profile.html',
          // controller: 'SomeCtrl as ctrl'
        }
      }
    })

    // --- --- --- --- ---
    .state('main.debug', {
      url: '/debug',
      views: {
        'tab-debug': {
          templateUrl: 'main/templates/debug.html',
          controller: 'DebugCtrl as ctrl'
        }
      }
    });
});
