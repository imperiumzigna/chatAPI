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

  // Controla a função de login interagindo com o serviço LoginService
  .controller('LoginCtrl', function($scope, LoginService, $ionicPopup, $state) {
    $scope.data = {};

    $scope.login = function() {
      LoginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
        $state.go('tab.dash');
        var alerta= $ionicPopup.alert({title:'Bem vindo '+ $scope.data.username + ' !'});
      }).error(function(data) {
        var alertPopup = $ionicPopup.alert({
          title: 'Login falhou!',
          template: 'Por favor, cheque suas credenciais!'
        });
      });
    }
    $scope.cadastroForm = function(){
      $state.go('cadastro');
    }

  })
// Controle Logout
  .controller('LogoutCtrl', function($scope,LogoutService, $state) {


    $scope.logout = function(){
    LogoutService.logoutUser($scope.data.username).success(function(data) {

      $state.go('login');
    }).error(function(data){

    })
}
  })

// Envia os dados passados pelo Usuário para o CadastroService cuidar de cadastrar...
  .controller('CadastroCtrl',function($scope,CadastroService,$state){
$scope.cadastrar = function(){

  CadastroService.cadUser($scope.data.name,$scope.data.username,$scope.data.email,$scope.data.password).success(function(data){
    $state.go('tab.dash');
  }).error(function(data){

  })
}
  })

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
