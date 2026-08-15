// --- START OF FILE config.js ---

import dotenv from 'dotenv';
dotenv.config();

export default {
    // 🔑 Session ID එක මෙතන දාන්න (Ex: "Ranux-Pro~xxxx")
    // (නැත්නම් මේක හිස්ව තියලා Heroku/Koyeb Environment Variables වලින් දාන්නත් පුළුවන්)
    SESSION_ID: process.env.SESSION_ID || "",

    // ⚙️ Bot ගේ Prefix එක (Ex: "." , "!" , "#")
    PREFIX: process.env.PREFIX || ".",

    // 🛡️ Bot ගේ Work Mode එක ("public", "private", "inbox", "group")
    MODE: process.env.MODE || "public",

    // 👤 ඔයාගේ Phone Number එක '+' නැතුව දාන්න (Ex: "94712345678")
    BOT_OWNER: process.env.BOT_OWNER || ""
};

// --- END OF FILE config.js ---