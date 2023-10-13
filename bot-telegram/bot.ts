import { Telegraf } from "telegraf";
function botTelegram(message) {
  const botTelegram = new Telegraf(
    "6580962801:AAEhqUKPhCXUclt4s9mYElFclxAUtbFiDy4"
  );
  botTelegram.telegram.sendMessage("@toolbhx", message);
}
module.exports = botTelegram;
