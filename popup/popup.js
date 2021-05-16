const countryShortToLongMap = {
    "AF": "Afghanistan",
    "AX": "Aland Islands",
    "AL": "Albania",
    "DZ": "Algeria",
    "AS": "American Samoa",
    "AD": "Andorra",
    "AO": "Angola",
    "AI": "Anguilla",
    "AQ": "Antarctica",
    "AG": "Antigua And Barbuda",
    "AR": "Argentina",
    "AM": "Armenia",
    "AW": "Aruba",
    "AU": "Australia",
    "AT": "Austria",
    "AZ": "Azerbaijan",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BD": "Bangladesh",
    "BB": "Barbados",
    "BY": "Belarus",
    "BE": "Belgium",
    "BZ": "Belize",
    "BJ": "Benin",
    "BM": "Bermuda",
    "BT": "Bhutan",
    "BO": "Bolivia",
    "BA": "Bosnia And Herzegovina",
    "BW": "Botswana",
    "BV": "Bouvet Island",
    "BR": "Brazil",
    "IO": "British Indian Ocean Territory",
    "BN": "Brunei Darussalam",
    "BG": "Bulgaria",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "KH": "Cambodia",
    "CM": "Cameroon",
    "CA": "Canada",
    "CV": "Cape Verde",
    "KY": "Cayman Islands",
    "CF": "Central African Republic",
    "TD": "Chad",
    "CL": "Chile",
    "CN": "China",
    "CX": "Christmas Island",
    "CC": "Cocos (Keeling) Islands",
    "CO": "Colombia",
    "KM": "Comoros",
    "CG": "Congo",
    "CD": "Congo, Democratic Republic",
    "CK": "Cook Islands",
    "CR": "Costa Rica",
    "CI": "Cote D\"Ivoire",
    "HR": "Croatia",
    "CU": "Cuba",
    "CY": "Cyprus",
    "CZ": "Czech Republic",
    "DK": "Denmark",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "EG": "Egypt",
    "SV": "El Salvador",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "EE": "Estonia",
    "ET": "Ethiopia",
    "FK": "Falkland Islands (Malvinas)",
    "FO": "Faroe Islands",
    "FJ": "Fiji",
    "FI": "Finland",
    "FR": "France",
    "GF": "French Guiana",
    "PF": "French Polynesia",
    "TF": "French Southern Territories",
    "GA": "Gabon",
    "GM": "Gambia",
    "GE": "Georgia",
    "DE": "Germany",
    "GH": "Ghana",
    "GI": "Gibraltar",
    "GR": "Greece",
    "GL": "Greenland",
    "GD": "Grenada",
    "GP": "Guadeloupe",
    "GU": "Guam",
    "GT": "Guatemala",
    "GG": "Guernsey",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "HM": "Heard Island & Mcdonald Islands",
    "VA": "Holy See (Vatican City State)",
    "HN": "Honduras",
    "HK": "Hong Kong",
    "HU": "Hungary",
    "IS": "Iceland",
    "IN": "India",
    "ID": "Indonesia",
    "IR": "Iran, Islamic Republic Of",
    "IQ": "Iraq",
    "IE": "Ireland",
    "IM": "Isle Of Man",
    "IL": "Israel",
    "IT": "Italy",
    "JM": "Jamaica",
    "JP": "Japan",
    "JE": "Jersey",
    "JO": "Jordan",
    "KZ": "Kazakhstan",
    "KE": "Kenya",
    "KI": "Kiribati",
    "KR": "Korea",
    "KP": "North Korea",
    "KW": "Kuwait",
    "KG": "Kyrgyzstan",
    "LA": "Lao People\"s Democratic Republic",
    "LV": "Latvia",
    "LB": "Lebanon",
    "LS": "Lesotho",
    "LR": "Liberia",
    "LY": "Libyan Arab Jamahiriya",
    "LI": "Liechtenstein",
    "LT": "Lithuania",
    "LU": "Luxembourg",
    "MO": "Macao",
    "MK": "Macedonia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MY": "Malaysia",
    "MV": "Maldives",
    "ML": "Mali",
    "MT": "Malta",
    "MH": "Marshall Islands",
    "MQ": "Martinique",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "YT": "Mayotte",
    "MX": "Mexico",
    "FM": "Micronesia, Federated States Of",
    "MD": "Moldova",
    "MC": "Monaco",
    "MN": "Mongolia",
    "ME": "Montenegro",
    "MS": "Montserrat",
    "MA": "Morocco",
    "MZ": "Mozambique",
    "MM": "Myanmar",
    "NA": "Namibia",
    "NR": "Nauru",
    "NP": "Nepal",
    "NL": "Netherlands",
    "AN": "Netherlands Antilles",
    "NC": "New Caledonia",
    "NZ": "New Zealand",
    "NI": "Nicaragua",
    "NE": "Niger",
    "NG": "Nigeria",
    "NU": "Niue",
    "NF": "Norfolk Island",
    "MP": "Northern Mariana Islands",
    "NO": "Norway",
    "OM": "Oman",
    "PK": "Pakistan",
    "PW": "Palau",
    "PS": "Palestinian Territory, Occupied",
    "PA": "Panama",
    "PG": "Papua New Guinea",
    "PY": "Paraguay",
    "PE": "Peru",
    "PH": "Philippines",
    "PN": "Pitcairn",
    "PL": "Poland",
    "PT": "Portugal",
    "PR": "Puerto Rico",
    "QA": "Qatar",
    "RE": "Reunion",
    "RO": "Romania",
    "RU": "Russian Federation",
    "RW": "Rwanda",
    "BL": "Saint Barthelemy",
    "SH": "Saint Helena",
    "KN": "Saint Kitts And Nevis",
    "LC": "Saint Lucia",
    "MF": "Saint Martin",
    "PM": "Saint Pierre And Miquelon",
    "VC": "Saint Vincent And Grenadines",
    "WS": "Samoa",
    "SM": "San Marino",
    "ST": "Sao Tome And Principe",
    "SA": "Saudi Arabia",
    "SN": "Senegal",
    "RS": "Serbia",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SG": "Singapore",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "ZA": "South Africa",
    "GS": "South Georgia And Sandwich Isl.",
    "ES": "Spain",
    "LK": "Sri Lanka",
    "SD": "Sudan",
    "SR": "Suriname",
    "SJ": "Svalbard And Jan Mayen",
    "SZ": "Swaziland",
    "SE": "Sweden",
    "CH": "Switzerland",
    "SY": "Syrian Arab Republic",
    "TW": "Taiwan",
    "TJ": "Tajikistan",
    "TZ": "Tanzania",
    "TH": "Thailand",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TK": "Tokelau",
    "TO": "Tonga",
    "TT": "Trinidad And Tobago",
    "TN": "Tunisia",
    "TR": "Turkey",
    "TM": "Turkmenistan",
    "TC": "Turks And Caicos Islands",
    "TV": "Tuvalu",
    "UG": "Uganda",
    "UA": "Ukraine",
    "AE": "United Arab Emirates",
    "GB": "United Kingdom",
    "US": "United States",
    "UM": "United States Outlying Islands",
    "UY": "Uruguay",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "VE": "Venezuela",
    "VN": "Vietnam",
    "VG": "Virgin Islands, British",
    "VI": "Virgin Islands, U.S.",
    "WF": "Wallis And Futuna",
    "EH": "Western Sahara",
    "YE": "Yemen",
    "ZM": "Zambia",
    "ZW": "Zimbabwe"
};

const list = document.getElementById('country-list');

async function displayWorstCountries() {
    list.innerHTML = '';

    const items = await browser.storage.local.get(null);

    const countriesWithCounts = {};

    for (const key in items) {
        if (!items.hasOwnProperty(key)) {
            continue;
        }

        const [guessedCountry, correctCountry] = key.split('-');
        const isCorrect = guessedCountry === correctCountry;
        const times = items[key];

        if (countriesWithCounts.hasOwnProperty(correctCountry)) {
            if (isCorrect) {
                countriesWithCounts[correctCountry].correct += times;
            } else {
                countriesWithCounts[correctCountry].incorrect += times;
            }
        } else {
            countriesWithCounts[correctCountry] = {
                correct: isCorrect ? times : 0,
                incorrect: isCorrect ? 0 : times,
            };
        }
    }

    Object.keys(countriesWithCounts)
        .map(country => {
            const correct = countriesWithCounts[country].correct;
            const incorrect = countriesWithCounts[country].incorrect;
            return {
                country,
                correct,
                incorrect,
                percent: incorrect === 0
                    ? 1
                    : correct / (correct + incorrect),
            }
        })
        .sort((a, b) => a.percent - b.percent)
        .forEach(({ country, correct, incorrect, percent }) => {
            const row = document.createElement('tr');
            row.classList.add('row');

            const flag = document.createElement('img');
            flag.src = `img/${country}.gif`;

            const flagCell = document.createElement('td');
            flagCell.appendChild(flag);
            flagCell.classList.add('cell', 'cell--flag');
            flagCell.title = countryShortToLongMap[country.toUpperCase()];

            const rateCell = document.createElement('td');
            rateCell.classList.add('cell', 'cell--rate');
            rateCell.textContent = `${correct}/${correct + incorrect}`;

            const percentCell = document.createElement('td');
            const pretty = prettyPercent(percent);
            percentCell.textContent = pretty;
            percentCell.style.background = `linear-gradient(to right, #ffd9d9 ${pretty}, transparent ${pretty})`;
            percentCell.classList.add('cell');

            row.appendChild(flagCell);
            row.appendChild(rateCell);
            row.appendChild(percentCell);

            list.appendChild(row);
        });
}

async function displayConfusedCountries() {
    list.innerHTML = '';

    const items = await browser.storage.local.get(null);

    const combined = Object.keys(items)
        .map(key => ({ countries: key.split('-'), times: items[key] }))
        .filter(({ countries }) => countries[0] !== countries[1])
        .map(({ countries, times }) => ({ combinedKey: countries.sort().join('-'), times }))
        .reduce((carry, { combinedKey, times }) => ({ ...carry, [combinedKey]: (carry[combinedKey] ?? 0) + times }), {});

    Object.keys(combined)
        .map(key => ({ countries: key.split('-'), times: combined[key] }))
        .sort((a, b) => b.times - a.times)
        .forEach(({ countries, times }) => {
            const row = document.createElement('tr');
            row.classList.add('row');

            countries.forEach(country => {
                const flag = document.createElement('img');
                flag.src = `img/${country}.gif`;

                const cell = document.createElement('td');
                cell.appendChild(flag);
                cell.classList.add('cell', 'cell--flag');
                cell.title = countryShortToLongMap[country.toUpperCase()];

                row.appendChild(cell);
            });

            const timesCell = document.createElement('td');
            timesCell.textContent = times;
            timesCell.classList.add('cell');

            const helpLink = document.createElement('a');
            helpLink.classList.add('link');
            helpLink.textContent = 'Differences';
            helpLink.href = `https://ntzm.github.io/geo-stats/countries/${countries.join('-')}`;

            const helpCell = document.createElement('td');
            helpCell.appendChild(helpLink);
            helpCell.classList.add('cell', 'cell--help');

            row.appendChild(timesCell);
            row.appendChild(helpCell);

            list.appendChild(row);
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

document.getElementById('tab-worst-countries').addEventListener('click', async ({ target }) => {
    makeTabActive(target);
    displayWorstCountries();
});

document.getElementById('tab-confused-countries').addEventListener('click', async ({ target }) => {
    makeTabActive(target);
    displayConfusedCountries();
});
