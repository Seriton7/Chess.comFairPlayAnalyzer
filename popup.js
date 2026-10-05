function $(id){
    const el = document.getElementById(id);
    if (!el) console.warn(`Missing element with id="${id}" in popup.html`);
    return el;
}

function setText(id, value){
    const el = $(id);
    if (el) el.textContent = value;
}

function setHTML(id, value){
    const el = $(id);
    if (el) el.innerHTML = value;
}

function setDisplay(id, value){
    const el = $(id);
    if (el) el.style.display = value;
}

const COUNTRY_NAMES = {
    AD: 'Andorra', AE: 'United Arab Emirates', AF: 'Afghanistan', AG: 'Antigua and Barbuda',
    AI: 'Anguilla', AL: 'Albania', AM: 'Armenia', AO: 'Angola', AQ: 'Antarctica',
    AR: 'Argentina', AS: 'American Samoa', AT: 'Austria', AU: 'Australia', AW: 'Aruba',
    AX: 'Åland Islands', AZ: 'Azerbaijan', BA: 'Bosnia and Herzegovina', BB: 'Barbados',
    BD: 'Bangladesh', BE: 'Belgium', BF: 'Burkina Faso', BG: 'Bulgaria', BH: 'Bahrain',
    BI: 'Burundi', BJ: 'Benin', BL: 'Saint Barthélemy', BM: 'Bermuda', BN: 'Brunei',
    BO: 'Bolivia', BQ: 'Caribbean Netherlands', BR: 'Brazil', BS: 'Bahamas', BT: 'Bhutan',
    BV: 'Bouvet Island', BW: 'Botswana', BY: 'Belarus', BZ: 'Belize', CA: 'Canada',
    CC: 'Cocos Islands', CD: 'DR Congo', CF: 'Central African Republic', CG: 'Republic of the Congo',
    CH: 'Switzerland', CI: 'Ivory Coast', CK: 'Cook Islands', CL: 'Chile', CM: 'Cameroon',
    CN: 'China', CO: 'Colombia', CR: 'Costa Rica', CU: 'Cuba', CV: 'Cape Verde',
    CW: 'Curaçao', CX: 'Christmas Island', CY: 'Cyprus', CZ: 'Czech Republic', DE: 'Germany',
    DJ: 'Djibouti', DK: 'Denmark', DM: 'Dominica', DO: 'Dominican Republic', DZ: 'Algeria',
    EC: 'Ecuador', EE: 'Estonia', EG: 'Egypt', EH: 'Western Sahara', ER: 'Eritrea',
    ES: 'Spain', ET: 'Ethiopia', FI: 'Finland', FJ: 'Fiji', FK: 'Falkland Islands',
    FM: 'Micronesia', FO: 'Faroe Islands', FR: 'France', GA: 'Gabon', GB: 'United Kingdom',
    GD: 'Grenada', GE: 'Georgia', GF: 'French Guiana', GG: 'Guernsey', GH: 'Ghana',
    GI: 'Gibraltar', GL: 'Greenland', GM: 'Gambia', GN: 'Guinea', GP: 'Guadeloupe',
    GQ: 'Equatorial Guinea', GR: 'Greece', GS: 'South Georgia', GT: 'Guatemala', GU: 'Guam',
    GW: 'Guinea-Bissau', GY: 'Guyana', HK: 'Hong Kong', HM: 'Heard Island', HN: 'Honduras',
    HR: 'Croatia', HT: 'Haiti', HU: 'Hungary', ID: 'Indonesia', IE: 'Ireland',
    IL: 'Israel', IM: 'Isle of Man', IN: 'India', IO: 'British Indian Ocean Territory',
    IQ: 'Iraq', IR: 'Iran', IS: 'Iceland', IT: 'Italy', JE: 'Jersey', JM: 'Jamaica',
    JO: 'Jordan', JP: 'Japan', KE: 'Kenya', KG: 'Kyrgyzstan', KH: 'Cambodia', KI: 'Kiribati',
    KM: 'Comoros', KN: 'Saint Kitts and Nevis', KP: 'North Korea', KR: 'South Korea',
    KW: 'Kuwait', KY: 'Cayman Islands', KZ: 'Kazakhstan', LA: 'Laos', LB: 'Lebanon',
    LC: 'Saint Lucia', LI: 'Liechtenstein', LK: 'Sri Lanka', LR: 'Liberia', LS: 'Lesotho',
    LT: 'Lithuania', LU: 'Luxembourg', LV: 'Latvia', LY: 'Libya', MA: 'Morocco',
    MC: 'Monaco', MD: 'Moldova', ME: 'Montenegro', MF: 'Saint Martin', MG: 'Madagascar',
    MH: 'Marshall Islands', MK: 'North Macedonia', ML: 'Mali', MM: 'Myanmar', MN: 'Mongolia',
    MO: 'Macau', MP: 'Northern Mariana Islands', MQ: 'Martinique', MR: 'Mauritania',
    MS: 'Montserrat', MT: 'Malta', MU: 'Mauritius', MV: 'Maldives', MW: 'Malawi',
    MX: 'Mexico', MY: 'Malaysia', MZ: 'Mozambique', NA: 'Namibia', NC: 'New Caledonia',
    NE: 'Niger', NF: 'Norfolk Island', NG: 'Nigeria', NI: 'Nicaragua', NL: 'Netherlands',
    NO: 'Norway', NP: 'Nepal', NR: 'Nauru', NU: 'Niue', NZ: 'New Zealand', OM: 'Oman',
    PA: 'Panama', PE: 'Peru', PF: 'French Polynesia', PG: 'Papua New Guinea', PH: 'Philippines',
    PK: 'Pakistan', PL: 'Poland', PM: 'Saint Pierre and Miquelon', PN: 'Pitcairn Islands',
    PR: 'Puerto Rico', PS: 'Palestine', PT: 'Portugal', PW: 'Palau', PY: 'Paraguay',
    QA: 'Qatar', RE: 'Réunion', RO: 'Romania', RS: 'Serbia', RU: 'Russia', RW: 'Rwanda',
    SA: 'Saudi Arabia', SB: 'Solomon Islands', SC: 'Seychelles', SD: 'Sudan', SE: 'Sweden',
    SG: 'Singapore', SH: 'Saint Helena', SI: 'Slovenia', SJ: 'Svalbard and Jan Mayen',
    SK: 'Slovakia', SL: 'Sierra Leone', SM: 'San Marino', SN: 'Senegal', SO: 'Somalia',
    SR: 'Suriname', SS: 'South Sudan', ST: 'São Tomé and Príncipe', SV: 'El Salvador',
    SX: 'Sint Maarten', SY: 'Syria', SZ: 'Eswatini', TC: 'Turks and Caicos Islands',
    TD: 'Chad', TF: 'French Southern Territories', TG: 'Togo', TH: 'Thailand',
    TJ: 'Tajikistan', TK: 'Tokelau', TL: 'Timor-Leste', TM: 'Turkmenistan', TN: 'Tunisia',
    TO: 'Tonga', TR: 'Turkey', TT: 'Trinidad and Tobago', TV: 'Tuvalu', TW: 'Taiwan',
    TZ: 'Tanzania', UA: 'Ukraine', UG: 'Uganda', UM: 'U.S. Minor Outlying Islands',
    US: 'United States', UY: 'Uruguay', UZ: 'Uzbekistan', VA: 'Vatican City',
    VC: 'Saint Vincent and the Grenadines', VE: 'Venezuela', VG: 'British Virgin Islands',
    VI: 'U.S. Virgin Islands', VN: 'Vietnam', VU: 'Vanuatu', WF: 'Wallis and Futuna',
    WS: 'Samoa', XK: 'Kosovo', YE: 'Yemen', YT: 'Mayotte', ZA: 'South Africa',
    ZM: 'Zambia', ZW: 'Zimbabwe'
};

class ChessFairPlayAnalyzer{
    constructor(){
        this.apiBase = 'https://api.chess.com/pub/player/';
        this.chartInstance = null;
        this.ratingChartInstance = null;
        this.init();
    }

    init(){
        const btn = $('analyzeBtn');
        const input = $('usernameInput');
        if (btn) btn.addEventListener('click', () => this.analyzePlayer());
        if (input){
            input.addEventListener('keypress', (e) =>{
                if (e.key === 'Enter') this.analyzePlayer();
            });
        }
    }

    async analyzePlayer(){
        const input = $('usernameInput');
        const username = input ? input.value.trim().toLowerCase() : '';
        if (!username){
            this.showError('Please enter a username');
            return;
        }
        this.showLoading(true);
        this.hideError();
        this.setProgress('Fetching profile...');
        try{
            const [playerData, statsData] = await Promise.all([
                this.fetchPlayerData(username),
                this.fetchPlayerStats(username)
            ]);
            if (!playerData || !statsData){
                throw new Error('Failed to fetch player data');
            }
            this.setProgress('Scanning game archives for accuracy data...');
            const accuracies = await this.fetchRealAccuracies(username);
            await this.displayResults(playerData, statsData, accuracies);
            this.showLoading(false);
        } 
        catch (error){
            this.showLoading(false);
            this.showError(error.message || 'Failed to analyze player. Please check the username and try again.');
        }
    }
    async fetchPlayerData(username){
        const response = await fetch(`${this.apiBase}${username}`);
        if (!response.ok){
            if (response.status === 404) throw new Error('Player not found. Please check the username.');
            throw new Error(`API Error: ${response.status}`);
        }
        return await response.json();
    }
    async fetchPlayerStats(username){
        const response = await fetch(`${this.apiBase}${username}/stats`);
        if (!response.ok) throw new Error('Failed to fetch player statistics');
        return await response.json();
    }

    async fetchRealAccuracies(username){
        const bullet = [];
        const blitz = [];
        const rapid = [];
        const ratingHistory = { bullet: [], blitz: [], rapid: [] };
        const now = new Date();
        const currentYear = now.getFullYear();
        const currentMonth = now.getMonth() + 1;
        for (let year = currentYear; year >= currentYear - 1; year--){
            for (let month = 12; month >= 1; month--){
                if (year === currentYear && month > currentMonth) continue;
                const monthStr = String(month).padStart(2, '0');
                this.setProgress(`Scanning ${year}-${monthStr}...`);
                try{
                    const url = `${this.apiBase}${username}/games/${year}/${monthStr}`;
                    const response = await fetch(url);
                    if (!response.ok) continue;
                    const data = await response.json();
                    if (!data.games) continue;
                    data.games.forEach(game =>{
                        if (!game.rated || game.rules !== 'chess') return;
                        const isWhite = game.white.username.toLowerCase() === username;
                        const playerSide = isWhite ? game.white : game.black;
                        if (game.accuracies){
                            const accuracy = isWhite ? game.accuracies.white : game.accuracies.black;
                            if (typeof accuracy === 'number'){
                                switch (game.time_class){
                                    case 'bullet': bullet.push(accuracy); break;
                                    case 'blitz': blitz.push(accuracy); break;
                                    case 'rapid': rapid.push(accuracy); break;
                                }
                            }
                        }
                        if (playerSide && typeof playerSide.rating === 'number' && game.end_time){
                            const bucket = ratingHistory[game.time_class];
                            if (bucket){
                                const timestamp = game.end_time * 1000;
                                const date = new Date(timestamp).toISOString().split('T')[0];
                                bucket.push({ date, rating: playerSide.rating, timestamp });
                            }
                        }
                    });
                } 
                catch (e){

                    continue;
                }
            }
        }
        const avg = (arr) => arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length) : null;
        Object.keys(ratingHistory).forEach(key =>{
            ratingHistory[key].sort((a, b) => a.timestamp - b.timestamp);
        });
        return{
            bulletAvg: avg(bullet),
            blitzAvg: avg(blitz),
            rapidAvg: avg(rapid),
            bulletCount: bullet.length,
            blitzCount: blitz.length,
            rapidCount: rapid.length,
            ratingHistory
        };
    }

    buildDailyRatingSeries(entries){
        const dailyMap = new Map();
        entries.forEach(entry =>{
            dailyMap.set(entry.date, entry.rating);
        });
        return Array.from(dailyMap.entries())
            .map(([date, rating]) => ({ date, rating }))
            .sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    async displayResults(playerData, statsData, accuracies){
        this.displayPlayerInfo(playerData);
        this.displayRatings(statsData);
        this.displayAccuracies(accuracies);
        const fairPlayScore = this.calculateFairPlayScore(playerData, statsData, accuracies);
        this.displayFairPlayScore(fairPlayScore);
        this.createWinRateChart(statsData);
        this.createRatingProgressChart(accuracies.ratingHistory);
        setDisplay('results', 'block');
    }
    getCountryName(countryCode){
        if (!countryCode) return 'Unknown';
        return COUNTRY_NAMES[countryCode.toUpperCase()] || countryCode;
    }

    displayPlayerInfo(playerData){
        const avatar = playerData.avatar || 'https://images.chesscomfiles.com/uploads/v1/images_users/default_avatar/50/default.png';
        const avatarEl = $('playerAvatar');
        if (avatarEl) avatarEl.src = avatar;
        setText('playerUsername', playerData.username);
        const countryCode = playerData.country ? playerData.country.split('/').pop().toUpperCase() : null;
        const countryName = this.getCountryName(countryCode);
        setText('playerCountry', `Country: ${countryName}`);
        let statusHTML = '';
        if (playerData.status && playerData.status.includes('staff')){
            statusHTML += '<span class="badge staff">Staff</span> ';
        }
        if (playerData.status && (playerData.status.includes('mod') || playerData.status.includes('moderator'))){
            statusHTML += '<span class="badge mod">Mod</span> ';
        }
        if (playerData.is_streamer){
            statusHTML += '<span class="badge premium">Streamer</span> ';
        }
        if (playerData.title){
            statusHTML += `<span class="badge title">${playerData.title}</span> `;
        }
        setHTML('playerStatus', statusHTML);
        const joinDate = new Date(playerData.joined * 1000);
        const now = new Date();
        const ageInDays = Math.floor((now - joinDate) / (1000 * 60 * 60 * 24));
        setText('playerJoined', `Joined: ${joinDate.toLocaleDateString()}`);
        setText('accountAge', `${ageInDays} days`);
        if (playerData.last_online){
            const lastSeen = new Date(playerData.last_online * 1000);
            const daysSince = Math.floor((now - lastSeen) / (1000 * 60 * 60 * 24));
            setText('lastSeen', daysSince === 0 ? 'Today' : `${daysSince}d ago`);
        } else{
            setText('lastSeen', 'Unknown');
        }
        setText('followers', playerData.followers || '0');
    }

    displayRatings(statsData){
        const modes = ['chess_rapid', 'chess_blitz', 'chess_bullet'];
        const displayNames = ['rapid', 'blitz', 'bullet'];
        let totalGames = 0;
        modes.forEach((mode, index) =>{
            const modeData = statsData[mode];
            const displayName = displayNames[index];
            if (modeData && modeData.last){
                const rating = modeData.last.rating;
                const games = modeData.record ? (modeData.record.win + modeData.record.loss + modeData.record.draw) : 0;
                setText(`${displayName}Rating`, rating);
                setText(`${displayName}Games`, `${games} games`);
                totalGames += games;
            } else{
                setText(`${displayName}Rating`, 'N/A');
                setText(`${displayName}Games`, '0 games');
            }
        });
        setText('totalGames', totalGames);
    }

    displayAccuracies(accuracies){
        const fmt = (val) => val === null ? 'N/A' : `${val.toFixed(1)}%`;
        setText('rapidAccuracy', fmt(accuracies.rapidAvg));
        setText('blitzAccuracy', fmt(accuracies.blitzAvg));
        setText('bulletAccuracy', fmt(accuracies.bulletAvg));
    }

    calculateFairPlayScore(playerData, statsData, accuracies){
        let score = 100;
        const rapidRating = statsData.chess_rapid?.last?.rating || 0;
        const blitzRating = statsData.chess_blitz?.last?.rating || 0;
        const bulletRating = statsData.chess_bullet?.last?.rating || 0;
        if (rapidRating > bulletRating + 300 || blitzRating > bulletRating + 300){
            score -= 5;
        }
        const joinDate = new Date(playerData.joined * 1000);
        const now = new Date();
        const ageInDays = Math.floor((now - joinDate) / (1000 * 60 * 60 * 24));
        const ageInMonths = ageInDays / 30;
        if (ageInDays <= 20){
            score -= 10;
        } else if (ageInMonths <= 4){
            score -= 5;
        }
        if (playerData.status && playerData.status.includes('closed:fair_play_violations')){
            score = 0;
        }
        const modes = ['chess_rapid', 'chess_blitz'];
        modes.forEach(mode =>{
            const modeData = statsData[mode];
            if (modeData && modeData.record){
                const { win, loss, draw } = modeData.record;
                const totalGames = win + loss + draw;
                if (totalGames > 0){
                    const winRate = (win / totalGames) * 100;
                    if (winRate >= 70) score -= 10;
                    else if (winRate >= 60) score -= 5;
                }
            }
        });
        const realAccuracies = [accuracies.rapidAvg, accuracies.blitzAvg, accuracies.bulletAvg].filter(a => a !== null);
        if (realAccuracies.length > 0){
            const avgAccuracy = realAccuracies.reduce((a, b) => a + b, 0) / realAccuracies.length;
            if (avgAccuracy > 90) score -= 15;
        }
        return Math.max(0, Math.min(100, Math.round(score)));
    }

    displayFairPlayScore(score){
        setText('fairPlayScore', `${score}%`);
        const scoreElement = document.querySelector('.fair-play-score');
        if (!scoreElement) return;
        if (score >= 90){
            scoreElement.style.background = 'linear-gradient(135deg, #28A745 0%, #20C997 100%)';
        } else if (score >= 65){
            scoreElement.style.background = 'linear-gradient(135deg, #FFC107 0%, #FD7E14 100%)';
        } else if (score >= 40){
            scoreElement.style.background = 'linear-gradient(135deg, #FD7E14 0%, #DC3545 100%)';
        } else{
            scoreElement.style.background = 'linear-gradient(135deg, #DC3545 0%, #6F42C1 100%)';
        }
    }

    createWinRateChart(statsData){
        const canvas = $('winRateChart');
        if (!canvas || typeof Chart === 'undefined') return;
        const ctx = canvas.getContext('2d');
        const modes = ['chess_rapid', 'chess_blitz', 'chess_bullet'];
        const labels = ['Rapid', 'Blitz', 'Bullet'];
        const winRates = [];
        const colors = ['#667EEA', '#764BA2', '#F093FB'];
        modes.forEach(mode =>{
            const modeData = statsData[mode];
            if (modeData && modeData.record){
                const { win, loss, draw } = modeData.record;
                const total = win + loss + draw;
                winRates.push(total > 0 ? Math.round((win / total) * 100) : 0);
            } else{
                winRates.push(0);
            }
        });
        if (this.chartInstance){
            this.chartInstance.destroy();
        }
        this.chartInstance = new Chart(ctx, {
            type: 'doughnut',
            data:{
                labels: labels,
                datasets:[{
                    data: winRates,
                    backgroundColor: colors,
                    borderColor: colors.map(c => c + '80'),
                    borderWidth: 2,
                    hoverOffset: 4
                }]
            },
            options:{
                responsive: true,
                maintainAspectRatio: false,
                plugins:{
                    legend:{
                        position: 'bottom',
                        labels:{ padding: 10, usePointStyle: true, font: { size: 10 }}
                    },
                    tooltip:{
                        callbacks:{
                            label: (context) => `${context.label}: ${context.parsed}% win rate`
                        }
                    }
                }
            }
        });
    }

    createRatingProgressChart(ratingHistory){
        const canvas = $('ratingProgressChart');
        if (!canvas || typeof Chart === 'undefined') return;
        const ctx = canvas.getContext('2d');
        const rapidSeries = this.buildDailyRatingSeries(ratingHistory.rapid);
        const blitzSeries = this.buildDailyRatingSeries(ratingHistory.blitz);
        const bulletSeries = this.buildDailyRatingSeries(ratingHistory.bullet);
        const allDates = new Set([
            ...rapidSeries.map(e => e.date),
            ...blitzSeries.map(e => e.date),
            ...bulletSeries.map(e => e.date)
        ]);
        const labels = Array.from(allDates).sort((a, b) => new Date(a) - new Date(b));
        const toAlignedData = (series) => {
            const map = new Map(series.map(e => [e.date, e.rating]));
            return labels.map(date => map.has(date) ? map.get(date) : null);
        };
        if (this.ratingChartInstance){
            this.ratingChartInstance.destroy();
        }
        if (labels.length === 0){
            return;
        }
        this.ratingChartInstance = new Chart(ctx, {
            type: 'line',
            data:{
                labels: labels,
                datasets:[
                    {
                        label: 'Rapid',
                        data: toAlignedData(rapidSeries),
                        borderColor: '#667EEA',
                        backgroundColor: '#667EEA33',
                        spanGaps: true,
                        tension: 0.2,
                        pointRadius: 2
                    },
                    {
                        label: 'Blitz',
                        data: toAlignedData(blitzSeries),
                        borderColor: '#764BA2',
                        backgroundColor: '#764BA233',
                        spanGaps: true,
                        tension: 0.2,
                        pointRadius: 2
                    },
                    {
                        label: 'Bullet',
                        data: toAlignedData(bulletSeries),
                        borderColor: '#F093FB',
                        backgroundColor: '#F093FB33',
                        spanGaps: true,
                        tension: 0.2,
                        pointRadius: 2
                    }
                ]
            },
            options:{
                responsive: true,
                maintainAspectRatio: false,
                interaction:{ mode: 'index', intersect: false },
                plugins:{
                    legend:{
                        position: 'bottom',
                        labels:{ padding: 10, usePointStyle: true, font: { size: 10 }}
                    },
                    tooltip:{
                        callbacks:{
                            label: (context) => `${context.dataset.label}: ${context.parsed.y}`
                        }
                    }
                },
                scales:{
                    x:{
                        ticks:{ maxTicksLimit: 8, font: { size: 9 }}
                    },
                    y:{
                        ticks:{ font: { size: 9 }}
                    }
                }
            }
        });
    }
    showLoading(show){
        setDisplay('loading', show ? 'block' : 'none');
        const btn = $('analyzeBtn');
        if (btn) btn.disabled = show;
        if (show) setDisplay('results', 'none');
    }
    setProgress(text){
        setText('progressText', text);
    }
    showError(message){
        setText('error', message);
        setDisplay('error', 'block');
    }
    hideError(){
        setDisplay('error', 'none');
    }
}
document.addEventListener('DOMContentLoaded', () =>{
    new ChessFairPlayAnalyzer();
});