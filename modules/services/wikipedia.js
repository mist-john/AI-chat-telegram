'use strict';

var execute = (bot, msg, args) => {
    const query = args.query;
    const wh = args.wh;
    const options = { query: query, format: 'html', summaryOnly: true, lang: 'pt' };
    console.log(args);
    try {
        const request = require('request');
        const cheerioAdv = require('cheerio-advanced-selectors');
        const cheerio = cheerioAdv.wrap(require('cheerio'));
        request('https://pt.wikipedia.org/w/index.php?title=' + query.replace(" ", "_"), function (error, response, html) {
            if (!error && response.statusCode == 200) {
                const $ = cheerio.load(html);
                if (!wh.match(/onde|ond|cadê|cade/i)) {
                    if ($('#bodyContent #mw-content-text p:first').not('.coordinates').text() != "") {
                        var answer = $('#bodyContent #mw-content-text p:first').not('.coordinates').text();
                    } else {
                        var answer = "Vish, não achei as coordenadas, mas aí vai a definição: " + $('#bodyContent #mw-content-text p').not('.coordinates').first().text().substr(0, 1000);
                    }
                } else {
                    var answer = $('#bodyContent #mw-content-text p.coordinates').text();
                }
                if (answer == "") {
                    answer = $('#bodyContent #mw-content-text p').not('.coordinates').first().text().substr(0, 1000);
                }
                bot.sendMessage(msg.chat.id, answer);
            } else if (error) {
                const mili = new Date().getTime();
                bot.sendMessage(msg.chat.id, "Droga, deu um erro aqui em :/ ID do erro: `" + mili + "`", { 'parse_mode': 'Markdown' });
                console.log("Erro " + mili + ": " + error);
            } else {
                if (response.statusCode == 404) {
                    bot.sendMessage(msg.chat.id, "Vish, a Wikipedia não tem nada sobre " + query);
                }
            }
        });
    } catch (e) {
        bot.sendMessage(msg.chat.id, "Putz, não tô conseguindo conversar com a Wikipedia :/ Tenta depois `" + e + "`", { 'parse_mode': 'Markdown' });
    }
}

module.exports = {
    execute: execute
}