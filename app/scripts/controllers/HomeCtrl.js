(function() {
    function HomeCtrl(Room, Message, $scope) {
        this.rooms = Room.all;
        this.currentRoomKey = null;
        this.currentRoomName = 'Select a room from the list on the left';

        this.changeRoom = function(roomKey, roomName) {
            this.currentRoomKey = roomKey;
            this.currentRoomName = roomName;
            this.messages = Message.getByRoomId(this.currentRoomKey);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();
