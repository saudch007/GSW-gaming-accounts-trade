const express = require('express');
var bodyparser= require('body-parser');
const mongoose = require('mongoose');
const mongodb=require('mongodb');
var alert = require('alert');
const product=require('./model/productschema');
const producttypes= require('./model/accounttypeschema');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.json());
var urlencodedParser = bodyparser.urlencoded({ extended: false })
const DbURl = 'mongodb+srv://muhayuddin:test1234@cluster0.9qqep.mongodb.net/lab11?retryWrites=true&w=majority';
var froute=require('./routes/index');
const { render } = require('express/lib/response');
const { remove } = require('./model/productschema');
app.use('/assets',express.static('assets'));
mongoose.connect(DbURl)
.then((result)=> app.listen(8080,() => {
    console.log('server started....')}))
.catch((err)=> console.log(err));
app.post('/addaccount',urlencodedParser,function(req,res){
    const product_data = new product({
        title:req.body.title,
        description:req.body.description,
        urlimage:req.body.urlimage
    });
    product_data.save()
    .then((result)=>{
        res.redirect("/gameaccount?title="+req.body.title);
    }
    )
    .catch((err)=>{
        console.log(err);
    })
  
     });
    //add account type
    app.post('/addaccounttype',urlencodedParser,function(req,res){
        const product_type = new producttypes({
            accounttype:req.body.type,
            title:req.body.title,
            description:req.body.description,
            urlimage:req.body.urlimage
        });
        product_type.save()
        .then((result)=>{
            res.redirect("/project?title="+req.body.title);
        }
        )
        .catch((err)=>{
            console.log(err);
        })
      
         });
     app.get('/gameaccount', function(req, res) {
        product.find({title:req.query.title}).exec(function(err, product) {
            if (err) throw err;
           if(product!='')
            res.render("../view/gameaccount.ejs", { data: product});
           else
          { res.render("../view/notfoundadminside.ejs");
          }
        });
    });
    //remove gameaccount
    app.get('/remove',function(req, res){
        userData= product.findByIdAndDelete(req.query.id);
        userData.exec(function(err, data){
          if (err) throw err;
          res.redirect("/gameaccount?title="+req.query.title)
        })
    });
    //admin side
    app.get('/admin', function(req, res) {
     
            res.render("../view/adminlogin.ejs");
    });
    app.post('/adminside',urlencodedParser,function(req,res){
        if(req.body.id=="admin"&&req.body.pass=="admin")
        res.redirect('/project');
        else
        res.redirect('/admin');
         });
    //user  side
    app.get('/gmplayer', function(req, res) {
        producttypes.find({}).exec(function(err, producttypes) {
            if (err) throw err;
            res.render("../view/usersidegameaccounttype.ejs", { data: producttypes});
        });
    });
    app.get('/gameacc', function(req, res) {
        product.find({title:req.query.title}).exec(function(err, product) {
            if (err) throw err;
            if(product!='')
            res.render("../view/usersidegameaccount.ejs", { data: product});
           else
           res.render("../view/notfound.ejs");
        });
    });
    //remove account type account
    app.get('/removeaccounttype',function(req, res){
        userData= producttypes.findByIdAndDelete(req.query.id);
        userData.exec(function(err, data){
          if (err) throw err;
          res.redirect("/project")
        })
    });
    app.get('/project', function(req, res) {
        producttypes.find({}).exec(function(err, producttypes) {
            if (err) throw err;
            res.render("../view/accounttypes.ejs", { data: producttypes});
        });
    });
    //update game account
    app.get('/update',function(req,res)
    {
      res.render("../view/update.ejs", {data: req.query})
    })
    //update game account type
    app.get('/updateaccounttype',function(req,res)
    {
      res.render("../view/UpdateAccounttype.ejs", {data: req.query})
    })
    //update account type data
    app.post('/updateacctype',urlencodedParser,function(req,res){
        producttypes.findByIdAndUpdate(req.query.id,{ accounttype:req.body.acctype, title:req.body.title,
         description:req.body.description,urlimage:req.body.urlimage },
         function (err, docs) {
      if (err){
     console.log(err)
     }
     else{
        res.redirect("/project")
     }});
      });
//updateindatabase
app.post('/updatedata',urlencodedParser,function(req,res){
   product.findByIdAndUpdate(req.query.id,{ title:req.body.title,
    description:req.body.description,urlimage:req.body.urlimage },
    function (err, docs) {
 if (err){
console.log(err)
}
else{
   res.redirect("/gameaccount")
}});
 });
   app.use('/',froute);

