const yargs = require('yargs');
const { updateUserAttributeGroupValue } = require('./updateUserAttributeGroupValue/index');

const args = yargs(process.argv.slice(2))
	.options({
		'group_id': {
			alias: ['g'],
			demandOption: true,
			describe: '[Required] The numerical id of the group for which to update the user attribute value.',
			type: 'string'
		},
		'user_attribute_id': {
			alias: ['a'],
			demandOption: true,
			describe: '[Required] The numerical id of the user attribute to update.',
			type: 'string'
		},
		'value': {
			alias: ['v'],
			demandOption: true,
			describe: '[Required] The new vlaue for the user attribute.',
			type: 'string'
		}
	})
	.parse();
const { group_id, user_attribute_id, value } = args;

function main() {
	const request = [group_id, user_attribute_id, value]
	updateUserAttributeGroupValue(...request)
		.then(user_attribute_group_value => {
			console.log(user_attribute_group_value);
		})
		.catch(err => {
			console.error(err);
		})
}
main();