window.PXH_UTILS = {
    extractContents: async (text) => {
        const PATTERN = {
            html: /pxh\[html\]:\s*([\s\S]*?)(?=pxh\[|$)/,
            css: /pxh\[css\]:\s*([\s\S]*?)(?=pxh\[|$)/,
            js: /pxh\[js\]:\s*([\s\S]*?)(?=pxh\[|$)/,
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
