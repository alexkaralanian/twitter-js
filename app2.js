const express = require('express')
const app = express()
const nunjucks = require('nunjucks')

app.listen(3000, function(){
    console.log('server listening')
});

app.use('/', function(req, res, next){
    console.log(req.method + " " + req.path)
    next();
})

app.get('/', function(req, res){
    // const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
    res.render( 'index', values);
})

let values = {
    title: "An Example",
    people: [
        { name: "Gandolf" },
        { name: "Frodo" },
        { name: "Hermione" },
    ],
}

nunjucks.configure('views')

nunjucks.render('index.html', values, function(err, res){
    console.log(res)
})

app.engine('html', nunjucks.render)
app.set('view engine', 'html')
nunjucks.configure('views', { noCache: true })
