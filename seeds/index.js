const mongoose = require('mongoose');
const Campground = require('../models/campground');
const cities = require('./cities');
const { places,descriptors } = require('./seedHelpers');



mongoose.connect('mongodb://localhost:27017/yelp-camp',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console,"connection error:"));
db.once("open" , ()=>{
    console.log("database connected");
})

const sample= array=>  array[Math.floor(Math.random()*array.length)];

const seedDb = async ()=>{
    await Campground.deleteMany({});
    for(let i=0;i<50;i++){
        const random60 = Math.floor(Math.random()*60);
        const camp = new Campground({
            location : `${cities[random60].city},${cities[random60].state}`,
            title : `${sample(descriptors)} ${sample(places)}`
        })
        await camp.save();
    }
}
seedDb().then(()=>{
    mongoose.connection.close();
});