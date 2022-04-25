const { sdk } = require('../looker/sdk');

function updateUserAttributeGroupValue(group_id, user_attribute_id, value) {
	return new Promise((resolve, reject) => {
		sdk.ok(sdk.update_user_attribute_group_value(group_id, user_attribute_id, { value: value }))
			.then(user_attribute_group_value => {
				resolve(user_attribute_group_value)
			})
			.catch(err => {
				reject(err)
			})
	})
}
module.exports = { updateUserAttributeGroupValue };