(function() {
    function Message($firebaseArray, $cookies) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        Message.getByRoomId = function(newRoomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(newRoomId));
        };

        Message.send = function(newMessage) {
            var currentUser = $cookies.get('blocChatCurrentUser');
            console.log(currentUser + 'is in the newMessage function');
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', '$cookies', Message]);
})();
