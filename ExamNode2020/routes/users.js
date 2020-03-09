var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/userList', (req, res, next) =>{
  var db = req.db;
  var colllection = db.get('listeUsers');
  colllection.find({}, {} , (e, docs) => {
    //res.json(docs);
    res.render('./clients/index.twig', {
      allClients: docs,
    });
  });
});

router.get('/userListJson', function(req, res, next) {
  var db = req.db;
  var colllection = db.get('listeUsers');
  colllection.find({}, {} , (e, docs) => {
    res.json(docs);
  });
});

router.get('/add', (req,res,next) => {
  res.render('clients/new.twig');
});

router.post('/addUser', (req, res) => {
  var db = req.db; 
  var colllection = db.get('listeUsers');
  colllection.insert(req.body, (err, result) =>{
    console.log(req.body);
    res.redirect('/users/userList')
  });
  console.log(req.body)
});

router.get('/delete/:user_id', (req, res)=> {
  var db = req.db;
  var colllection = db.get('listeUsers');
  colllection.remove( {_id: req.params.user_id} , (err,result) => {
    if (err) return console.error(err);
    res.redirect('/users/userList')
  } );
});


router.get('/edit/:id', (req, res, next) => {
  var db = req.db;
  var colllection = db.get('listeUsers');
  colllection.find({_id: req.params.user_id} , (err,result) => {
    res.render('clients/edit.twig', {result});
  })
})

router.post('/update', (req, res) => {
  var db = req.db;
  var colllection = db.get('listeUsers');
  colllection.findOneAndUpdate({_id: req.body.id}, req.body, (err,result) => {
    res.redirect('clients/userList');
  });
});


module.exports = router;
