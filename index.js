const fetch = require('node-fetch');

const baseUrl = 'https://alertzy.app/send'

async function request(accountKey, title, message) {
    const url = baseUrl + '?accountKey=' + accountKey + '&title=' + title + '&message=' + encodeURIComponent(message);
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
    });
    const json = await response.json();
    return json;
}

module.exports = {
    sendCustomAlert: async function (accountKey, title, message) {
        return await request(accountKey, title, message);
    },
}
