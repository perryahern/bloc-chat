(function() {
    function AddRoomCtrl(Room) {
        this.addNewRoom = function() {
//            var roomName = window.prompt("Enter a room name:");
//            this.rooms = Room.add(roomName);

            var test = $uibModal.open({
                templateURL: '/templates/addRoom.html',
                controller: 'AddRoomCtrl'
            });

            console.log("Opened");
        };
    }

    angular
        .module('blocChat', ['ui.bootstrap'])
        .controller('AddRoomCtrl', ['Room', '$uibModal', AddRoomCtrl]);
})();
