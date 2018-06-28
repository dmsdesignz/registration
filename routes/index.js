var express = require('express');
var router = express.Router();
var sqlite = require('sqlite3');
var models = require('../models');
var data = require('../data');
var request = require('request');

var data = require('../data');
getJSON = () => {
  request('http://www.google.com', function (error, response, body) {
    classArray = [];
    for (i = 0; i < body.length; i++) {
      body[i] += classArray;
      return classArray;
    }
    console.log(classArray);
    
  });
};
getJSON();

/* GET home page. */
router.get('/', function (req, res, next) {
  models.attendees.findAll().then(attendeeFound => {
    res.render('index', {
      attendees: attendeeFound
    });
  });
});

router.get('/attendees', function (req, res, next) {
  models.attendees.findAll().then(attendeeFound => {
    res.render('attendees', {
      attendees: attendeeFound
    });
  });
});

router.post('/', (req, res) => {
  models.attendees
    .findOrCreate({
      where: {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        jobTitle: req.body.jobTitle,
        companyFunction: req.body.companyFunction,
        company: req.body.company,
        address: req.body.address,
        address2: req.body.address2,
        city: req.body.city,
        zip: req.body.zip,
        phone: req.body.phone,
        fax: req.body.fax,
        email: req.body.email,
        website: req.body.website,
        attendeeId: res.attendeeId
      }
    })
    .spread(function (result, created) {
      if (created) {
        res.redirect('/');
        console.log(result);

      } else {
        res.send();
      }
    });
});


router.get('/attendees/:id', (req, res) => {
    let attendeeId = parseInt(req.params.id);
    models.attendees
      .find({
        where: {
          attendeeId: attendeeId
        },
        
        include: [models.classes]
      })
      .then(attendee => {
        res.render('attendee', {
          attendee: attendee
        });
      });
  });

module.exports = router;
