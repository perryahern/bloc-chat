(function() {
    function ModalInstanceCtrl($uibModalInstance, Room) {
        this.submit = function () {
            Room.add(this.newRoom);
            var exit = $uibModalInstance.close('cancel');
        };

        this.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', 'Room', ModalInstanceCtrl]);
})();
