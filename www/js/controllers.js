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

.controller('TaskListCtrl', function($scope) {
  console.log('\t=> TaskListCtrl')
  $scope.tasks = $scope.project.tasks;
})

.controller('TaskDetailCtrl', function($scope) {
  console.log('\t\t=> TaskDetailCtrl')
})

.controller('MessageListCtrl', function($scope) {
  console.log('\t=> MessageListCtrl')
  $scope.messages = $scope.project.messages
})

.controller('MessageDetailCtrl', function($scope) {
  console.log('\t\t=> MessageDetailCtrl')
})
