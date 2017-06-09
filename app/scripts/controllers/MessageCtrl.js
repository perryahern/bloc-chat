(function() {
    function MessageCtrl(Message) {
        this.messages = Message;
    }

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', MessageCtrl]);
})();
