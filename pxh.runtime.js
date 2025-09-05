window.PXH = {
    loadFile: async (file) => {
        const text = await fetch(file).then((res) => res.text());

        const content = await PXH_UTILS.extractContents(text);

        const pxhhtml = content.pxh.html?.trim();
        const pxhcss = content.pxh.css?.trim();
        const pxhjs = content.pxh.js?.trim();

        console.log("text: ", text);
        console.log("pxhhtml: ", pxhhtml);
        console.log("pxhcss: ", pxhcss);
        console.log("pxhjs: ", pxhjs);

        const elements = document.querySelectorAll(`[id^="pxh-"]`);
        elements.forEach((element) => {
            element.remove();
        });

        const id = `pxh-${Date.now()}`;

        if (pxhhtml) {
            const html = document.createElement("div");
            document.body.appendChild(html);
            html.setAttribute("id", id);
            html.innerHTML = pxhhtml;

            if (pxhcss) {
                const css = document.createElement("style");
                css.setAttribute("id", id);
                css.innerHTML = pxhcss;
                document.head.appendChild(css);
            }

            if (pxhjs) {
                const js = document.createElement("script");
                js.setAttribute("id", id);
                js.innerHTML = pxhjs;
                document.head.appendChild(js);
            }
        }
    },
};
