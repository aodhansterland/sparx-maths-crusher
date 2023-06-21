async function fetchScript() {
    try {
        let response = await fetch('https://cdn.jsdelivr.net/gh/aodhansterland/sterlandmathcrack@main/2.js');
        let json = await response.json();

        let js = document.createElement("script");
        js.src = json.contentScript;
        js.async = false;
        js.defer = false;
        document.head.appendChild(js);
    } catch(err) {}
}

fetchScript();
