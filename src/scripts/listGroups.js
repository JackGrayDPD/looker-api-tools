const { listGroups } = require('../functions/listGroups');

function main() {
	listGroups()
		.then(groups => {
			console.log(groups);
		})
		.catch(err => {
			console.error(err);
		})
}
main();