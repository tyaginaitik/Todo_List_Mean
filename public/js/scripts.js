angular.module('myApp', [])
.controller('mainController', ['$scope', '$http', function($scope, $http) {
    $scope.formData = {};
    // create todo list
    $scope.createTodo = function() {
    	$http.post('/api/naitik_todos', $scope.formData)
			.then(function(data) {
				$scope.formData = {}; // clear the form so our user is ready to enter another
				$scope.todos = data.data;
				console.log(data.data);
			},function(data) {
				console.log('Error: ' + data);
			});

    };
    // when landing on the page, get all todos and show them
    $http.get('/api/naitik_todos')
        .then(function(data) {
            $scope.todos = data.data;
        },function(data) {
            console.log('Error: ' + data);
        });
}]);