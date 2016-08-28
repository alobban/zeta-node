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
                    res.status(500).send(err);
                else
                    res.json(executives);
            });
            // res.json(responseJson);
        });

    executiveRouter.use('/:executiveId', function(req, res, next) {
        Executive.findById(req.params.executiveId, function(err, executive) {
            if(err) {
                res.status(500).send(err);
            }
            else if (executive) {
                req.executive = executive;
                next();
            }
            else {
                res.status(404).send('no executive member found!');
            }
        });
    });
    executiveRouter.route('/:executiveId')
        .get(function(req, res) {

            res.json(req.executive);

        })
        .put(function(req, res) {
            req.executive.board_member.member.first_name = req.body.board_member.member.first_name;
            req.executive.board_member.member.last_name = req.body.board_member.member.last_name;
            req.executive.board_member.member.nickname = req.body.board_member.member.nickname;
            req.executive.board_member.member.number = req.body.board_member.member.number;
            req.executive.board_member.member.major = req.body.board_member.member.major;
            req.executive.board_member.member.bio = req.body.board_member.member.bio;
            req.executive.board_member.position = req.body.board_member.position;
            req.executive.board_member.term.semester = req.body.board_member.term.semester;
            req.executive.board_member.term.year = req.body.board_member.term.year;

            req.executive.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                }
                else {
                    res.json(req.executive);
                }
            });
        })
        .patch(function(req, res) {
            if(req.body._id)
                delete req.body._id;

            if(req.body.board_member.position) {
                req.executive.board_member.position = req.body.board_member.position;
            }

            if(req.body.board_member.term) {
                for (var p in req.body.board_member.term){
                    req.executive.board_member.term[p] = req.body.board_member.term[p];
                }
            }

            if(req.body.board_member.member) {
                for (var p in req.body.board_member.member){
                    req.executive.board_member.member[p] = req.body.board_member.member[p];
                }
            }

            req.executive.save(function(err) {
                if(err) {
                    res.status(500).send(err);
                }
                else {
                    res.json(req.executive);
                }
            });
        });

    return executiveRouter;
};

module.exports = routes;