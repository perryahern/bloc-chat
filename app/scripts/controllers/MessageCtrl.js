(function() {
    function MessageCtrl(Message) {
        this.messages = Message.all;

        this.submitMessage = function(userMessage) {
            console.log('submitMessage!');
        };
    }

    angular
        .module('blocChat')
        .controller('MessageCtrl', ['Message', MessageCtrl]);
})();
