import fs from 'fs'

var output = fs.readFileSynx('data.txt', 'utf8').split('\n')

console.log('output', output)