(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.getByRoomId = function(newRoomId) {
        return $firebaseArray(ref.orderByChild('roomId').equalTo(newRoomId));
    };

    // Message.all = $firebaseArray(ref);
    return Message;
  }

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
