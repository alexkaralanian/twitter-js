const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser')
const sockets2 = require('socket.io')

// could use one line instead: const router = require('express').Router();
const tweetBank = require('../tweetBank');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showName: false } );
});


router.use(express.static('public'))

router.get('/users/:name', function(req, res) {
  var name = req.params.name;
  var tweets = tweetBank.find( {name: name} );
  res.render( 'index', { tweets: tweets, showName: true } );
});

router.post('/tweets', function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  sockets2.sockets.emit('newTweet', name+" "+text);
  res.redirect('/');
});

// module.exports = router;

module.exports = function(io){

    return router;
}
