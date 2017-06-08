(function() {
    function ModalInstanceCtrl($uibModalInstance) {
        this.submit = function () {
            var exit = $uibModalInstance.close('cancel');
        };

        this.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalInstanceCtrl', ['$uibModalInstance', ModalInstanceCtrl]);
})();
