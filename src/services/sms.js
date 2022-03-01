const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const sms = (text, phoneNumber) => {
  client.messages
    .create({
      body: text,
      from: '+18317774359',
      to: `+258${phoneNumber}`
    })
    .then(message => console.log("Mensagem enviada"));
}



module.exports = {
  sms
}