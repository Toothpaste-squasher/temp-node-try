const { log } = require('console');
const path = require('path');


log(path.sep)

const filePath = path.join("content", "subfolder", "text.txt")
log(filePath);

const base = path.basename(filePath);
log(base)


const abs = path.resolve(filePath)
log(abs)