var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var User = new Schema({
 fullname 		: String,
 img 			: String,
 email 			: String,
 password 		: String,

},{collection : 'user'});

var userModel = mongoose.model('user',User);

module.exports= {userModel}
// module.exports = mongoose.model('User', User);