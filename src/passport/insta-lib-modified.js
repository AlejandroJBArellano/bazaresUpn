
var util = require('util')
, OAuth2Strategy = require('passport-oauth2')
, InternalOAuthError = require('passport-oauth2').InternalOAuthError;


function Strategy(options, verify) {
    options = options || {};
    options.authorizationURL = options.authorizationURL || 'https://api.instagram.com/oauth/authorize/';
    options.tokenURL = options.tokenURL || 'https://api.instagram.com/oauth/access_token';
    
    OAuth2Strategy.call(this, options, verify);
    this.name = 'instagram';
}

Strategy.prototype.userProfile = function(accessToken, done) {
// TODO: Instagram provides user profile information in the access token
//       response.  As an optimization, that information should be used, which
//       would avoid the need for an extra request during this step.  However,
//       the internal node-oauth module will have to be modified to support
//       exposing this information.

this._oauth2.get('https://graph.instagram.com/me?fields=id,username', accessToken, function (err, body, res) {
    if (err) { return done(new InternalOAuthError('failed to fetch user profile', err)); }
    
    try {
    var json = JSON.parse(body);
    
    var profile = { provider: 'instagram' };
    profile.id = json.data.id;
    profile.displayName = json.data.full_name;
    profile.name = { 
        familyName: json.data.last_name,
        givenName: json.data.first_name 
    };
    profile.username = json.data.username;
    
    profile._raw = body;
    profile._json = json;
    
    done(null, profile);
    } catch(e) {
    done(e);
    }
});
}


exports = module.exports = Strategy;
exports.Strategy = Strategy;
