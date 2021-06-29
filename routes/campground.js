const express = require('express');
const router = express.Router();

const catchAsync = require('../utils/catchAsync');
const campgrounds = require('../controllers/campgrounds');

const Campground = require('../models/campground');
const { isLogged, isAuthor, validateCampground } = require('../middleware');

router.route('/')
    .get(catchAsync(campgrounds.index))
    .post(isLogged , validateCampground, catchAsync(campgrounds.createNewForm))

router.get('/new',isLogged, campgrounds.renderNewForm );

router.route('/:id')
    .get(catchAsync(campgrounds.showCampground))
    .put(isLogged, validateCampground, isAuthor, catchAsync(campgrounds.createEditForm))
    .delete(isLogged, isAuthor, catchAsync(campgrounds.deleteCampground));

router.get('/:id/edit' ,isLogged, isAuthor, catchAsync(campgrounds.renderEditForm));





module.exports = router;