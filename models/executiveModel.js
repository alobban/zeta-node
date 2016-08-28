/**
 * Created by andrewlobban on 7/19/16.
 */

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var executiveModel = new Schema({
    executives: {
        term: {
            semester: { type: String },
            year: { type: String }
        },
        post: { type: String },
        member: {
            first_name: { type: String },
            last_name: {type: String },
            nickname: { type: String },
            number: { type: String },
            line_name: { type: String },
            major: { type: String },
            minor: { type: String },
            bio: { type: String }
        }
    }
});

module.exports = mongoose.model('Executive', executiveModel);