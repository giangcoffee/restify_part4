"use strict";

function newUserListener(name, email) {
    // tính toán tổng số user ở đây
    console.log('New user has been created with name: ' + name + ' and email: ' + email);
}

module.exports = {
    newUserListener: newUserListener
};
