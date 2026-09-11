// script.js

function loadSpcTab(tab) {
    const container = document.getElementById('spcContentWindow');
    
    if(tab === 'spc') {
        container.innerHTML = typeof SPC_OUTLOOK_CONTENT !== 'undefined' ? SPC_OUTLOOK_CONTENT : "<p class='text-red-400'>Error loading SPC data.</p>";
    } else if(tab === 'nws') {
        container.innerHTML = typeof NWS_FORECAST_CONTENT !== 'undefined' ? NWS_FORECAST_CONTENT : "<p class='text-red-400'>Error loading NWS data.</p>";
    } else if(tab === 'glossary') {
        container.innerHTML = typeof GLOSSARY_CONTENT !== 'undefined' ? GLOSSARY_CONTENT : "<p class='text-red-400'>Error loading Glossary.</p>";
    } else if(tab === 'history') {
        container.innerHTML = typeof HISTORY_CONTENT !== 'undefined' ? HISTORY_CONTENT : "<p class='text-red-400'>Error loading History.</p>";
    } else if(tab === 'radar') {
        container.innerHTML = `
            <div class="space-y-4 text-sm text-slate-100">
                <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
                    <h4 class="text-base font-bold text-blue-400 mb-2"><i class="fa-solid fa-satellite mr-2"></i> Live Regional Radar Loop</h4>
                    <p class="text-xs text-slate-300 mb-4">Embedded live composite radar imagery showcasing real-time convective precipitation and echo returns.</p>
                    <div class="w-full h-80 rounded-lg overflow-hidden border border-slate-800 bg-slate-900 flex items-center justify-center">
                        <iframe src="https://radar.weather.gov/" class="w-full h-full border-0 opacity-90 hover:opacity-100 transition-opacity" title="NOAA Live Radar"></iframe>
                    </div>
                </div>
            </div>
        `;
    } else if(tab === 'alerts') {
        container.innerHTML = `
            <div class="space-y-4 text-sm text-slate-100">
                <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3">
                    <h4 class="text-base font-bold text-blue-400"><i class="fa-solid fa-triangle-exclamation mr-2"></i> Active NWS Severe Weather Feed</h4>
                    <p class="text-xs text-slate-300">Live active weather alerts pulled straight from the public National Weather Service API feed (<code class="text-blue-300">api.weather.gov/alerts/active</code>).</p>
                    <div id="nwsAlertsFeed" class="space-y-2 mt-3 max-h-72 overflow-y-auto pr-1">
                        <p class="text-xs text-slate-400 animate-pulse">Fetching active public alerts from NWS servers...</p>
                    </div>
                </div>
            </div>
        `;
        fetchNwsAlerts();
    }
}

async function fetchNwsAlerts() {
    try {
        let response = await fetch('https://api.weather.gov/alerts/active?limit=5');
        let data = await response.json();
        let feedContainer = document.getElementById('nwsAlertsFeed');
        
        if(data && data.features && data.features.length > 0) {
            feedContainer.innerHTML = data.features.map(alert => `
                <div class="bg-slate-900 border border-slate-800 rounded p-3 text-xs space-y-1">
                    <span class="font-bold text-red-400">${alert.properties.event}</span>
                    <p class="text-slate-300 truncate">${alert.properties.headline || alert.properties.description}</p>
                    <span class="text-[10px] text-slate-500 block">Area: ${alert.properties.areaDesc}</span>
                </div>
            `).join('');
        } else {
            feedContainer.innerHTML = '<p class="text-xs text-slate-400">No active alerts currently found.</p>';
        }
    } catch (e) {
        document.getElementById('nwsAlertsFeed').innerHTML = '<p class="text-xs text-red-400">Failed to establish connection with api.weather.gov endpoint.</p>';
    }
}

function toggleAppTheme() {
    document.body.classList.toggle('bg-slate-950');
    document.body.classList.toggle('bg-slate-100');
}

// Run initialization at the very bottom
renderEncyclopedia();
