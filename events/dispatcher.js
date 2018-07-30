"use strict";

const events = require('events');
const eventEmitter = new events.EventEmitter();
const UserListener = require('./listeners/userListener');

function newUserEvent(name, email) {
    //lắng nghe sự kiện
    eventEmitter.once('NEW_USER_CREATED', UserListener.newUserListener);
    // sinh ra sự kiện
    eventEmitter.emit('NEW_USER_CREATED', name, email);
}

module.exports = {
    newUserEvent: newUserEvent
};
