const { Telegraf } = require('telegraf');
require('dotenv').config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply('Szia! Itt Noel AI. Mit szeretnél kérdezni?'));

bot.on('text', async (ctx) => {
  const userMessage = ctx.message.text;
  ctx.reply(`Ezt írtad: ${userMessage}`);
});

bot.launch();
console.log('Bot elindult...');
