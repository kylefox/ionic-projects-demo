angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('home', {
    url: "/home",
    templateUrl: "templates/home.html",
  })

  .state('project', {
    url: "/projects/:projectID",
    abstract: true,
    cache: false,
    controller: 'ProjectDetailCtrl',
    templateUrl: "templates/project.tabs.html",
    resolve: {
      project: function($stateParams, Projects) {
        return Projects.get($stateParams.projectID);
      }
    }
  })

  .state('project.tasks', {
    url: '/tasks',
    views: {
      'tasks-tab': {
        templateUrl: 'templates/task.list.html',
        controller: 'TaskListCtrl'
      }
    }
    // Use resolve to set `tasks = $scope.project.tasks?`
  })
  
  .state('project.task-detail', {
    url: '/tasks/:taskID',
    views: {
      'tasks-tab': {
        templateUrl: 'templates/task.detail.html',
        controller: 'TaskDetailCtrl'
      }
    },
    resolve: {
      task: function($stateParams, Projects) {
        return Projects.getTask($stateParams.projectID, $stateParams.taskID)
      }
    }
  })

  .state('project.messages', {
    url: '/messages',
    views: {
      'messages-tab': {
        templateUrl: 'templates/message.list.html',
        controller: 'MessageListCtrl'
      }
    }
  })

  $urlRouterProvider.otherwise('/home');
});
