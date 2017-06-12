(function() {
    function HomeCtrl(Room, Message, $scope) {
        this.rooms = Room.all;
        $scope.currentRoom = 'test';
        this.currentRoom = null;

        this.changeRoom = function(roomKey) {
            console.log("in changeRoom");
            console.log("roomKey received: " + roomKey);
            console.log("previous value: " + $scope.currentRoom);
            $scope.currentRoom = roomKey;
            console.log("after assignment: " + $scope.currentRoom);
            this.currentRoom = roomKey;
            this.messages = Message.getByRoomId(this.currentRoom);
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$scope', HomeCtrl]);
})();
