const passport = require("passport"),
InstagramStrategy = require("passport-instagram").Strategy,
{ INSTAGRAM_CLIENT_ID, INSTAGRAM_CLIENT_SECRET } = process.env,
User = require("../models/User");

passport.serializeUser((user, done)=>{
  done(null, user); //se va a estar intercambiando entre múltiples páginas
});
passport.deserializeUser(async (id, done)=>{
  const user = await User.findById(id)
  done(null, user); //consulta para ver que exista en la base de datos, como existe, se declara null
})

passport.use("instagram", new InstagramStrategy({
  clientID: INSTAGRAM_CLIENT_ID,
  clientSecret: INSTAGRAM_CLIENT_SECRET,
  callbackURL: `${process.env.PORT}/auth/callback`
  },
  function(accessToken, refreshToken, profile, done) {
    console.log(profile)
    /*
    User.findOrCreate({ instagramId: profile.id }, function (err, user) {
      return done(err, user);
    }); */
  }
));