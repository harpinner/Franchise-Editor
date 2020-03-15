const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static('www'));
app.use(express.urlencoded({ extended: true }));


class dummyUser 
{
  
    constructor(username, password)
    {
        this.password = password;
        this.username = username;
    }
}

var dummyUsers = Array();

var user1 = new dummyUser('Prime',"it's_prime_time");
var user2 = new dummyUser("TMNT", "Turtle_Power");
var user3 = new dummyUser("Thing","its_clobberin'_time");
var user4 = new dummyUser("Darkwing","let's_get_dangerous");


dummyUsers.push(user1,user2,user3,user4);





app.post('/login', function (req,res) {
    var theUser = "Invalid Login";
    console.log(JSON.stringify(req.body));
    for (let index = 0; index < dummyUsers.length; index++) {
        const element = dummyUsers[index];
        console.log(JSON.stringify(element));
        if (element.username == req.body.username ) {
            console.log(element.password == req.body.password);
            theUser = element.username;
        }      
    }

        res.render('dummypage',{'username':theUser});



});


app.listen(port, () => console.log(`Example app listening on port ${port}!`));