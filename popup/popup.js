const list = document.getElementById('country-list');

function displayWorstCountries() {
    list.innerHTML = '';

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

            countriesWithPercent.sort((a, b) => a.percent - b.percent);

            countriesWithPercent.forEach(r => {
                const row = document.createElement('tr');
                row.classList.add('row');

                const flag = document.createElement('img');
                flag.src = `img/${r.country}.gif`;
                flag.title = r.country;

                const flagCell = document.createElement('td');
                flagCell.appendChild(flag);
                flagCell.classList.add('cell', 'cell--flag');

                const percentCell = document.createElement('td');
                const percent = prettyPercent(r.percent);
                percentCell.textContent = percent;
                percentCell.style.background = `linear-gradient(to right, #ffd9d9 ${percent}, transparent ${percent})`;
                percentCell.classList.add('cell');

                row.appendChild(flagCell);
                row.appendChild(percentCell);

                list.appendChild(row);
            });
        });
}

function displayConfusedCountries() {
    list.innerHTML = '';

    browser.storage.local.get(null)
        .then(items => {
            const incorrectGuesses = [];

            for (const key in items) {
                if (!items.hasOwnProperty(key)) {
                    continue;
                }

                const [guessedCountry, correctCountry] = key.split('-');

                if (guessedCountry !== correctCountry) {
                    incorrectGuesses.push({
                        guessedCountry,
                        correctCountry,
                        times: items[key],
                    });
                }
            }

            incorrectGuesses.sort((a, b) => b.times - a.times);

            incorrectGuesses.forEach(r => {
                const row = document.createElement('tr');
                row.classList.add('row');

                const guessedFlag = document.createElement('img');
                guessedFlag.src = `img/${r.guessedCountry}.gif`;
                guessedFlag.title = r.guessedCountry;

                const guessedFlagCell = document.createElement('td');
                guessedFlagCell.appendChild(guessedFlag);
                guessedFlagCell.classList.add('cell', 'cell--flag');

                const correctFlag = document.createElement('img');
                correctFlag.src = `img/${r.correctCountry}.gif`;
                correctFlag.title = r.correctCountry;

                const correctFlagCell = document.createElement('td');
                correctFlagCell.appendChild(correctFlag);
                correctFlagCell.classList.add('cell', 'cell--flag');

                const timesCell = document.createElement('td');
                timesCell.textContent = r.times;
                timesCell.classList.add('cell');

                row.appendChild(guessedFlagCell);
                row.appendChild(correctFlagCell);
                row.appendChild(timesCell);

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

displayWorstCountries();

function makeTabActive(tab) {
    const active = document.querySelector('.tab--active');
    active.classList.remove('tab--active');

    tab.classList.add('tab--active');
}

document.getElementById('tab-worst-countries').addEventListener('click', (e) => {
    makeTabActive(e.target);
    displayWorstCountries();
});

document.getElementById('tab-confused-countries').addEventListener('click', (e) => {
    makeTabActive(e.target);
    displayConfusedCountries();
});
