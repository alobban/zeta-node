/**
 * Created by andrewlobban on 8/27/16.
 */
var express = require('express');

var routes = function(Executive) {

    var executiveRouter = express.Router();

    executiveRouter.route('/')
        .post(function(req, res) {
            var exec = new Executive(req.body);

            exec.save();

            res.status(201);
            res.send(exec);
        })
        .get(function(req, res) {
            // var responseJson = { hello: 'this is my api!' };
            Executive.find(function(err, executives) {
                if(err)
                    console.log(err);
                else
                    res.json(executives);
            });
            // res.json(responseJson);
        });

    executiveRouter.route('/:executiveId')
        .get(function(req, res) {
            // var responseJson = { hello: 'this is my api!' };
            Executive.findById(req.params.executiveId, function(err, executive) {
                if(err)
                    console.log(err);
                else
                    res.json(executive);
            });
            // res.json(responseJson);
        });

    return executiveRouter;
};

module.exports = routes;