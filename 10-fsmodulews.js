const { readFileSync, writeFileSync } = require('fs')

const test = readFileSync('./content/doc.txt','utf8')
const doc = readFileSync('./content/data/test.txt','utf8')

writeFileSync(
    './content/result.txt', 
    `here result : ${test}, ${doc}`,
    { flag : 'a' }
)