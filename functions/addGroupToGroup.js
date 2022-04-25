const { sdk } = require('../looker/sdk');

function addGroupToGroup(parent_group, child_group) {
	return new Promise((resolve, reject) => {
		sdk.ok(sdk.add_group_group(parent_group, { value: child_group }))
			.then(group_id_for_group_inclusion => {
				resolve(group_id_for_group_inclusion)
			})
			.catch(err => {
				reject(err)
			})
	})
}
module.exports = { addGroupToGroup }