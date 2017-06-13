(function() {
    function HomeCtrl(Room, Message, $cookies) {
        this.rooms = Room.all;
        this.currentRoomKey = null;
        var currentUser = $cookies.get('blocChatCurrentUser');
        var greeting = '';

        if (currentUser) {
            greeting = 'Welcome back ' + currentUser + '. ';
        }
        this.currentRoomName = greeting + 'Pick a room, any room, or add one!';

        this.changeRoom = function(roomKey, roomName) {
            this.currentRoomKey = roomKey;
            this.currentRoomName = roomName;
            this.messages = Message.getByRoomId(this.currentRoomKey);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
