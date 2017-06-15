(function() {
    function BlocChatCookies($cookies, $uibModal) {
        var currentUser = $cookies.get('blocChatCurrentUser');
        // Check if there's a username set; if not, open a modal to get one
        if (!currentUser || currentUser === '') {
            $uibModal.open({
                templateUrl: '/templates/addUser.html',
                controller: 'UserModalInstanceCtrl',
                controllerAs: '$modal',
                backdrop: 'static',
                keyboard: false
            });
        }
    }

    angular
        .module('blocChat')
        .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
