const { readFile , writeFile} = require('fs')
    
console.log('start');
readFile('./content/doc.txt','utf8' , (err, result) => {
    if(err)
    {
        console.log(err)
        return
    }
    const doc = result
    readFile('./content/data/test.txt', 'utf8' , (err, result) => {
        if(err){
            console.log(err)
            return
        }
        const test = result
        writeFile(
           './content/aresult.txt',
           `here result : ${test}, ${doc}`,
           (err, result) => {
            if(err) {
            console.log(err)
            return
            }
            console.log('end task');
            }
        )
    })
}) 
console.log('strting next task')