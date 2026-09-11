// weather_data.js
// Combined data container for Aetheris // Master Scientific Edition

const SPC_OUTLOOK_CONTENT = `
    <div class="space-y-4 text-sm text-slate-100">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
            <h4 class="text-base font-bold text-orange-400"><i class="fa-solid fa-fire mr-2"></i> Storm Prediction Center (SPC) Convective Outlooks</h4>
            <p class="text-slate-300 text-xs leading-relaxed">
                Evaluates threats of severe local storms, tornadoes, large hail, and damaging winds across the United States.
            </p>
            <div class="bg-slate-900 p-3 rounded border border-slate-800 text-xs text-slate-300 space-y-1">
                <p>• <strong>Marginal (1/5):</strong> Isolated severe storms possible.</p>
                <p>• <strong>Slight (2/5):</strong> Scattered severe storms varying in intensity.</p>
                <p>• <strong>Enhanced (3/5):</strong> Numerous severe storms, more persistent.</p>
                <p>• <strong>Moderate (4/5):</strong> Widespread severe weather, intense destructive events likely.</p>
                <p>• <strong>High (5/5):</strong> Outbreak of catastrophic severe weather expected.</p>
            </div>
        </div>
    </div>
`;

const NWS_FORECAST_CONTENT = `
    <div class="space-y-4 text-sm text-slate-100">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
            <h4 class="text-base font-bold text-blue-400"><i class="fa-solid fa-cloud-sun-rain mr-2"></i> National Weather Service (NWS) Overview</h4>
            <p class="text-slate-300 text-xs leading-relaxed">
                Provides weather, hydrological, and climate forecasts and warnings for the United States, its territories, and adjacent waters.
            </p>
        </div>
    </div>
`;

const GLOSSARY_CONTENT = `
    <div class="space-y-4 text-sm text-slate-100">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
            <h4 class="text-base font-bold text-amber-400"><i class="fa-solid fa-book mr-2"></i> Master Meteorological Glossary</h4>
            <p class="text-slate-300 text-xs">Quick definitions for core atmospheric terminologies.</p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                <div class="bg-slate-900 p-3 rounded border border-slate-800">
                    <strong class="text-white">Adiabatic Process:</strong> Thermodynamic change without heat transfer to or from the external environment.
                </div>
                <div class="bg-slate-900 p-3 rounded border border-slate-800">
                    <strong class="text-white">Baroclinic:</strong> A state of the atmosphere where surfaces of constant pressure intersect surfaces of constant density.
                </div>
                <div class="bg-slate-900 p-3 rounded border border-slate-800">
                    <strong class="text-white">Mesocyclone:</strong> A vertical column of rotating air within a convective thunderstorm cell.
                </div>
                <div class="bg-slate-900 p-3 rounded border border-slate-800">
                    <strong class="text-white">Squall Line:</strong> A narrow band of active thunderstorms formed along or ahead of a cold front.
                </div>
            </div>
        </div>
    </div>
`;

const HISTORY_CONTENT = `
    <div class="space-y-4 text-sm text-slate-100">
        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3">
            <h4 class="text-base font-bold text-amber-400"><i class="fa-solid fa-landmark mr-2"></i> Meteorological History & Archival Milestones</h4>
            <p class="text-slate-300 text-sm leading-relaxed">
                From Aristotle's <em>Meteorologica</em> in 340 BC to the launch of the first weather satellite (TIROS-1) in 1960, the evolution of atmospheric science relies on continuous technological leaps.
            </p>
            <div class="border-t border-slate-800 pt-3 space-y-2 text-xs text-slate-300">
                <p>• <strong>1643:</strong> Evangelista Torricelli invents the mercury barometer, proving atmospheric pressure exists.</p>
                <p>• <strong>1861:</strong> Robert FitzRoy establishes the first operational storm warning system in the UK.</p>
                <p>• <strong>1920s:</strong> Vilhelm Bjerknes and the Bergen School develop air mass and frontal theory.</p>
                <p>• <strong>1950s:</strong> ENIAC runs the first successful numerical weather prediction computer model.</p>
            </div>
        </div>
    </div>
`;
