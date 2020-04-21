const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true },
)



User.statics.initUser = (User) => {

	const _Users = [
		{
			"name": "User1",
			"email": "a@b.com",
			"password": "123"
		},
		{
			"name": "User2",
			"email": "admin@admin",
			"password": "admin"
		},
	];

	User.remove({}, (err) => {
		_Users.forEach(auser => {
			User.create(auser);
		})
	})
}


module.exports = mongoose.model('users', User)






