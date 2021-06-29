const Campground = require('../models/campground');
const Review = require('../models/reviews');

module.exports.createReview = async (req,res)=>{
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    review.author = req.user._id;
    await review.save();
    await campground.save();
    req.flash('success','created new review!');
    res.redirect(`/campgrounds/${campground._id}`);
}
module.exports.deleteReview = async(req,res)=>{
    const {id , reviewID } = req.params;
    await Campground.findByIdAndUpdate(id ,{ $pull:{reviews:reviewID}});
    await Review.findByIdAndDelete(reviewID);
    req.flash('success' , 'successfully deleted review!')
     res.redirect(`/campgrounds/${id}`);
}