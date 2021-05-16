const countries = {
    ar: 'Argentina',
    at: 'Austria',
}

function displayBestCountries() {
    browser.storage.local.get(null)
        .then(items => {
            const countriesWithCounts = {};

            for (const key in items) {
                if (!items.hasOwnProperty(key)) {
                    continue;
                }

                const [guessedCountry, correctCountry] = key.split('-');
                const isCorrect = guessedCountry === correctCountry;

                if (countriesWithCounts.hasOwnProperty(correctCountry)) {
                    if (isCorrect) {
                        countriesWithCounts[correctCountry].correct++;
                    } else {
                        countriesWithCounts[correctCountry].incorrect++;
                    }
                } else {
                    countriesWithCounts[correctCountry] = {
                        correct: isCorrect ? 1 : 0,
                        incorrect: isCorrect ? 0 : 1,
                    };
                }
            }

            const countriesWithPercent = [];

            for (const country in countriesWithCounts) {
                if (!countriesWithCounts.hasOwnProperty(country)) {
                    continue;
                }

                if (countriesWithCounts[country].incorrect === 0) {
                    countriesWithPercent.push({ country, percent: 1 });
                    continue;
                }

                countriesWithPercent.push({
                    country,
                    percent: countriesWithCounts[country].correct / (countriesWithCounts[country].correct + countriesWithCounts[country].incorrect),
                });
            }

            countriesWithPercent.sort((a, b) => -(a.percent - b.percent));

            const list = document.getElementById('country-list');
            list.innerHTML = '';

            countriesWithPercent.forEach(r => {
                const row = document.createElement('tr');
                row.classList.add('country-row');

                const flag = document.createElement('img');
                flag.src = `img/${r.country}.gif`;

                const flagCell = document.createElement('td');
                flagCell.appendChild(flag);

                const country = document.createElement('td');
                country.textContent = countries[r.country] ?? r.country;

                const percentCell = document.createElement('td');
                percentCell.textContent = prettyPercent(r.percent);

                row.appendChild(flagCell);
                row.appendChild(country);
                row.appendChild(percentCell);

                list.appendChild(row);
            });
        });
}

function prettyPercent(float) {
    const percentage = (float * 100).toFixed(1);

    if (percentage.endsWith('.0')) {
        return percentage.substr(0, percentage.length - 2) + '%';
    }

    return percentage + '%';
}

displayBestCountries();
