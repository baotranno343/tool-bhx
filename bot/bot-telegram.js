const { Telegraf } = require("telegraf");

function botTelegram(message) {
  const bot = new Telegraf("6580962801:AAEhqUKPhCXUclt4s9mYElFclxAUtbFiDy4");
  bot.telegram.sendMessage("@toolbhx", message);
}
module.exports = botTelegram;
