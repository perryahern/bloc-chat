(function() {
    function Room($firebaseArray) {
        var Room = {};
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);

        // Retrieve all chat rooms
        Room.all = rooms;

        // Save a new chat room to Firebase
        Room.add = function(room) {
            rooms.$add({ $value: room });
        };

        return Room;
    }

    angular
        .module('blocChat')
        .factory('Room', ['$firebaseArray', Room]);
})();
