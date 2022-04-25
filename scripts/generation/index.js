const fs = require("fs");

const [, , scriptName, sdkMethod] = process.argv;

const generateScript = (scriptName, sdkMethod) => {

	const scriptWriter = fs.createWriteStream(`./src/scripts/${scriptName}.js`);
	const functionWriter = fs.createWriteStream(`./src/functions/${scriptName}.js`);

	const scriptTemplate = createScriptTemplate(scriptName);
	const functionTemplate = createFunctionTemplate(scriptName, sdkMethod);

	scriptWriter.write(scriptTemplate);
	functionWriter.write(functionTemplate);

	fs.appendFileSync('./README.md', createReadMe(scriptName))
};

const createReadMe = scriptName => `\n\n### ${scriptName}\n`;

const createScriptTemplate = (scriptName) =>
	`const yargs = require('yargs');
const { ${scriptName} } = require('../functions/${scriptName}');
/* DON'T FORGET TO ADD A SCRIPT TO package.json */
const args = yargs(process.argv.slice(2))
	.options({
		'arg1': {
		},
	})
	.parse();
const { arg1 } = args;

function main() {
	
}
main();`;

const createFunctionTemplate = (scriptName, sdkMethod) =>
	`const { sdk } = require('../looker/sdk');

function ${scriptName}(/* ARGS */) {
	return new Promise((resolve, reject) => {
		sdk.ok(sdk.${sdkMethod}(/*ARGS*/))
			.then(res => {
				resolve(res)
			})
			.catch(err => {
				reject(err)
			})
	})
}
module.exports = { ${scriptName} }`;

generateScript(scriptName, sdkMethod);