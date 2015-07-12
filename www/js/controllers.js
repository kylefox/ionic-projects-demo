angular.module('starter')

.controller('SideMenuCtrl', function($scope, Projects) {
  console.log('=> SideMenuCtrl')
  $scope.projects = Projects.all();
})

.controller('ProjectListCtrl', function($scope) {
  console.log('=> ProjectListCtrl')
})

.controller('ProjectDetailCtrl', function($scope, project) {
  $scope.project = project;
  console.log('=> ProjectDetailCtrl (' + $scope.project.name + ')')
})

.controller('TaskListCtrl', function($scope, $stateParams) {
  $scope.tasks = $scope.project.tasks;

  console.log('\t=> TaskListCtrl')
  console.log('\t\t=> $stateParams: ', $stateParams)
  console.log('\t\t=> $scope.tasks[0].title: ', $scope.tasks[0].title)
})

.controller('TaskDetailCtrl', function($scope, task) {
  console.log('\t=> TaskDetailCtrl')
  console.log('\t\t=> task: ', task.title)
  $scope.task = task;
})

.controller('MessageListCtrl', function($scope) {
  console.log('\t=> MessageListCtrl')
  $scope.messages = $scope.project.messages
})

.controller('MessageDetailCtrl', function($scope, message) {
  console.log('\t\t=> MessageDetailCtrl')
  $scope.message = message;
})
