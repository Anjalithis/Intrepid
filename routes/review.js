const express = require('express');
const router = express.Router({mergeParams:true});

const {campgroundSchema , reviewSchema } = require('../schema.js');
const catchAsync = require('../utils/catchAsync');
const ExpressError = require('../utils/ExpressError');
const reviews = require('../controllers/reviews');

const Campground = require('../models/campground');
const Review = require('../models/reviews');
const { validateReview, isLogged, isReviewAuthor } = require('../middleware');




router.post('/' , validateReview, isLogged,  catchAsync(reviews.createReview));
router.delete('/:reviewID',isLogged,isReviewAuthor, catchAsync( reviews.deleteReview));

module.exports = router;
