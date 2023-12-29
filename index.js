const TelegramBot = require("node-telegram-bot-api");
const token = "6349234669:AAF9btJeJ0CoAHoaoJB-2upwnp0YOFPRPMw";

const bot = new TelegramBot(token, { polling: true });

bot.on("message", msg => {
    let reply = `Message :  ${msg.text}  \nChat Id :  ${msg.chat.id} \nMessage Id : ${msg.message_id}`;
    bot.sendMessage(msg.chat.id, reply);
});
