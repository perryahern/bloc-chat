(function() {
    function UserModalInstanceCtrl($uibModalInstance, $cookies, $state) {
        this.submit = function () {
            if (this.newUser) {
                $cookies.put('blocChatCurrentUser', this.newUser);
                $state.reload();
                var exit = $uibModalInstance.close('cancel');
            }
        };

        this.cancel = function () {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('UserModalInstanceCtrl', ['$uibModalInstance', '$cookies', '$state', UserModalInstanceCtrl]);
})();
