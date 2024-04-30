const express = require('express');
const app = express();

const cors = require('cors');

const bodyParser = require('body-parser');

const methodoverride = require('method-override');
const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;
var users;

const MongoConfig = "mongodb+srv://rohit2000:admin@cluster0.aqnmp.mongodb.net/Test?retryWrites=true&w=majority";
MongoClient.connect(MongoConfig, function(err, succ){
    if(err) throw err;
    console.log('Database Created');
    users = succ.db('Test').collection('User');
});
app.use(cors());
app.use(bodyParser.json());

app.post('/insert', (req, res) => {
    // console.log(req.body.formdata);
    users.insertOne(req.body.formdata).then((succ) => {
        res.send('ok');
    });
})

app.post('/fetch', (req, res) =>{
    // var data = [
    //     {Name: 'Naveen', Email :'naveen@gmail;.com', Password: '1234567'},
    //     {Name: 'Raju', Email :'raju@gmail;.com', Password: '1234567'},
    //     {Name: 'Ravi', Email :'ravi@gmail;.com', Password: '1234567'}
    // ]
    users.find().toArray().then((succ) => {
        console.log(succ[0].Name);
        console.log(succ[0].Email);
        res.send(succ);
    })

})
app.post('/delete', (req, res) => {
    var id = req.body.Doc_id;
    var idd = new mongodb.ObjectId(id);
    users.deleteOne({
        _id: idd,
    }).then((succ) => {
        console.log('yes');
        console.log(id);
        res.send(true);
    }).catch((err) => {
        console.log('error');
    })

})
app.post('/edit', (req,res) => {
    var id = req.body.formdata._id;
    var name = req.body.formdata.Name;
    var email = req.body.formdata.Email;
    var password = req.body.formdata.Password;

    var idd = new mongodb.ObjectId(id);
    users.updateOne(
        {
            //where
            _id:idd,
        },{
            $set: {
                //data
                Name: name,
                Email: email,
                Password: password
            }
        }
    ).then((succ) => {
        res.send('ok');
    })
})

app.listen(2000, (req,res) => {
    console.log('Server Started');
})