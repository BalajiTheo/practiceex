const express = require('express');
const router = express.Router();
const Article = require('../models/article');
const ResultsFormat = require('../models/gresults');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/', (req, res, next) => {
  const articles = [new Article({url:'home.com',title:'somenew title',text:'Give me a Beer please'}), new Article()];
  console.log(this.articles);
  res.render('index', {
    title: 'Generator-Express MVC',
    articles: articles
  });
});

router.get('/getresults',(req, res, next) => {
  const resultsFormat  =  new ResultsFormat({heading: 'PornHub',linkto : 'http://www.pornhub.com', description: 'some best porn videos found here'});
  res.render('results',{resultsFormat});
});
