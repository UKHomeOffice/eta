/* eslint-disable no-process-env */
'use strict';

const hof = require('hof');
const settings = require('./hof.settings');

settings.routes = settings.routes.map(route => require(route));
settings.root = __dirname;
settings.csp = {
  fontSrc: [
    'https://fonts.googleapis.com/'
  ],
  scriptSrc: [
    'https://tagmanager.google.com/',
    'https://www.googletagmanager.com/'
  ],
  imgSrc: [
    'www.google-analytics.com',
    'ssl.gstatic.com',
    'www.google.co.uk/ads/ga-audiences'
  ],
  connectSrc: [
    'https://www.google-analytics.com',
    'https://region1.google-analytics.com',
    'https://region1.analytics.google.com'
  ]
};
settings.environmentType = process.env.ENVIRONMENT;

if (process.env.REDIS_URL) {
  settings.redis = process.env.REDIS_URL;
}

const app = hof(settings);
app.use((req, res, next) => {
  res.locals.htmlLang = 'en';
  next();
});

module.exports = app;
