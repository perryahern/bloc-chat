(function() {
    function HomeCtrl(Room) {
        this.rooms = Room.all;
        this.currentRoom = 'test';
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', HomeCtrl]);
})();
