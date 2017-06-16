(function() {
    function HomeCtrl(Room, Message, $cookies, $uibModal) {
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

        this.changeUser = function() {
            $uibModal.open({
                templateUrl: '/templates/changeUser.html',
                controller: 'UserModalInstanceCtrl',
                controllerAs: '$modal',
            });
        };

        this.submitMessage = function() {
            // Make sure a room has been selected
            if (this.currentRoomKey) {
                // Make sure the message isn't empty due to use of '' to clear message input  field
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
            } else {
                alert("Please select a room from the list on the left, then try again.");
            }
        };
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message', '$cookies', '$uibModal', HomeCtrl]);
})();
