const { exec } = require('child_process')
const path = require('path')


async function init() {
    console.log("Executing build script");
    const outDir = path.join(__dirname, 'output');

    const process = exec(`cd ${outDir} && npm i && npm run build`);
    process.stdout.on('data', function(data) {
        console.log(data.toString());
    });

    process.stdout.on('error', function(data) {
        console.log('Error', data.toString());
    });

    process.on('close', function(){
        console.log('Build Comlete');
    });
}