(function () {
    const jsStatus = document.getElementById("js-status");
    const timestamp = document.getElementById("timestamp");

    if (jsStatus) {
        jsStatus.textContent = "Loaded";
        jsStatus.style.color = "#22c55e";
    }

    if (timestamp) {
        const now = new Date();
        timestamp.textContent = `Page served at ${now.toLocaleString()}`;
    }

    console.log("Nginx static JS loaded successfully");
})();
