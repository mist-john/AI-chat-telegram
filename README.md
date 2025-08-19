Bot-Telegram-BeMEAN

Telegram bot created by Be MEAN.

User: @bemean_oficialbot

The idea is to help you find information more easily, especially about technology.
It can also execute JavaScript code!

Commands

(Who|What|Where|Cadê|Cade) (is|means) {SEARCH}?

Searches Wikipedia and DuckDuckGo and returns text.

Example: What is JavaScript?

Example: What is React.js?

Where (is|located|does {SEARCH} stay)?

Searches on Google Maps and returns the location.

Example: Where is Curitiba?

Example: Where is PUC Consolação São Paulo?

Calculations

Performs simple calculations or uses JavaScript Math functions.

Example: 2 + 3 - 4 * 5 / 1

Example: 2 + Math.pow(2,3) + Math.sqrt(9) + Math.max(1,2,3,4,5,6)

Date

Executes functions from JavaScript’s Date object.

Example: Date.now()

Example: var dt = new Date; dt.getFullYear();

GME {String}

Returns a Google search URL.

Example: gme how to make coffee?

Output: http://pt-br.lmgtfy.com/?q=how+to+make+coffee%3F

{ARRAY}.map({CALLBACK})

Executes the JavaScript map method.

Example: [1,2,3,4].map(num => num*2)

Example: [1,2,3,4].map(num => num*Math.sqrt(9))

{ARRAY}.filter({CALLBACK})

Executes the JavaScript filter method.

Example: [1,2,3,4].filter(num => num%2)

Example: [1,2,3,4].filter(num => !(num%2))

{ARRAY}.reduce({CALLBACK})

Executes the JavaScript reduce method.

Example: [1,2,3,4].reduce((prev, curr) => prev+curr)

Example: [1,2,3,4].reduce((prev, curr) => prev*curr)

regex {REGEX}.test({STRING})

Executes a regex test.

Example: regex /bazing/.test('bazinga')

Example: regex /[0-9]/.test('82882')
