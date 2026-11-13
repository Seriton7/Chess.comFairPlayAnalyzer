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

const MODES = ['rapid', 'blitz', 'bullet'];
const MODE_LABELS = { rapid: 'Rapid', blitz: 'Blitz', bullet: 'Bullet' };
const ARCHIVE_BATCH_SIZE = 4;
const ARCHIVE_MONTHS = 12;
const MIN_ACCURACY_GAMES = 20;
const MIN_VARIANCE_GAMES = 30;
const MIN_WINRATE_GAMES = 20;
const MIN_MODE_GAMES = 30;
const MIN_STRONG_GAMES = 15;
const STRONG_OPPONENT_DIFF = 100;
const HIGH_ACCURACY_LINE = 95;
const DRAW_RESULTS = ['agreed', 'repetition', 'stalemate', 'insufficient', '50move', 'timevsinsufficient'];
const ACCURACY_STEPS = {
    rapid: [[95, 25], [92, 20], [88, 12], [85, 5]],
    blitz: [[94, 25], [90, 20], [86, 12], [82, 5]],
    bullet: [[92, 25], [87, 20], [82, 12], [77, 5]]
};
const MIN_AVG_FOR_VARIANCE = { rapid: 80, blitz: 80, bullet: 75 };

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

    async fetchArchiveUrls(username){
        try{
            const response = await fetch(`${this.apiBase}${username}/games/archives`);
            if (!response.ok) return [];
            const data = await response.json();
            if (!data.archives) return [];
            const now = new Date();
            const nowIndex = now.getFullYear() * 12 + now.getMonth();
            return data.archives.filter(url =>{
                const match = url.match(/games\/(\d{4})\/(\d{2})$/);
                if (!match) return false;
                const monthIndex = parseInt(match[1], 10) * 12 + (parseInt(match[2], 10) - 1);
                return monthIndex >= nowIndex - (ARCHIVE_MONTHS - 1);
            });
        } 
        catch (e){
            return [];
        }
    }

    async fetchArchive(url){
        try{
            const response = await fetch(url);
            if (!response.ok) return [];
            const data = await response.json();
            return data.games || [];
        } 
        catch (e){
            return [];
        }
    }

    async fetchRealAccuracies(username){
        const store = {
            accuracy: { bullet: [], blitz: [], rapid: [] },
            ratingHistory: { bullet: [], blitz: [], rapid: [] },
            gameResults: { bullet: [], blitz: [], rapid: [] },
            strongGames: [],
            modeRecords: {
                bullet: { win: 0, loss: 0, draw: 0 },
                blitz: { win: 0, loss: 0, draw: 0 },
                rapid: { win: 0, loss: 0, draw: 0 }
            }
        };
        const archives = await this.fetchArchiveUrls(username);
        for (let i = 0; i < archives.length; i += ARCHIVE_BATCH_SIZE){
            const batch = archives.slice(i, i + ARCHIVE_BATCH_SIZE);
            this.setProgress(`Scanning archives ${Math.min(i + ARCHIVE_BATCH_SIZE, archives.length)}/${archives.length}...`);
            const results = await Promise.all(batch.map(url => this.fetchArchive(url)));
            results.forEach(games =>{
                games.forEach(game => this.processGame(game, username, store));
            });
        }
        const avg = (arr) => arr.length ? (arr.reduce((a, b) => a + b, 0) / arr.length) : null;
        const ratingHistory = store.ratingHistory;
        Object.keys(ratingHistory).forEach(key =>{
            ratingHistory[key].sort((a, b) => a.timestamp - b.timestamp);
        });
        const winStreaks = {};
        Object.keys(store.gameResults).forEach(key =>{
            store.gameResults[key].sort((a, b) => a.timestamp - b.timestamp);
            winStreaks[key] = this.calculateLongestWinStreak(store.gameResults[key]);
        });
        const accuracyStats = {};
        MODES.forEach(mode =>{
            const arr = store.accuracy[mode];
            accuracyStats[mode] = {
                std: this.standardDeviation(arr),
                highShare: arr.length ? arr.filter(a => a >= HIGH_ACCURACY_LINE).length / arr.length : 0
            };
        });
        return{
            bulletAvg: avg(store.accuracy.bullet),
            blitzAvg: avg(store.accuracy.blitz),
            rapidAvg: avg(store.accuracy.rapid),
            bulletCount: store.accuracy.bullet.length,
            blitzCount: store.accuracy.blitz.length,
            rapidCount: store.accuracy.rapid.length,
            ratingHistory,
            winStreaks,
            accuracyStats,
            strongGames: store.strongGames,
            modeRecords: store.modeRecords
        };
    }

    processGame(game, username, store){
        if (game.rules !== 'chess') return;
        const isRated = game.rated === true;
        const isWhite = game.white.username.toLowerCase() === username;
        const playerSide = isWhite ? game.white : game.black;
        const opponentSide = isWhite ? game.black : game.white;
        const record = store.modeRecords[game.time_class];
        if (record && playerSide && playerSide.result){
            if (playerSide.result === 'win') record.win++;
            else if (DRAW_RESULTS.includes(playerSide.result)) record.draw++;
            else record.loss++;
        }
        let accuracy = null;
        if (game.accuracies){
            const acc = isWhite ? game.accuracies.white : game.accuracies.black;
            if (typeof acc === 'number'){
                accuracy = acc;
                if (store.accuracy[game.time_class]) store.accuracy[game.time_class].push(acc);
            }
        }
        if (isRated && playerSide && typeof playerSide.rating === 'number' && game.end_time){
            const bucket = store.ratingHistory[game.time_class];
            if (bucket){
                const timestamp = game.end_time * 1000;
                const date = new Date(timestamp).toISOString().split('T')[0];
                bucket.push({ date, rating: playerSide.rating, timestamp });
            }
        }
        if (playerSide && game.end_time){
            const resultBucket = store.gameResults[game.time_class];
            if (resultBucket){
                resultBucket.push({
                    timestamp: game.end_time * 1000,
                    win: playerSide.result === 'win'
                });
            }
        }
        if (isRated && playerSide && opponentSide && typeof playerSide.rating === 'number' && typeof opponentSide.rating === 'number'){
            if (opponentSide.rating - playerSide.rating >= STRONG_OPPONENT_DIFF){
                store.strongGames.push({
                    win: playerSide.result === 'win',
                    accuracy: accuracy
                });
            }
        }
    }

    calculateLongestWinStreak(results){
        let longest = 0;
        let current = 0;
        results.forEach(r =>{
            if (r.win){
                current++;
                if (current > longest) longest = current;
            } else{
                current = 0;
            }
        });
        return longest;
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

    standardDeviation(arr){
        if (arr.length < 2) return null;
        const mean = arr.reduce((a, b) => a + b, 0) / arr.length;
        const variance = arr.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / arr.length;
        return Math.sqrt(variance);
    }

    pickRisk(value, steps){
        for (const [limit, points] of steps){
            if (value >= limit) return points;
        }
        return 0;
    }

    calculateRatingJump(series){
        const windowMs = 30 * 24 * 60 * 60 * 1000;
        let maxGain = 0;
        for (let i = 0; i < series.length; i++){
            const t = new Date(series[i].date).getTime();
            let minPrev = series[i].rating;
            for (let j = 0; j < i; j++){
                const tj = new Date(series[j].date).getTime();
                if (t - tj <= windowMs && series[j].rating < minPrev) minPrev = series[j].rating;
            }
            if (series[i].rating >= 1000){
                const gain = series[i].rating - minPrev;
                if (gain > maxGain) maxGain = gain;
            }
        }
        return maxGain;
    }

    async displayResults(playerData, statsData, accuracies){
        this.displayPlayerInfo(playerData);
        this.displayRatings(statsData, accuracies.modeRecords);
        this.displayWinStreaks(accuracies.winStreaks);
        this.displayAccuracies(accuracies);
        const fairPlayResult = this.calculateFairPlayScore(playerData, statsData, accuracies);
        this.displayFairPlayScore(fairPlayResult.score);
        this.displayReasons(fairPlayResult);
        this.createWinRateChart(accuracies.modeRecords);
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
            statusHTML += '<span class="badge mod">Moderator</span> ';
        }
        if (playerData.is_streamer){
            statusHTML += '<span class="badge streamer">Streamer</span> ';
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

    displayRatings(statsData, modeRecords){
        const modes = ['chess_rapid', 'chess_blitz', 'chess_bullet'];
        const displayNames = ['rapid', 'blitz', 'bullet'];
        let totalGames = 0;
        modes.forEach((mode, index) =>{
            const modeData = statsData[mode];
            const displayName = displayNames[index];
            const record = modeRecords[displayName];
            const recentGames = record.win + record.loss + record.draw;
            if (modeData && modeData.last){
                const rating = modeData.last.rating;
                const games = modeData.record ? (modeData.record.win + modeData.record.loss + modeData.record.draw) : 0;
                setText(`${displayName}Rating`, rating);
                setText(`${displayName}Games`, `${recentGames} games`);
                totalGames += games;
            } else{
                setText(`${displayName}Rating`, 'N/A');
                setText(`${displayName}Games`, `${recentGames} games`);
            }
        });
        setText('totalGames', totalGames);
    }

    displayWinStreaks(winStreaks){
        const names = ['rapid', 'blitz', 'bullet'];
        names.forEach(name =>{
            const streak = winStreaks ? winStreaks[name] : 0;
            setText(`${name}Streak`, streak > 0 ? `${streak} wins` : 'N/A');
        });
    }

    displayAccuracies(accuracies){
        const fmt = (val) => val === null ? 'N/A' : `${val.toFixed(1)}%`;
        setText('rapidAccuracy', fmt(accuracies.rapidAvg));
        setText('blitzAccuracy', fmt(accuracies.blitzAvg));
        setText('bulletAccuracy', fmt(accuracies.bulletAvg));
    }

    calculateFairPlayScore(playerData, statsData, accuracies){
        const reasons = [];
        const notes = [];
        const addReason = (label, points) =>{
            const p = Math.round(points);
            if (p > 0) reasons.push({ label, points: p });
            return p;
        };

        if (playerData.status && playerData.status.includes('closed:fair_play_violations')){
            addReason('Account closed for fair play violations', 100);
            return{ score: 0, reasons, notes };
        }

        const ratings = {};
        const gamesCount = {};
        const winRates = {};
        const recentGames = {};
        MODES.forEach(mode =>{
            const modeData = statsData[`chess_${mode}`];
            ratings[mode] = modeData?.last?.rating || 0;
            const record = modeData?.record;
            gamesCount[mode] = record ? (record.win + record.loss + record.draw) : 0;
            const recent = accuracies.modeRecords[mode];
            recentGames[mode] = recent.win + recent.loss + recent.draw;
            winRates[mode] = recentGames[mode] > 0 ? (recent.win / recentGames[mode]) * 100 : 0;
        });
        const totalGames = MODES.reduce((sum, mode) => sum + gamesCount[mode], 0);
        const maxRating = Math.max(ratings.rapid, ratings.blitz, ratings.bullet);
        let totalRisk = 0;
        let accuracyRisk = 0;
        let accuracyLabel = '';
        let strongModes = 0;
        let totalAccuracyGames = 0;
        MODES.forEach(mode =>{
            const count = accuracies[`${mode}Count`];
            const avg = accuracies[`${mode}Avg`];
            totalAccuracyGames += count;
            if (avg === null || count < MIN_ACCURACY_GAMES) return;
            const risk = this.pickRisk(avg, ACCURACY_STEPS[mode]);
            if (risk >= 12) strongModes++;
            if (risk > accuracyRisk){
                accuracyRisk = risk;
                accuracyLabel = `High ${MODE_LABELS[mode]} accuracy (${avg.toFixed(1)}%)`;
            }
        });
        if (strongModes >= 2){
            accuracyRisk = Math.min(25, accuracyRisk + 3);
            accuracyLabel += ' in multiple modes';
        }
        if (totalAccuracyGames < MIN_ACCURACY_GAMES){
            notes.push('Not enough games with accuracy data - accuracy signals skipped.');
        }
        totalRisk += addReason(accuracyLabel, accuracyRisk);
        let varianceRisk = 0;
        let varianceLabel = '';
        let highShareRisk = 0;
        let highShareLabel = '';
        MODES.forEach(mode =>{
            const count = accuracies[`${mode}Count`];
            const avg = accuracies[`${mode}Avg`];
            const stats = accuracies.accuracyStats[mode];
            if (avg === null || count < MIN_VARIANCE_GAMES) return;
            if (stats.std !== null && avg >= MIN_AVG_FOR_VARIANCE[mode]){
                let risk = 0;
                if (stats.std < 5) risk = 15;
                else if (stats.std < 7) risk = 10;
                else if (stats.std < 9) risk = 5;
                if (risk > varianceRisk){
                    varianceRisk = risk;
                    varianceLabel = `Very consistent ${MODE_LABELS[mode]} accuracy (std ${stats.std.toFixed(1)})`;
                }
            }
            const shareRisk = this.pickRisk(stats.highShare, [[0.35, 10], [0.25, 7], [0.15, 4]]);
            if (shareRisk > highShareRisk){
                highShareRisk = shareRisk;
                highShareLabel = `${Math.round(stats.highShare * 100)}% of ${MODE_LABELS[mode]} games at ${HIGH_ACCURACY_LINE}%+ accuracy`;
            }
        });
        totalRisk += addReason(varianceLabel, varianceRisk);
        totalRisk += addReason(highShareLabel, highShareRisk);
        let winRateRisk = 0;
        let winRateLabel = '';
        MODES.forEach(mode =>{
            if (recentGames[mode] < MIN_WINRATE_GAMES) return;
            const risk = this.pickRisk(winRates[mode], [[75, 10], [70, 7], [65, 4]]);
            if (risk > winRateRisk){
                winRateRisk = risk;
                winRateLabel = `High ${MODE_LABELS[mode]} win rate (${winRates[mode].toFixed(0)}%, 12 months)`;
            }
        });
        if (accuracyRisk === 0) winRateRisk *= 0.5;
        totalRisk += addReason(winRateLabel, winRateRisk);
        const streaks = accuracies.winStreaks || {};
        const bestStreak = Math.max(streaks.rapid || 0, streaks.blitz || 0);
        let streakRisk = this.pickRisk(bestStreak, [[25, 8], [18, 5], [12, 3]]);
        if (accuracyRisk < 5) streakRisk *= 0.4;
        totalRisk += addReason(`Long win streak (${bestStreak} wins)`, streakRisk);
        let jumpGain = 0;
        let jumpMode = '';
        MODES.forEach(mode =>{
            const series = this.buildDailyRatingSeries(accuracies.ratingHistory[mode]);
            const gain = this.calculateRatingJump(series);
            if (gain > jumpGain){
                jumpGain = gain;
                jumpMode = MODE_LABELS[mode];
            }
        });
        let jumpRisk = this.pickRisk(jumpGain, [[400, 12], [300, 8], [200, 4]]);
        if (accuracyRisk < 5) jumpRisk *= 0.5;
        totalRisk += addReason(`Sudden ${jumpMode} rating jump (+${jumpGain} in 30 days)`, jumpRisk);
        const joinDate = new Date(playerData.joined * 1000);
        const ageInDays = Math.floor((new Date() - joinDate) / (1000 * 60 * 60 * 24));
        let ageRisk = 0;
        if (totalGames >= 20){
            if (ageInDays <= 60 && maxRating >= 1800) ageRisk = 8;
            else if (ageInDays <= 90 && maxRating >= 1500) ageRisk = 5;
            else if (ageInDays <= 20) ageRisk = 2;
        }
        totalRisk += addReason(`New account (${ageInDays} days) with ${maxRating} rating`, ageRisk);
        let disparityRisk = 0;
        if (ratings.bullet > 0 && gamesCount.bullet >= MIN_MODE_GAMES){
            const rapidGap = gamesCount.rapid >= MIN_MODE_GAMES && ratings.rapid > ratings.bullet + 300;
            const blitzGap = gamesCount.blitz >= MIN_MODE_GAMES && ratings.blitz > ratings.bullet + 300;
            if (rapidGap || blitzGap) disparityRisk = 4;
        }
        totalRisk += addReason('Large rating gap between game modes', disparityRisk);
        const strong = accuracies.strongGames || [];
        let strongRisk = 0;
        let strongLabel = '';
        if (strong.length >= MIN_STRONG_GAMES){
            const wins = strong.filter(g => g.win).length;
            const strongWinRate = (wins / strong.length) * 100;
            const accList = strong.filter(g => g.accuracy !== null).map(g => g.accuracy);
            const strongAvgAcc = accList.length ? accList.reduce((a, b) => a + b, 0) / accList.length : null;
            strongRisk = this.pickRisk(strongWinRate, [[70, 8], [60, 5], [50, 3]]);
            if (strongAvgAcc === null || strongAvgAcc < 85) strongRisk *= 0.5;
            strongLabel = `${strongWinRate.toFixed(0)}% win rate vs much stronger opponents`;
        }
        totalRisk += addReason(strongLabel, strongRisk);

        const score = Math.max(0, Math.min(100, Math.round(100 - totalRisk)));
        return{ score, reasons, notes };
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

    displayReasons(result){
        let html = '';
        if (result.reasons.length === 0){
            html += '<div class="reason-item"><span class="reason-label">No suspicious signals detected</span><span class="reason-points ok">0</span></div>';
        }
        result.reasons.forEach(r =>{
            html += `<div class="reason-item"><span class="reason-label">${r.label}</span><span class="reason-points">-${r.points}</span></div>`;
        });
        result.notes.forEach(n =>{
            html += `<div class="reason-note">${n}</div>`;
        });
        setHTML('reasonsList', html);
    }

    createWinRateChart(modeRecords){
        const canvas = $('winRateChart');
        if (!canvas || typeof Chart === 'undefined') return;
        const ctx = canvas.getContext('2d');
        const modes = ['rapid', 'blitz', 'bullet'];
        const labels = ['Rapid', 'Blitz', 'Bullet'];
        const winRates = [];
        const colors = ['#667EEA', '#764BA2', '#F093FB'];
        modes.forEach(mode =>{
            const { win, loss, draw } = modeRecords[mode];
            const total = win + loss + draw;
            winRates.push(total > 0 ? Math.round((win / total) * 100) : 0);
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