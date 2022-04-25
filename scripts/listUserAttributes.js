const { listUserAttributes } = require('../functions/listUserAttributes');

function main() {
	listUserAttributes()
		.then(groups => {
			console.log(groups);
		})
		.catch(err => {
			console.error(err);
		})
}
main();