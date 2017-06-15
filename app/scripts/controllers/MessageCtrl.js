(function() {
    function MessageCtrl(Message) {
        this.messages = Message.all;
    }

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', MessageCtrl]);
})();
