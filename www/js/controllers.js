angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('NewImageCtrl', function($scope) {

  $scope.image = "";
  $scope.takePhoto = function()
  {
    navigator.camera.getPicture(onSuccess, onError, cameraOptions)
  };

  var onError = function(err)
  {

  }

  var cameraOptions = {
    correctOrientation: true,
    targetWidth: 200,
    targetHeight: 400
  };

  var onSuccess = function(photo)
  {
    $scope.image = photo;
    $scope.$apply();
    console.log(photo);
  }

})
.controller('GalleryCtrl', function($scope, Photos) {
  $scope.photos = Photos.all();
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
