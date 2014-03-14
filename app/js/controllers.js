 var erpControllers = angular.module('erpControllers', []);
 
erpControllers.controller('HomeCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $scope.title="Welcome, Kaiqi";
	 $http.get('../mockData/applist.json').success(function(data) {
      $scope.apps = data;
    });    
  }]);
  
  erpControllers.controller('ContactCtrl', ['$scope', '$http',
  function ($scope, $http) {
    $scope.title="联系人";
    $scope.icon="./img/128px/layers_128px.png";
    $scope.backUrl="#/home";
    $scope.currentPage = 1;
  	 $http.get('../mockData/contacts.json').success(function(data) {
      $scope.items = data;
    });
  }]);
  
  erpControllers.controller('ContactDetailCtrl', ['$scope', '$http','$routeParams',
  function ($scope, $http,$routeParams) {
    $scope.backUrl="#/contact";
    $scope.contact=null;
    $http.get('../mockData/contact' + $routeParams.id +'.json').success(function(data) {
      $scope.contact = data;
      $scope.title = data.name;
    });
  }]);
  
  
 