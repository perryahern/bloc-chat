(function() {
    function AddRoomCtrl(Room, $uibModal) {
        this.addNewRoom = function() {
            $uibModal.open({
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
