const { exec } = require('child_process')
const path = require('path')
const fs = require('fs')

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
        const distPath = path.join(__dirname, 'output', 'dist');
        const distContent = fs.readdirSync(distPath,  { recursive : true })
        for( const filePath of distContent ) {
            if ( fs.lstatSync(filePath).isDirectory() ) continue;
        
        }
    });
}