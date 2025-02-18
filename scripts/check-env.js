// scripts/check-env.js
const axios = require('axios');

async function checkEnvironment(url) {
    try {
        const response = await axios.get(url);
        if (response.status === 404) {
            console.log('Environment check passed');
            process.exit(0);
        }
    } catch (error) {
        console.error('Environment check failed url: ' + url + ' status: ' + response.status);
        process.exit(1);
    }
}

checkEnvironment(process.env.DEPLOY_URL);