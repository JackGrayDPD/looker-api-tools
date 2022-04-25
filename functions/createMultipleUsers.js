const { sdk } = require('../looker/sdk');

function createUser(user) {
	return new Promise((resolve, reject) => {
		sdk.ok(sdk.create_user({
			first_name: user.first_name,
			last_name: user.last_name,
			is_disabled: user.is_disabled,
			locale: 'en'
		}))
			.then(new_user => {
				resolve(new_user);
			})
			.catch(err => {
				reject(err)
			})
	})
}
function createUserCredentials(user_id, user_email) {
	return new Promise((resolve, reject) => {
		sdk.ok(sdk.create_user_credentials_email(user_id, { email: user_email }))
			.then(new_user_email_credentials => {
				resolve({ email: new_user_email_credentials.email });
			})
			.catch(err => {
				reject(err);
			})
	})
}
function createMultipleUsers(user_array, disabled) {
	let new_users = [];
	let waiting = user_array.length;
	return new Promise((resolve, reject) => {
		user_array.forEach(user => {
			const { first_name, last_name, email } = user;
			createUser({ first_name, last_name, disabled })
				.then(new_user => {
					createUserCredentials(new_user.id, email)
						.then(new_user_email => {
							new_users.push({ display_name: new_user.display_name, email: new_user_email.email });
							waiting--;
							if (waiting == 0) {
								resolve(new_users);
							}
						})
						.catch(err => {
							reject(err);
						})
				})
				.catch(err => {
					reject(err);
				});
		});
	})
}
module.exports = { createMultipleUsers }