angular.module('TodoApp', ['angular-datepicker']).
controller('TodoCtrl', ['$scope', function($scope) {

    //add function
    $scope.addTodo = function() {
        $scope.todos.push({
            status: false,
            text: $scope.todoText,
            priority: $scope.todoPriority,
            deadline: $scope.todoDeadline
        });
        $scope.todoText = '';
        $scope.save();
    };

    //remove function
    $scope.removeTodo = function(id) {
        if ($scope.todos.length > 1) {
            $scope.todos.splice(id, 1);
        } else {
            $scope.todos = "";
        }
        $scope.save();
    }

    //save function
    $scope.save = function() {
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };

    //init function
    $scope.init = function() {
        $scope.todoPriority = 0;
        $scope.todoDeadline = new Date().toLocaleDateString();
        $scope.saved = localStorage.getItem('todos');

        if (($scope.todos = localStorage.getItem('todos')) !== null) {
            $scope.todos = JSON.parse($scope.todos);
        } else {
            $scope.todos = [{
                status: false,
                text: "Sketch app",
                priority: 2,
                deadline: "01.04.2015"
            }, {
                status: true,
                text: "Learn some angular",
                priority: 1,
                deadline: "05.04.2015"
            }, {
                status: false,
                text: "Do the task",
                priority: 0,
                deadline: "06.04.2015"
            }];
        }
        $scope.save();
    }
    
    $scope.init();
}]);
