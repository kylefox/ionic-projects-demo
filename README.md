# Ionic Projects Demo

This is a sample Ionic app that demonstrates using `ion-side-menus` and `ion-tabs` together.

The basic idea is: choose a Project from the side menu, then use the Tasks and Messages tabs to traverse that Project's navigation hierarchy.

**I am brand new to Ionic and would LOVE any feedback.** If there's a better way to structure or code the app, please let me know! :)

Existing demos I found did not illustrate the requirement I had:

* You have access to multiple Projects.
* Projects have Tasks and Messages.
* The side menu contains a list of Project.
* The main content area has tabs for Tasks and Messages
* Change the active project by selecting from the side menu

All the samples I found used hard-coded states/templates. None demonstrated **how to use the same tab structure for different "contexts"** (ex: choosing another project from the side menu).

# Problems

1) TaskListCtrl gets called twice.
    - not when page first loads.
    - but subsequently when changing Projects from the Side Menu.
    - $stateParams is as expected both times (i.e. the just-clicked project)
    - however $scope.tasks is not as expected. First time is the previous project's tasks. Second time is the just-clicked project's tasks.

2) When navigating to TaskDetailCtrl directly, there is no "< Back" button.

3) When navigating to TaskDetailCtrl directly, you cannot click the "Tasks" tab to return to TaskListCtrl.

4) [UI Question] Should the SideMenu Toggle be visible when on Task/Message Detail?