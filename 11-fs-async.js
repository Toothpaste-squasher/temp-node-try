const { log } = require('console');
const { readFile, writeFile } = require('fs')


readFile('./content/first.txt', 'utf8', (error, result) => {
  if (error) {
    log(error)
    return
  }
  log(result)

  const first = result;

  readFile('./content/second.txt', 'utf8', (error, result) => {
    if (error) {
      log(error)
      return
    }
    log(result)
    const second = result
    writeFile("./content/result-sync.txt", `here is the result: ${first}, ${second}`, (error, result) => {
      if (error) {
        log(error);
        return
      }
      log(result);
    })
  })
})

