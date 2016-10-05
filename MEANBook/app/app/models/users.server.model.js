var mongoose	= require('mongoose'),
	Schema		= mongoose.Schema;

var UserSchema = new Schema ({
	firstName: String,
	lastName: String,
	email: {
		type: String,
		trim: true,
		required: true
	},
	username: {
		type: String,
		trim: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	},
	website: {
		type: String,
		get: function(url) {
			if (!url) {
				return url;
			} else {
				if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
					url = 'http://' + url;
				}
				
				return url;
				}
		}
	}
});

UserSchema.set('toJson', {getters: true });
mongoose.model('User', UserSchema);