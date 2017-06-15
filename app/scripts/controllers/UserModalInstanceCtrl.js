(function() {
    function UserModalInstanceCtrl($uibModalInstance, $cookies) {
        this.submit = function () {
            if (this.newUser) {
                $cookies.put('blocChatCurrentUser', this.newUser);
                window.location.reload(true);
                var exit = $uibModalInstance.close('cancel');
            }
        };
    }

    angular
        .module('blocChat')
        .controller('UserModalInstanceCtrl', ['$uibModalInstance', '$cookies', UserModalInstanceCtrl]);
})();
