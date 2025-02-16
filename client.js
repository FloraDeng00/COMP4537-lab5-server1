document.getElementById("insertData").addEventListener("click", () => {
    fetch("https://lionfish-app-unhlm.ondigitalocean.app", { // Updated Server 2 URL
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            patients: [
                { name: "Sara Brown", dateOfBirth: "1901-01-01" },
                { name: "John Smith", dateOfBirth: "1941-01-01" },
                { name: "Jack Ma", dateOfBirth: "1961-01-30" },
                { name: "Elon Musk", dateOfBirth: "1999-01-01" }
            ]
        })
    }).then(res => res.json()).then(data => document.getElementById("output").textContent = JSON.stringify(data, null, 2));
});

document.getElementById("sendQuery").addEventListener("click", () => {
    const query = document.getElementById("queryInput").value;
    const method = query.trim().toUpperCase().startsWith("SELECT") ? "GET" : "POST";
    fetch(`https://lionfish-app-unhlm.ondigitalocean.app?query=${encodeURIComponent(query)}`, { method })
        .then(res => res.json())
        .then(data => document.getElementById("output").textContent = JSON.stringify(data, null, 2));
});