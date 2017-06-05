(function() {
    function addRoomCtrl(Room) {
        this.rooms = Room.add(Room);
    }

    angular
        .module('blocChat')
        .controller('addRoomCtrl', ['Room', addRoomCtrl]);
})();
