// weather_data.js - Combined Data File (SPC, NWS, Glossary, and Historical Outbreaks)

const SPC_OUTLOOK_CONTENT = `
    <div class="space-y-6 text-sm text-slate-100">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 shadow-lg">
            <h4 class="text-base font-bold text-blue-400"><i class="fa-solid fa-tornado mr-2"></i> How the Storm Prediction Center (SPC) Generates Convective Outlooks</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
                Operating out of Norman, Oklahoma, the NOAA/NWS Storm Prediction Center issues real-time severe weather outlooks across eight continuous days. Forecasters synthesize macro-scale numerical predictions with high-frequency mesoscale observations to assess severe potential across primary convective hazards: tornadoes, damaging straight-line winds, and large hail.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Step 1: Data & Sounding Analysis</span>
                <h5 class="font-bold text-white">Thermodynamic & Kinematic Profiling</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Forecasters examine morning radiosonde launches and high-resolution model soundings. Key parameters quantified include <strong>Convective Available Potential Energy (CAPE)</strong> for buoyancy, <strong>Convective Inhibition (CIN)</strong> for capping inversion strength, and <strong>0-6km Bulk Wind Shear</strong> plotted on hodographs to determine storm organization potential.
                </p>
                <div class="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                    <img src="https://images.unsplash.com/photo-1527482797697-8795b05813fe?q=80&w=600&auto=format&fit=crop" alt="Atmospheric Sounding and Analysis" class="w-full h-32 object-cover opacity-80 hover:opacity-100 transition-opacity">
                    <p class="p-2 text-[10px] text-slate-400 italic">Example: Upper-air analysis profiles and hodograph geometry evaluation.</p>
                </div>
            </div>

            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Step 2: Risk Categorization</span>
                <h5 class="font-bold text-white">Standardized Risk Levels (1 through 5)</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Outlooks map risk tiers based on spatial coverage and event severity:
                </p>
                <ul class="text-xs text-slate-300 space-y-1.5 list-disc pl-4">
                    <li><strong>Marginal (1):</strong> Isolated severe storms; limited duration/intensity.</li>
                    <li><strong>Slight (2):</strong> Scattered short-lived severe storms; isolated intense events.</li>
                    <li><strong>Enhanced (3):</strong> Numerous severe storms; several persistent or intense.</li>
                    <li><strong>Moderate (4):</strong> Widespread severe storms; numerous intense/long-lived events.</li>
                    <li><strong>High (5):</strong> Extensive severe weather outbreak with high certainty of destructive impacts.</li>
                </ul>
            </div>

            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Step 3: Probabilistic Thresholds & CIG Updates</span>
                <h5 class="font-bold text-white">Spatial Hazard Percentages & Intensity Groups</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Hazard probabilities represent the chance of a severe event occurring within 25 miles of any given point. Updates incorporate <strong>Conditional Intensity Groups (CIG)</strong> to better profile conditional storm severity.
                </p>
                <div class="grid grid-cols-3 gap-2 text-center text-xs">
                    <div class="bg-slate-900 p-2 rounded border border-slate-800">
                        <span class="block font-bold text-blue-400">2% / 5%</span>
                        <span class="text-[10px] text-slate-400">Tornado Thresholds</span>
                    </div>
                    <div class="bg-slate-900 p-2 rounded border border-slate-800">
                        <span class="block font-bold text-blue-400">15%</span>
                        <span class="text-[10px] text-slate-400">Significant Severe Cutoff</span>
                    </div>
                    <div class="bg-slate-900 p-2 rounded border border-slate-800">
                        <span class="block font-bold text-blue-400">30% +</span>
                        <span class="text-[10px] text-slate-400">Widespread Threat Zone</span>
                    </div>
                </div>
            </div>

            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Step 4: Mesoscale Discussions (MDs)</span>
                <h5 class="font-bold text-white">Short-Term Tactical Updates</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    When environmental conditions fluctuate rapidly between standard synoptic outlook release windows, SPC forecasters issue MDs and watches to brief local emergency managers.
                </p>
                <div class="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                    <img src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=600&auto=format&fit=crop" alt="Severe Convective Storm Development" class="w-full h-32 object-cover opacity-80 hover:opacity-100 transition-opacity">
                    <p class="p-2 text-[10px] text-slate-400 italic">Example: Supercell convective initiation monitored via real-time data.</p>
                </div>
            </div>
        </div>

        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 space-y-1">
            <p class="font-semibold text-slate-300">Data Sources & References:</p>
            <ul class="list-disc pl-4 space-y-0.5">
                <li>NOAA / National Weather Service Storm Prediction Center (SPC) Convective Outlook Operations.</li>
                <li>SPC Technical Framework on Conditional Intensity Groups (CIG) and Probability-to-Category Conversions.</li>
                <li>NWS Directives Series 10-16 on Severe Weather Watch and Outlook Products.</li>
            </ul>
        </div>
    </div>
`;

const NWS_FORECAST_CONTENT = `
    <div class="space-y-6 text-sm text-slate-100">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 shadow-lg">
            <h4 class="text-base font-bold text-blue-400"><i class="fa-solid fa-cloud-sun-rain mr-2"></i> How the National Weather Service (NWS) Issues Routine Forecasts</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
                Local Weather Forecast Offices (WFOs) monitor regional conditions 24/7, synthesizing massive data streams from supercomputers, satellites, surface networks, and upper-air soundings to generate localized public, aviation, and marine forecasts. 
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Data Stream 1</span>
                <h5 class="font-bold text-white">Observational Networks (ASOS & Radars)</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    The NWS relies heavily on <strong>Automated Surface Observing Systems (ASOS)</strong> deployed at over 900 airports nationwide to continuously report weather parameters every minute. This is paired with the 159-tower <strong>NEXRAD Doppler Radar</strong> network.
                </p>
                <div class="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                    <img src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=600&auto=format&fit=crop" alt="ASOS and Surface Weather Station Network" class="w-full h-32 object-cover opacity-80 hover:opacity-100 transition-opacity">
                    <p class="p-2 text-[10px] text-slate-400 italic">Example: Surface weather observation equipment tracking real-time meteorological shifts.</p>
                </div>
            </div>

            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Data Stream 2</span>
                <h5 class="font-bold text-white">Upper-Air Weather Balloons (Radiosondes)</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Twice daily, NWS stations launch weather balloons carrying instrument packages called <strong>radiosondes</strong>. Floating up to the stratosphere, they profile vertical changes in pressure, temperature, humidity, and wind velocity.
                </p>
            </div>

            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Processing Core</span>
                <h5 class="font-bold text-white">Supercomputers & Numerical Models</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Data ingestion happens via NOAA’s Weather and Climate Operational Supercomputer System (WCOSS), feeding global and regional models (such as the GFS and high-resolution HRRR) to output baseline computer model guidance.
                </p>
            </div>

            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Final Synthesis</span>
                <h5 class="font-bold text-white">AWIPS & Human Forecaster Editing</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Forecasters use the <strong>Advanced Weather Interactive Processing System (AWIPS)</strong> graphical interface to overlay model physics with localized human experience, editing grids to finalize public forecasts.
                </p>
                <div class="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                    <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop" alt="Meteorologist workstation analytics" class="w-full h-32 object-cover opacity-80 hover:opacity-100 transition-opacity">
                    <p class="p-2 text-[10px] text-slate-400 italic">Example: Meteorological workstation analyzing digital forecast grids via AWIPS.</p>
                </div>
            </div>
        </div>

        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 text-xs text-slate-400 space-y-1">
            <p class="font-semibold text-slate-300">Data Sources & References:</p>
            <ul class="list-disc pl-4 space-y-0.5">
                <li>NOAA / National Weather Service (NWS) Operations & Services Directives (NWSI 10 series).</li>
                <li>NOAA Story Archives: <em>"6 tools our meteorologists use to forecast the weather"</em> (WCOSS, AWIPS, ASOS, Radiosondes).</li>
            </ul>
        </div>
    </div>
`;

const GLOSSARY_CONTENT = `
    <div class="space-y-6 text-sm text-slate-100">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 shadow-lg">
            <h4 class="text-base font-bold text-blue-400"><i class="fa-solid fa-book mr-2"></i> Meteorological Glossary & Key Terms</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
                Reference guide defining essential atmospheric science terminology used throughout convective outlooks and routine weather forecasts.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                <h5 class="font-bold text-white text-blue-300">CAPE (Convective Available Potential Energy)</h5>
                <p class="text-xs text-slate-300 leading-relaxed">The amount of buoyant energy available to accelerate a parcel of air vertically upwards. Measured in J/kg, higher values indicate greater storm fuel.</p>
            </div>
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                <h5 class="font-bold text-white text-blue-300">CIN (Convective Inhibition)</h5>
                <p class="text-xs text-slate-300 leading-relaxed">A "cap" or layer of warm air aloft that prevents air parcels from rising freely. Must be eroded or overcome for severe thunderstorms to initiate.</p>
            </div>
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                <h5 class="font-bold text-white text-blue-300">Hodograph</h5>
                <p class="text-xs text-slate-300 leading-relaxed">A polar plot charting wind speed and direction at various altitudes, crucial for evaluating rotation and supercell structure potential.</p>
            </div>
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-2">
                <h5 class="font-bold text-white text-blue-300">NEXRAD</h5>
                <p class="text-xs text-slate-300 leading-relaxed">Next-Generation Radar; a nationwide network of 159 high-resolution S-band Doppler weather radars operated by the NWS, DoD, and FAA.</p>
            </div>
        </div>
    </div>
`;

const HISTORY_CONTENT = `
    <div class="space-y-6 text-sm text-slate-100">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3 shadow-lg">
            <h4 class="text-base font-bold text-blue-400"><i class="fa-solid fa-landmark mr-2"></i> Historical Severe Outbreak Case Studies</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
                Examining benchmark meteorological events that transformed modern forecasting architecture, warning protocols, and numerical modeling.
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">April 3–4, 1974</span>
                <h5 class="font-bold text-white">The Super Outbreak</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Produced 148 tornadoes across 13 states in 18 hours, including multiple F5 tornadoes. This landmark event triggered major advancements in radar interpretation patterns (like hook echoes) and lead times.
                </p>
            </div>
            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-red-500/10 text-red-400 border border-red-500/20">April 25–28, 2011</span>
                <h5 class="font-bold text-white">The Super Outbreak</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    The largest, costliest, and one of the deadliest tornado outbreaks in US history, yielding 316 tornadoes. Highlighted the unmatched precision of modern high-resolution ensemble forecasting and days-in-advance SPC risk mapping.
                </p>
            </div>
        </div>
    </div>
`;
