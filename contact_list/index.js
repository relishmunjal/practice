const express=require ('express');
const port=1590;
const path=require('path');

const app=express();
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contact_list=[{name:'relish',

                   phone:"9812854888"},
                   {name:'gagan',
                   phone:"720680200"},
                   {name:'simmi',
                phone:"8556931780"}

]
app.get('/',function(req,res)
{
    return res.render('home',{title:'my list',
 contact:contact_list})

});
app.post('/create_contact',function(req,res)
{
    contact_list.push({name: req.body.name,
        phone:req.body.phone});
           
            return res.redirect('/');

});
app.get('/delete-contact/',function(req,res)
{
    console.log(req.query);
    let phone=req.query.phone;
    let contact_index=contact_list.findIndex(contact => contact.phone==phone);
    if(contact_index!=-1)
    {
        contact_list.splice(contact_index,1);
    }
    return res.redirect('back');


});
app.listen(port,function(err)
{
    if(err)
    {
        console.log('error occured');
    }
    console.log('succesfully connected');
    

});



