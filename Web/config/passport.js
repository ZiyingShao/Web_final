const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
var sql = require("sqlite3");
sql.verbose();

var db = new sql.Database('user.db',sql.OPEN_READWRITE);

module.exports = function(passport) {
    passport.use(
        new LocalStrategy({usernameField: 'email', passwordField: 'password'}, (email, password, done) => {
            // console.log(email,password,done);
            var stmt = db.prepare("SELECT email FROM user_data WHERE email = ?");
            stmt.get([email.toLowerCase()], checkEmail);
            stmt.finalize();
            function checkEmail(err, user){
                if(err){
                    console.log('Find error');
                    throw err;
                }
                if(!user){
                    console.log('Email not match');
                    return done(null, false, {message: 'Email not exist!'});
                }

                console.log(password);

                var stmt1 = db.prepare("SELECT id, email, password FROM user_data WHERE email = ?");
                stmt1.get([email.toLowerCase()], checkPassword);
                stmt1.finalize();
                function checkPassword(err, user){
                    if(err){
                        throw err;
                    }
                    console.log(user.password);
                    bcrypt.compare(password, user.password, function (err, isMatch) {
                        if (err) throw err;
                        if (isMatch) {
                            return done(null, user);
                            console.log('Password match!');
                        } else {
                            return done(null, false, {message: 'wrong password'});
                            console.log('Wrong password!');
                        }
                    });
                }
            }
            console.log('finished check password');
            passport.serializeUser(function (user, done) {
                done(null, user.id);
            });

            passport.deserializeUser(function (id, done) {
                var stmt = db.prepare("SELECT id, email FROM user_data WHERE id = ?");
                stmt.get( id,checkUser);
                stmt.finalize();
                function checkUser(err, user) {
                    //error is here
                    if(err){
                        throw err;
                    }
                    if (!user) {
                        return done(null, false,{message: 'deserializeUSer failed'});
                    }
                    return done(null, user);
                };
            });
        })
    );
}
