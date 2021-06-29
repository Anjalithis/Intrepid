const express = require('express');
const router = express.Router({mergeParams:true});

const {campgroundSchema , reviewSchema } = require('../schema.js');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');

const Campground = require('../models/campground');
const Review = require('../models/reviews');
const { validateReview, isLogged, isReviewAuthor } = require('../middleware');



router.post('/' , validateReview, isLogged,  catchAsync(async (req,res)=>{
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    campground.reviews.push(review);
    review.author = req.user._id;
    await review.save();
    await campground.save();
    req.flash('success','created new review!');
    res.redirect(`/campgrounds/${campground._id}`);
}));
router.delete('/:reviewID',isLogged,isReviewAuthor, catchAsync( async(req,res)=>{
    const {id , reviewID } = req.params;
    await Campground.findByIdAndUpdate(id ,{ $pull:{reviews:reviewID}});
    await Review.findByIdAndDelete(reviewID);
    req.flash('success' , 'successfully deleted review!')
     res.redirect(`/campgrounds/${id}`);
}));

module.exports = router;
