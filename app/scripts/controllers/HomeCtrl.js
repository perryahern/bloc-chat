(function() {
    function HomeCtrl(Room, Message, $cookies) {
        this.rooms = Room.all;
        this.currentRoomKey = null;
        var greeting = '';

        this.currentUser = $cookies.get('blocChatCurrentUser');

        if (this.currentUser) {
            greeting = 'Welcome ' + this.currentUser + '. ';
        }
        this.currentRoomName = greeting + 'Pick a room, any room, or add one!';

        this.changeRoom = function(roomKey, roomName) {
            this.currentRoomKey = roomKey;
            this.currentRoomName = roomName;
            this.messages = Message.getByRoomId(this.currentRoomKey);
        };

        this.submitMessage = function() {
            if (this.newMessage !== '') {
                var newMessagePrep = {};
                newMessagePrep.username = this.currentUser;
                newMessagePrep.content = this.newMessage;
                var now = new Date();
                var hours = now.getHours();
                var amPm = 'a.m.';
                if (hours > 12) {
                    hours -= 12;
                    amPm = 'p.m.';
                } else if (hours === 0) {
                    hours = 12;
                }
                var minutes = now.getMinutes();
                if (minutes < 10) {
                    minutes = '0' + minutes;
                }
                newMessagePrep.sentAt = hours + ':' + minutes + ' ' + amPm + ' on ' + (now.getMonth() + 1) + '/' + now.getDate() + '/' + (now.getFullYear() - 2000);
                newMessagePrep.roomId = this.currentRoomKey;
                this.newMessage = '';
                Message.send(newMessagePrep);
            }
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', HomeCtrl]);
})();
