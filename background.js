browser.webRequest.onBeforeRequest.addListener(
    details => {
        // That's fine
        if (details.method === 'POST' && details.url === 'https://www.geoguessr.com/api/v3/games/streak') {
            return {};
        }

        if (!details.requestBody) {
            return {};
        }

        const decoder = new TextDecoder('utf-8');

        const requestBody = JSON.parse(decoder.decode(details.requestBody.raw[0].bytes));
        const guessedCountry = requestBody.streakLocationCode;

        let filter = browser.webRequest.filterResponseData(details.requestId);
        let data = [];

        filter.ondata = event => {
            filter.write(event.data);
            data.push(event.data);
        }

        filter.onstop = () => {
            filter.close();

            const str = data
                .map(buffer => decoder.decode(buffer, { stream: true }))
                .join('');

            const responseBody = JSON.parse(str);

            const rounds = responseBody.rounds;
            const lastRound = rounds.pop();
            const correctCountry = lastRound.streakLocationCode;

            increment(`${guessedCountry}-${correctCountry}`);
        }
    },
    { urls: ['*://*.geoguessr.com/api/v3/games/*'] },
    ['requestBody', 'blocking'],
);

async function increment(key) {
    return browser.storage.local.get(key)
        .then(values => values[key] ?? 0)
        .then(i => browser.storage.local.set({ [key]: i + 1 }));
}
