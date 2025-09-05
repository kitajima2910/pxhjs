const FILE_JS = ["./pxh.utils.js", "./pxh.runtime.js"];

const loadScript = async (src) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false;
    document.head.appendChild(script);
};

const loadScriptsSequentially = async () => {
    for (const src of FILE_JS) {
        try {
            await loadScript(src);
            // console.log(`Loaded script: ${src}`);
        } catch (error) {
            console.error(error);
        }
    }

    // console.log("All scripts loaded");
};

loadScriptsSequentially();
