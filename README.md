Problems:

1) TaskListCtrl gets called twice.
    - not when page first loads.
    - but subsequently when changing Projects from the Side Menu.
    - $stateParams is as expected both times (i.e. the just-clicked project)
    - however $scope.tasks is not as expected. First time is the previous project's tasks. Second time is the just-clicked project's tasks.

2) When navigating to TaskDetailCtrl directly, there is no "< Back" button.

3) When navigating to TaskDetailCtrl directly, you cannot click the "Tasks" tab to return to TaskListCtrl.

4) Should we show the SideMenu Toggle when on Task/Message Detail?