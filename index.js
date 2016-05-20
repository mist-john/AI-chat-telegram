'use strict';

const TelegramBot = require('node-telegram-bot-api');
require('dotenv').config();

const token = process.env.API_TOKEN || 'INSERT API_TOKEN';
// Setup polling way
const bot = new TelegramBot(token, { polling: true });

const commands = require('./modules/commands');
const services = require('./modules/services');

// Matches commands
bot.onText(/^\/([a-zA-Z]+) ?([^@]+)?/, (msg, match) => {
  let command = match[1];
  let args = match[2];
  if (command) {
    if (command in commands) {
      command = commands[command];
      if (match.length > command.numParams) {
        if (args) {
            args = args.split(' ');
        }
        command.execute(msg, match, bot);
      } else {
        bot.sendMessage(msg.chat.id, "Ops, número incorreto de parâmetros fornecidos (" + match.length + "). Número de parâmetros exigidos: " + command.numParams + " :/");
      }
    } else {
      bot.sendMessage(msg.chat.id, "Eita, esse comando não existe :/");
    }
  }
});

bot.onText(/(Quem|O que|O q|oq|Onde|Cadê|Cade) (é|eh|eah|e) ([^?]*)\??/i, (msg, match) => {
  services.wikipedia.execute(bot, msg, { 'wh': match[1], 'query': match[3] });
});

bot.onText(/kkkk|huehue|h+a+h+a+|h+e+h+e+|h+i+h+i+/i, (msg, match) => {
  let laughCounter = 0;
  bot.sendMessage(msg.chat.id, 'hehehehehe');
});

// /bot fale
// bot.onText(/(.*bot\s+)?(fale|diga)[.,: ]+(que\s+)?(.+)/i, (msg, match) => {
//   // a fazer
// });

// calcular
bot.onText(/(^|\s)\(?-?[.0-9()]+(\s*[-+\/*]\s*-?[.0-9()]+)+(\)|\b)/i, (msg, match) => {
  // const teste = msg.text.match(mathRE)
  bot.sendMessage(msg.chat.id, 'Vou calcular pra vc: ' + msg.text);
  bot.sendMessage(msg.chat.id, eval(msg.text));
  // if match? and not matchDate.test match[0]
  //   try
  //     result = eval match[0]
  //   catch err
  //     result = rand ['Argh!', 'Ugh!', 'Ouch...', 'Hum?', 'Que?', 'WTF?']
  //     admDebug "Math ERR: #{err.message}\nExp: #{match[0]}"
  //   textLine = textLine.replace mathRE, " #{result} "
  //   mathMsg = "<code>#{match[0].replace /\s/g,''}</code> = <code>#{result}</code>"
  //   sendHTML chatID, mathMsg, (err,data)->
  //     if err
  //       admDebug "Math Message ERR: #{err.message}\nData: #{JSON.stringify data}"
});
