const yargs = require('yargs');
const { addGroupToGroup } = require('../functions/addGroupToGroup');

const args = yargs(process.argv.slice(2))
	.options({
		'parent_group': {
			alias: ['parent', 'p'],
			demandOption: true,
			describe: '',
			type: 'string'
		},
		'child_group': {
			alias: ['child', 'c'],
			demandOption: true,
			describe: '',
			type: 'string'
		},
	})
	.parse();
const { parent_group, child_group } = args;

function main() {
	const request = [parent_group, child_group];
	addGroupToGroup(...request)
		.then(group_id_for_group_inclusion => {
			console.log(group_id_for_group_inclusion);
		})
		.catch(err => {
			console.error(err);
		})
}
main();