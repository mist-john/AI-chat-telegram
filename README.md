# Bot-Telegram-BeMEAN

## Commands
- (Who|What|Where) (is|means) {SEARCH}? 
  - Searches Wikipedia and DuckDuckGo and sends the text
  - Example: What is JavaScript?
  - Example: What is React.js?
- Where (is|are) {SEARCH}?
  - Searches Maps and sends the location
  - Example: Where is Curitiba?
  - Example: Where is PUC Consolação São Paulo?
- Calculations
  + Simple calculations and using JS Math object functions
  - Example: 2 + 3 - 4 * 5 / 1
  - Example: 2 + Math.pow(2,3) + Math.sqrt(9) + Math.max(1,2,3,4,5,6)
- Date
  + Executes JS Date object functions
  + Example: Date.now()
  + Example: var dt = new Date; dt.getFullYear();

- GME {String}
  + Returns the URL of the question to be searched on Google
  + Example: gme how to make coffee?
  + Return: http://pt-br.lmgtfy.com/?q=how+to+make+coffee%3F
- {ARRAY}.map({CALLBACK})
  + Executes the map command
  + Example: [1,2,3,4].map( num => num*2 )
  + Example: [1,2,3,4].map( num => num*Math.sqrt(9) )
- {ARRAY}.filter({CALLBACK})
  + Executes the filter command
  + Example: [1,2,3,4].filter( num => num%2 )
  + Example: [1,2,3,4].filter( num => !(num%2) )
- {ARRAY}.reduce({CALLBACK})
  + Executes the reduce command
  + Example: [1,2,3,4].reduce( (before, current) => before+current )
  + Example: [1,2,3,4].reduce( (before, current) => before*current )
- regex {REGEX}.test({STRING})
  + Executes the test command
  + Example: regex /bazing/.test('bazinga')
  + Example: regex /[0-9]/.test('82882')

## Features
- Who is ...? // Searches Wikipedia
- Where is ...? // Searches Maps and sends the location
- What is ...? // Searches Google
- #twitter hashtag // searches the hashtag on Twitter
- #insta hashtag // searches the hashtag on Instagram
- [Code]... ? // Searches Stack Overflow
- [Github]... ? // Searches GitHub
