import express from "express";

// Initial exprss server
const app = express();
app.set('port', (process.env.PORT || 3008))

console.log('=======================================================');
// console.log(constants);
console.log('=======================================================');

// Router
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(app.get('port'), function(){
  console.log(`Listening on port ${app.get('port')}`)
})

