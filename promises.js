const fs = require ('fs');

// fs.readFile('test.json', (err, data) => {
//   if(err) {return console.log(err);}
//   console.log(JSON.parse(data));
// });

function getData(filename)  {
  return new Promise((res,rej) => {
    fs.readFile(filename, (err, data) => {
      if (err) {return rej(err)}
      res(data);
    })
  });
}


const obj = {l: "leigh"};
// fs.appendFile('test.json',obj, function(err)  {
//   if (err) {
//   console.log(error);
//   }
// })

function getNewData(filename,data)  {
  return new Promise((resolve,reject) => {
    fs.appendFile(filename, JSON.stringify(data), (err, data) => {
      if (err) {return reject(err)}
      resolve(data);
    })
  });
}

// getData('test.json')
// .then(data => console.log(data))
// .catch(err => console.log(err));

getNewData('test.json', obj)
    .then(data => console.log(data))
    .catch(error => console.log(error));
