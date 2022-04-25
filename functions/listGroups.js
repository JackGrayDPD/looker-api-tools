const { sdk } = require('../looker/sdk');

function listGroups() {
	return new Promise((resolve, reject) => {
		sdk.ok(sdk.all_groups({ fields: 'name,id' }))
			.then(groups => {
				resolve(groups)
			})
			.catch(err => {
				reject(err)
			})
	})
}
module.exports = { listGroups };