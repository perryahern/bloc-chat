(function() {
    function HomeCtrl(Room, Message, $scope) {
        this.rooms = Room.all;
        $scope.currentRoom = 'test';
        this.currentRoom = null;

        this.changeRoom = function(roomKey) {
            this.currentRoom = roomKey;
            this.messages = Message.getByRoomId(this.currentRoom);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();
