'use strict';

const _eval = 'filter';
const isOk = require('../regexutils').isInputOK;

const execute = (bot, msg, match) => {
	if (isOk(msg.text)) {
		bot.sendMessage(msg.chat.id, _eval + ': ' + eval(msg.text));
	} else {
		require('../monitutils').notifyAdmins(bot, 'Eval malicioso detectado: `' + msg.text + '`. Enviado por: ' + msg.from.id + ', ' + msg.from.first_name + ' ' + msg.from.last_name + ', @' + msg.from.username);
		bot.sendMessage(msg.chat.id, 'Aaaaaaah! Espertinho você, em! Esse comando não é permitido não, jovem. O @osuissa e o @rmunhoz foram avisados sobre isso e, se pá, nunca mais respondo uma mensagem sua.');
	}
};

module.exports = {
  execute: execute
};