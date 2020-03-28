const express = require('express');

const app = express();
const path = require('path');
const port = process.env.PORT || 3000;

console.log(process.env.DATABASE_URL);
/*
const knex = require('knex')({
    client: 'mysql',
    connection: {
        client: 'pg',
        connection: process.env.DATABASE_URLs
    }
  });
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


app.put('/advertisement',createAdvertisement);
app.post('/advertisement/{id}',updateAdvertisement);
app.get('/advertisement/{id}',getAdvertisement);
app.delete('/advertisement/{id}',deleteAdvertisement);

app.put('/media',createMedia);
app.post('/media/{id}',updateMedia);
app.get('/media/{id}',getMedia);
app.delete('/media/{id}',deleteMedia);

app.put('/team',createTeam);
app.post('/team/{id}',updateTeam);
app.get('/team/{id}',getTeam);
app.delete('/team/{id}',deleteTeam);

app.put('/merchandise',createMerchandise);
app.post('/merchandise/{id}',updateMerchandise);
app.get('/merchandise/{id}',getMerchandise);
app.delete('/merchandise/{id}',deleteMerchandise);

app.put('/staff',createStaff);
app.post('/staff/{id}',updateStaff);
app.get('/staff/{id}',getStaff);
app.delete('/staff/{id}',deleteStaff);

app.put('/franchise',createFranchise);
app.post('/franchise/{id}',updateFranchise);
app.get('/franchise/{id}',getFranchise);
app.delete('/franchise/{id}',deleteFranchise);

app.put('/event',createEvent);
app.post('/event/{id}',updateEvent);
app.get('/event/{id}',getEvent);
app.delete('/event/{id}',deleteEvent);


function createFranchise(req,res) {

    
}*/