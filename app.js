const express = require('express')
const app = express()
const nunjucks = require('nunjucks')
const routes = require('./routes')

app.listen(3000, function(){
    console.log('server listening')
});

app.use('/', routes)

app.use('/', function(req, res, next){
    console.log(req.method + " " + req.path)
    next();
})

app.engine('html', nunjucks.render)
app.set('view engine', 'html')

nunjucks.configure('views', { noCache: true })

nunjucks.render('index.html', function(err, res){
})





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







