const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport = require("passport");

const GOOGLE_CLIENT_ID = "441556065644-kv6ieulrf7pnrpcumtnq6r9tddf0jeg5.apps.googleusercontent.com"
const GOOGLE_CLIENT_SECRET = "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"

passport.use(new GoogleStrategy({
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback" ,
  },
  function(accessToken, refreshToken, profile, done) {
    done(null, profile);
   
  }
));

passport.serializeUser((user,done)=>{
    done(null,user)
})

passport.deserializeUser((user,done)=>{
    done(null,user)
})