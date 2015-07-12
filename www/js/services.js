angular.module('starter')

.factory('Projects', function() {

  var Projects = {}

  Projects.all = function() {
    return [
      {
        id: 1,
        name: "Project #1",
        tasks: [
          {id: 1, title: "Task 1.1", desc: "Task Description 1.1"},
          {id: 2, title: "Task 1.2", desc: "Task Description 1.2"},
          {id: 3, title: "Task 1.3", desc: "Task Description 1.3"},
        ],
        messages: [
          {id: 1, title: "Message 1.1", desc: "Message Content 1.1"},
          {id: 2, title: "Message 1.2", desc: "Message Content 1.2"},
          {id: 3, title: "Message 1.3", desc: "Message Content 1.3"},
        ]
      },
      {
        id: 2,
        name: "Project #2",
        tasks: [
          {id: 4, title: "Task 2.1", desc: "Task Description 2.1"},
          {id: 5, title: "Task 2.2", desc: "Task Description 2.2"},
          {id: 6, title: "Task 2.3", desc: "Task Description 2.3"},
        ],
        messages: [
          {id: 4, title: "Message 2.1", desc: "Message Content 2.1"},
          {id: 5, title: "Message 2.2", desc: "Message Content 2.2"},
          {id: 6, title: "Message 2.3", desc: "Message Content 2.3"},
        ]
      },
    ];
  }

  Projects.get = function(projectID) {
    var project = null;

    angular.forEach(Projects.all(), function(p) {
      if(projectID.toString() === p.id.toString()) {
        project = p
      }
    })

    return project
  }
  
  Projects.getItem = function(itemType, projectID, itemID) {
    var project = Projects.get(projectID),
        item = null;
        
    if(project && project[itemType] && project[itemType].length) {
      angular.forEach(project[itemType], function(i) {
        if(itemID.toString() === i.id.toString()) {
          item = i;
        }
      })
    }
    
    return item;
  }
  
  Projects.getTask = function(projectID, taskID) {
    return Projects.getItem('tasks', projectID, taskID);
  }
  
  Projects.getMessage = function(projectID, taskID) {
    return Projects.getItem('messages', projectID, taskID);
  }

  return Projects

})
