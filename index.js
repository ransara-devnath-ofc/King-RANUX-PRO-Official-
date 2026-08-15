// --- START OF FILE index.js ---

import { startRanuxEngine } from 'ranux-pro';
import config from './config.js';

console.log("🚀 Booting King RANUX PRO Public Loader...");

// Pass the user configuration to the encrypted NPM engine
startRanuxEngine(config).catch(err => {
    console.error("❌ Fatal Error during boot:", err.message);
});

// --- END OF FILE index.js ---