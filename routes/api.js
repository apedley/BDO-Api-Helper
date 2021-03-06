const express = require('express');
const apiController = require('./controllers/apiController');
const middleware = require('../utils/middleware');

const router = express.Router();

router.get(
  '/prices/:category/',
  middleware.cache(300),
  apiController.prices_get
);

router.get('/item-search/:id', apiController.single_item_search_get);

router.get('/search', apiController.search_get);

router.get('/caphras-calc', apiController.caphras_calc_get);

router.post('/item-upgrade', apiController.item_upgrade_post);

router.get('/kutum-or-nouver', apiController.kutum_or_nouver_get);

module.exports = router;
