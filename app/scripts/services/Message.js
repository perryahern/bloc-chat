(function() {
    function Message($firebaseArray) {
        var Message = {};
        var ref = firebase.database().ref().child("messages");
        var messages = $firebaseArray(ref);

        // Retrieve the messages for the selected room
        Message.getByRoomId = function(newRoomId) {
            return $firebaseArray(ref.orderByChild('roomId').equalTo(newRoomId));
        };

        // Save a new message to Firebase
        Message.send = function(newMessage) {
            messages.$add(newMessage);
        };

        return Message;
    }

    angular
        .module('blocChat')
        .factory('Message', ['$firebaseArray', Message]);
})();
