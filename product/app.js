const express = require('express');
var bodyparser= require('body-parser');
const mongoose = require('mongoose');
const mongodb=require('mongodb');
var alert = require('alert');
const product=require('D:/main web project/my side web project/product/model/productschema');
const producttypes= require('D:/main web project/my side web project/product/model/accounttypeschema');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyparser.json());
var urlencodedParser = bodyparser.urlencoded({ extended: false })
const DbURl = 'mongodb+srv://muhayuddin:test1234@cluster0.9qqep.mongodb.net/lab11?retryWrites=true&w=majority';
var froute=require('./routes/index');
const { render } = require('express/lib/response');
const { remove } = require('D:/main web project/my side web project/product/model/productschema');
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
        alert(
             'saved data...'
        );
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
            alert(
                 'saved data...'
            );
        }
        )
        .catch((err)=>{
            console.log(err);
        })
      
         });
     app.get('/cards', function(req, res) {
        product.find({}).exec(function(err, product) {
            if (err) throw err;
            res.render("D:/main web project/my side web project/product/view/cards.ejs", { data: product});
        });
    });
    app.get('/remove',function(req, res){
        userData= product.findByIdAndDelete(req.query.id);
        userData.exec(function(err, data){
          if (err) throw err;
           res.send('done');
        })
    });
    app.get('/project', function(req, res) {
        producttypes.find({}).exec(function(err, producttypes) {
            if (err) throw err;
            res.render("D:/main web project/my side web project/product/view/allaccounts.ejs", { data: producttypes});
        });
    });
    app.get('/update',function(req,res)
    {
      res.render("D:/main web project/my side web project/product/view/update.ejs", {data: req.query})
    })
   app.use('/',froute);

