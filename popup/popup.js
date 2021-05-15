const countries = {
    ar: 'Argentina',
    at: 'Austria',
}

function getAll() {
    browser.storage.local.get(null)
        .then(stuff => {
            const res = {};

            for (const prop in stuff) {
                if (!stuff.hasOwnProperty(prop)) {
                    continue;
                }

                const [guess, correct] = prop.split('-');

                if (res.hasOwnProperty(correct)) {
                    if (guess === correct) {
                        res[correct].correct++;
                    } else {
                        res[correct].incorrect++;
                    }
                } else {
                    res[correct] = {
                        correct: guess === correct ? 1 : 0,
                        incorrect: guess === correct ? 0 : 1,
                    };
                }
            }

            const res2 = [];

            for (const country in res) {
                if (!res.hasOwnProperty(country)) {
                    continue;
                }

                if (res[country].incorrect === 0) {
                    res2.push({country, percent: 1});
                    continue;
                }

                res2.push({
                    country,
                    percent: res[country].correct / (res[country].correct + res[country].incorrect),
                });
            }

            res2.sort((a, b) => -(a.percent - b.percent));

            const wrapper = document.getElementById('country-list');
            wrapper.innerHTML = '';

            res2.forEach(r => {
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

                wrapper.appendChild(row);
            });
        });
}

function prettyPercent(float) {
    const perc = (float * 100).toFixed(1);

    if (perc.endsWith('.0')) {
        return perc.substr(0, perc.length - 2) + '%';
    }

    return perc + '%';
}

getAll();