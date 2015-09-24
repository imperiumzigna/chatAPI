angular.module('starter.services', [])

.factory('Chats', function() {
  // Requisições para chatAPI

  // Dados de teste
  var chats = [{
    id: 0,
    name: 'Pessoa 1',
    lastText: 'Café',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Pessoa 2',
    lastText: 'Com',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Pessoa 3',
    lastText: 'Matlab',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 3,
    name: 'Pessoa 4',
    lastText: 'É',
    face: 'https://pbs.twimg.com/profile_images/598205061232103424/3j5HUXMY.png'
  }, {
    id: 4,
    name: 'Pessoa 5',
    lastText: 'Bom',
    face: 'https://pbs.twimg.com/profile_images/578237281384841216/R3ae1n61.png'
  }]


  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

  .service('LoginService', function($q) {
    return {
      loginUser: function(name, pw) {

        var deferred = $q.defer();
        var promise = deferred.promise;

        if (name == 'igor' && pw == 'senha') {
          deferred.resolve('Bem vindo ' + name + '!');
        } else {
          deferred.reject('Credenciais erradas.');
        }
        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        }
        return promise;
      }
    }
  })

.service('LogoutService',function(){
    return{
      logoutUser: function(me){
// A implementar
        // Método de logout


      }

    }
  })

.service('CadastroService',function(){
    return{
      cadUser: function(name,user,email,pw){

        var deferred = $q.defer();
        var promise = deferred.promise;

      var userData = {
      Name:name,
        Username:user,
        Email:email,
        Password:pw
      }

        // Colocar aqui o método de envio dos dados de acesso


        //
        promise.success = function(fn) {
          promise.then(fn);
          return promise;
        }
        promise.error = function(fn) {
          promise.then(null, fn);
          return promise;
        }
        return promise;
      }
    }
  });


