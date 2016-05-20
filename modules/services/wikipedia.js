'use strict';

var execute = (bot, msg, arg) => {

    const options = { query: arg, format: 'html', summaryOnly: true, lang: 'pt' };
    try {
        const cheerio = require('cheerio');
        const request = require('request');
        console.log('iniciando');
        request('https://pt.wikipedia.org/wiki/Hakim_Bey', function (error, response, html) {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                const teste = $('#bodyContent #mw-content-text p:first').text();
                console.log('teste', teste);
                bot.sendMessage(msg.chat.id, teste);
            }
        });
    } catch (e) {
        bot.sendMessage(msg.chat.id, "Putz, não tô conseguindo conversar com a Wikipedia :/ Tenta depois :1:");
    }
}

module.exports = {
    execute: execute
}