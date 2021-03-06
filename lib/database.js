'use strict';
var mongoose = require('mongoose');

var db = function () {
    return {
        config: function (conf) {
            //mongoose.connect('mongodb://' + conf.host + '/' + conf.database);

            mongoose.connect(process.env.MONGOLAB_URI ||process.env.MONGOHQ_URL ||'mongodb://localhost/test');
            var db = mongoose.connection;
            db.on('error', console.error.bind(console, 'connection error:'));
            db.once('open', function callback() {
                console.log('db connection open');
            });
        }
    };
};

module.exports = db();
