 const express= require('express');
 const app = express();
 const PORT= 3000;
 const morgan= require('morgan');
const { dirname } = require('path');
 const path= require('path');

 app.set ('view engine' ,'ejs');

 app.use(express.static(path.join(--dirname, 'public')));
 app.use(morgan('dev'));

//Routes
app.get('/', (req,res) => {
    res.render('pages/about');
});
app.get('/alerts', (req,res) => {
    res.render('pages/alerts');
});
app.get('/aboutus', (req,res) => {
    res.render('pages/aboutus');
});
app.get('/getstarted', (req,res) => {
    res.render('pages/getstarted');
});
app.get('/login', (req,res) => {
    res.render('pages/login');
});
app.get('/results', (req,res) => {
    res.render('pages/results');
});
app.get('/uploadreceipt', (req,res) => {
    res.render('pages/uploadreceipt');
});
app.get('/yourfridge', (req,res) => {
    res.render('pages/yourfridge');
});


//Server
 app.listen(PORT, () => {
     console.log(`Server is listening on ${PORT}.`);
 });