'use strict';


/*var Product = require('../models/productModel');


module.exports = function (router) {


	router.get('/', function (req, res) {

		Product.find(function (err, prods) {
			if (err) {
				console.log(err);
			}
            prods.forEach(function(prod) {
                prod.prettyPrice = prod.prettyPrice();
            });
			var model = {
				products: prods
			};
			res.render('index', model);
		});

	});

    router.get('/setLanguage/:locale', function (req, res) {
        res.cookie('locale', req.params.locale);
        res.redirect('/');
    });



    router.get('/');
};

*/


var IndexModel = require('../models/index');


module.exports = function (router) {

    var model = new IndexModel();

    router.get('/', function (req, res) {
        console.log("something happening");

        res.render('index', model);


    });

};
