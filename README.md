# cdlib-email

```node
var cdMail = require('cdlib-email');

var emailMsg = cdMail.msgEmail;

//setup message
emailMsg.smtpServer = 'smtp.out.com';
emailMsg.to = 'foo@bar.com';
emailMsg.from = 'bar@foo.com';
emailMsg.subject = 'some subject';
emailMsg.htmlBody = '<b>Here</b> is the body in Html';
emailMsg.message = 'Here is the body as text';

//send message
cdMail.sendEmailHtml(emailMsg);  //send as html
cdMail.sendEmail(emailMsg);     //send as text


```


<h3>Installation</h3>
```
install: npm install --save cdlib-email

```


