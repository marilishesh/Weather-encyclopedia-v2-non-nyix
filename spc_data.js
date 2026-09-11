const SPC_OUTLOOK_CONTENT = `
    <div class="space-y-6 text-sm text-slate-100">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
            <h4 class="text-base font-bold text-blue-400"><i class="fa-solid fa-tornado mr-2"></i> How the Storm Prediction Center (SPC) Generates Convective Outlooks</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
                Operating out of Norman, Oklahoma, the NOAA/NWS Storm Prediction Center issues real-time severe weather outlooks across eight continuous days. Forecasters synthesize macro-scale numerical predictions with high-frequency mesoscale observations to assess severe potential across four primary hazards: tornadoes, damaging straight-line winds, large hail, and combined severe threats.
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
                    <li><strong>High (5):</strong> Extensive, severe weather outbreak with high certainty of catastrophic destruction.</li>
                </ul>
            </div>

            <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4">
                <span class="text-xs font-semibold px-2.5 py-1 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">Step 3: Probabilistic Thresholds</span>
                <h5 class="font-bold text-white">Spatial Hazard Percentages</h5>
                <p class="text-xs text-slate-300 leading-relaxed">
                    Hazard specific probabilities represent the chance of a severe event occurring within 25 miles of any given point:
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
                    When environmental conditions fluctuate rapidly between standard synoptic outlook release windows, SPC forecasters issue MDs and watches to brief local emergency managers and the public on imminent watch issuance.
                </p>
                <div class="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
                    <img src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?q=80&w=600&auto=format&fit=crop" alt="Severe Convective Storm Development" class="w-full h-32 object-cover opacity-80 hover:opacity-100 transition-opacity">
                    <p class="p-2 text-[10px] text-slate-400 italic">Example: Supercell convective initiation monitored via real-time radar and satellite data.</p>
                </div>
            </div>
        </div>
    </div>
`;
