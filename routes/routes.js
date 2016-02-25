//var _ = require('lodash');
var requestIp = require('request-ip'),
    acceptLanguage,
    userAgent;

module.exports = function(app){

    app.get('/', function(req, res){
        var regExp = /\(([^)]+)\)/;
        var clientIp = requestIp.getClientIp(req);
        acceptLanguage = req.get('accept-language').split(',')[0];
        userAgent = req.get('user-agent');
        software = regExp.exec(userAgent)[1];

        res.json({
            ipaddress:clientIp,
            language: acceptLanguage,
            software: software
        });
    });




};

