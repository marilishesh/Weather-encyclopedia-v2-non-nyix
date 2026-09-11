const NWS_FORECAST_CONTENT = `
    <div class="space-y-6 text-sm text-slate-100">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
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
                    The NWS relies heavily on <strong>Automated Surface Observing Systems (ASOS)</strong> deployed at over 900 airports nationwide to continuously report atmospheric parameters like visibility, ceiling height, wind, and precipitation every minute. This is paired with the 159-tower <strong>NEXRAD Doppler Radar</strong> network to track live precipitation structures and low-level wind rotation.
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
                    Twice daily (and more frequently during severe weather threats), NWS stations launch weather balloons carrying instrument packages called <strong>radiosondes</strong>. Floating up to the stratosphere, they profile vertical changes in pressure, temperature, humidity, and wind velocity to initialize numerical forecasting equations.
                </p>
            </div>

            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Processing Core</span>
                <h5 class="font-bold text-white">Supercomputers & Numerical Models</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Data ingestion happens via NOAA’s Weather and Climate Operational Supercomputer System (WCOSS), feeding raw global and regional models (such as the GFS and high-resolution HRRR) to output baseline computer model guidance.
                </p>
            </div>

            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Final Synthesis</span>
                <h5 class="font-bold text-white">AWIPS & Human Forecaster Editing</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Forecasters use the <strong>Advanced Weather Interactive Processing System (AWIPS)</strong> graphical interface to overlay model physics with localized human experience, editing grids to finalize public forecasts, watches, and warnings.
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
                <li>NWS Observation Systems Documentation & Joint FAA/NOD/DOD ASOS Framework.</li>
            </ul>
        </div>
    </div>
`;
