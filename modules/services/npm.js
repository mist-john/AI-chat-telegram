'use strict';

const url = require('url');
const http = require('http');
const parse = { 'parse_mode': 'HTML' };
const stickers = [
    'BQADBAADMgEAAl6A9AWiXNcdh4N2fgI',
    'BQADBAADzQADXoD0BfaPN-SRlpBYAg',
    'BQADBAADxQADXoD0Be6MWaqIBanrAg',
    'BQADBAADAQEAAl6A9AVrEFjvEfTbRwI',
    'BQADBAADOQEAAl6A9AWLW7oQoiHXdAI',
    'BQADBAADBwEAAl6A9AXuD8xAc5avLwI',
    'BQADBAADxwADXoD0BaTJK9_y3lrtAg',
    'BQADBAADyQADXoD0BYyFKrC9hFpcAg',
    'BQADBAADywADXoD0BaJ-5YWTuZxTAg',
    'BQADBAADzwADXoD0BactihrL_9LKAg',
    'BQADBAAD6wADXoD0Bbi4Fg2kp0fUAg'
]
const execute = (bot, msg, match) => {
  const query = match.query;
  const _base = 'https://www.npmjs.com/package/';
  const _url = url.parse(_base + encodeURIComponent(query))
  _url.headers = {
    'User-Agent': 'Telegram Bot',
    'Accept-Language': 'pt-BR;q=1, pt;q=0.8, en;q=0.5'
  }
  const req = http.request(_url, (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', (err) => {
      try {
        console.log("datanpm: " + data);
        data = JSON.parse(data);
        // bot.sendMessage(msg.chat.id, data, parse);
        bot.sendMessage(msg.chat.id, 'Data: "'+JSON.stringify(data)+'"');
      } catch (e) {
        bot.sendMessage(msg.chat.id, "DEU MERDA: "+e, pm);
        console.log("Erro end: " + err)
      }
    });
  });
  req.end();
  req.on('error', (e) => console.error(e));
}
module.exports = {
    execute: execute
}