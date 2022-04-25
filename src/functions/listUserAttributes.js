const { sdk } = require('../looker/sdk');

function listUserAttributes() {
	return new Promise((resolve, reject) => {
		sdk.ok(sdk.all_user_attributes({ fields: 'name,id,label' }))
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}
module.exports = { listUserAttributes };