angular.module('userProfiles').controller('MainController', function($scope, mainService){
    
    $scope.thisAppIsBroken = "This angular app is working";
   $scope.getUsers = function(){
       
       $scope.users = mainService.getUsers();
        console.log($scope.users)
   }
   $scope.getUsers()
$scope.toggleFavorite = mainService.toggleFavorite; 
})

