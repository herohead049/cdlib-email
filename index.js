/*jslint nomen: true */
/*jslint node:true */
/*jslint vars: true */
/*jslint es5: true */

/*eslint-env node */
/*eslint quotes: [2, "single"], curly: 2*/

'use strict';

function sendEmail(msgEmail) {
    var email = require('emailjs');
    var server = email.server.connect({
            host: msgEmail.smtpServer
        }),
        message = {
            text: msgEmail.body,
            from: msgEmail.from,
            to: msgEmail.to,
            cc: '',
            subject: msgEmail.subject
        };
    server.send(message, function (err) {
        if (err !== null) {
            console.log('sendEmail: Error', err);
        } else {
            console.log('sendEmail: No Error');
        }
    });

}



function sendEmailHtml(msgEmail) {
    var email = require('emailjs');
    var server = email.server.connect({
            host: msgEmail.smtpServer
        }),
        message = {
            text: msgEmail.body,
            from: msgEmail.from,
            to: msgEmail.to,
            cc: '',
            subject: msgEmail.subject,
            attachment: [
                {
                    data: msgEmail.htmlData,
                    alternative: true
                }
                ]
        };
    return new Promise(function (resolve, reject) {
        server.send(message, function (err) {
            if (err !== null) {
                reject('sendHtml: Error');
            } else {
                resolve('sendHtml: No Error');
            }
        });
    });
}

var msgEmail = {
    smtpServer: '',
    to: '',
    from: '',
    subject: 'test subject',
    body: 'body text',
    htmlData: '<b>H</b>tml body',
    type: 'html'
};

exports.msgEmail = msgEmail;
exports.sendEmailHtml = sendEmailHtml;
exports.sendEmail = sendEmail;
