// Object modelling for user. This model will represent in the database and
// we will read the all the information according to this model.
// You can think that this is a representation of the database and we are using that
// for saving, reading, updating information from the database.

var mongoose    = require('mongoose');
var bcrypt      = require('bcryptjs');

var applicationSchema  = mongoose.Schema({
    fullname: {
        type    : String,
    },
    corporationName: {
        type    : String,
    },
    corporationNumber: {
        type    : String,
    },
    teamEmail: {
        type    : String
    },
    teamName: {
        type    : String
    },
    teamPhone: {
        type    : String
    },
    gender: {
        type    : String
    },
    experience: {
        type    : String
    },
    skills: {
        type    : String
    },
    services: {
        type    : String
    },
    targetCustomers: {
        type    : String
    },
    problemSolved: {
        type    : String
    },
    userBenefits: {
        type    : String
    },
    organizationBenefits: {
        type    : String
    },
    keyDifferentiators : {
        type    : String
    },
});

var Application = module.exports = mongoose.model('Application', applicationSchema);

module.exports.getApplicationById = function(id, callback){
    Application.findById(id, callback);
}

module.exports.getAllApplications = function(callback){
    Application.find(callback)
}