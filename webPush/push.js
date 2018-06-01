var webPush = require("web-push");

var pushSubscription = {
  endpoint:
    "https://fcm.googleapis.com/fcm/send/eXbfX3qkCYI:APA91bElr4dcoMYmDkHunGuw5M8ee0Z2xG9l-x417whLCKWt8-sUWccozwutOi1ZPJSDKp5sDLpNKUjSvIp4Y2ZG4ROf2itEyIn9JmVUl9TfU1e1JF2l8LEDS82hrAQhLyNmyxAnzf00",
  keys: {
    p256dh:
      "BDt1p7PFrt-UKgOcZew1mH8P1tCUAKIsC1BipEMwKB5VpEUvaR9hOxyt2utGjt-qywr8449R2H_jkRytP2ICsTI",
    auth: "KkToCrDaqH0URCdrITGhBw"
  }
};

var payload = "Here is a payload!";

var options = {
  gcmAPIKey: "6iPbnBqFYBicZcmc8zXviIQQSTuplxJkhUWn8_Gi-u4",
  TTL: 60
};

webPush.sendNotification(pushSubscription, payload, options).then(res =>{
  console.log(res);
}).catch(err => {
  console.log(err);
})
