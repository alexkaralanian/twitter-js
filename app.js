const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const routes = require('./routes')
const sockets = require('socket.io')

const server = app.listen(3000, function(){
    console.log('server listening')
});

const io = sockets.listen(server)

app.use('/', function(req, res, next){
    console.log(req.method + " " + req.path)
    next();
})

app.use('/', routes(io))


app.engine('html', nunjucks.render)
app.set('view engine', 'html')

nunjucks.configure('views', { noCache: true })

nunjucks.render('index.html', function(err, res){
})



// app.use(function (req, res) {
//   res.setHeader('Content-Type', 'text/plain')
//   res.write('you posted:\n')
//   res.end(JSON.stringify(req.body, null, 2))
// })



// app.get('/', function(req, res){
//     // const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
//     res.render( 'index', values);
// })

// let values = {
//     title: "An Example",
//     people: [
//         { name: "Gandolf" },
//         { name: "Frodo" },
//         { name: "Hermione" },
//     ],
// }







