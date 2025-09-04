window.PXH_UTILS = {
    extractContents: async (text) => {
        const PATTERN = {
            html: /pxh\[làm\.giao\.diện\]:\s*([\s\S]*?)(?=pxh\[|$)/,
            css: /pxh\[làm\.đẹp\]:\s*([\s\S]*?)(?=pxh\[|$)/,
            js: /pxh\[làm\.hệ\.thống\]:\s*([\s\S]*?)(?=pxh\[|$)/,
        };

        return {
            pxh: {
                html: await text.match(PATTERN.html)[1],
                css: await text.match(PATTERN.css)[1],
                js: await text.match(PATTERN.js)[1],
            },
        };
    },

    mappingHTMLs: async (text) => {
        const PATTERN = {
            "đoạn_văn:": "<p>$1</p>",
        };
    },
};
