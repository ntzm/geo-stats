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
                const row = document.createElement('li');
                row.classList.add('country-row');

                const flag = document.createElement('img');
                flag.src = `img/${r.country}.gif`;
                flag.title = r.country;
                flag.classList.add('country-row__flag')

                const percent = document.createElement('span');
                percent.textContent = (r.percent * 100).toFixed(2) + '%';
                percent.classList.add('country-row__percent');

                row.appendChild(flag);
                row.appendChild(percent);

                wrapper.appendChild(row);
            });
        });
}

getAll();