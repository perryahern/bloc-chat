(function() {
    function AddRoomCtrl(Room, $uibModal) {
        this.addNewRoom = function() {
//            var roomName = window.prompt("Enter a room name:");
//            this.rooms = Room.add(roomName);

            var result = $uibModal.open({
                templateUrl: '/templates/addRoom.html',
                controller: 'ModalInstanceCtrl',
                controllerAs: '$modal'
            });
        };
    }

    angular
        .module('blocChat')
        .controller('AddRoomCtrl', ['Room', '$uibModal', AddRoomCtrl]);
})();
