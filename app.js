const fs = require('fs');
const JSONStream = require('JSONStream')


const rs = fs.createReadStream('../../Downloads/Ano-2016.json', {encoding: 'utf-8', start: 0, end: 60000  });

rs.pipe(JSONStream.parse('DESPESA.*')).on('data', data => {
  console.log(data);
});
