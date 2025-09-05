window.PXH_UTILS = {
    extractContents: async (text) => {
        const PATTERN = {
            html: /pxh\[html\]:\s*\{([\s\S]*?)\}(?=\s*pxh\[|\s*$)/,
            css: /pxh\[css\]:\s*\{([\s\S]*?)\}(?=\s*pxh\[|\s*$)/,
            js: /pxh\[js\]:\s*\{([\s\S]*?)\}(?=\s*pxh\[|\s*$)/,
        };

        return {
            pxh: {
                html: await text.match(PATTERN.html)[1],
                css: await text.match(PATTERN.css)[1],
                js: await text.match(PATTERN.js)[1],
            },
        };
    },
};
