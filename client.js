document.getElementById("insertData").addEventListener("click", () => {
    fetch("https://lionfish-app-unhlm.ondigitalocean.app", { 
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `INSERT INTO patient (patientid, name, dateOfBirth) VALUES 
                (4, 'Sara Brown', '1901-01-01'),
                (5, 'John Smith', '1941-01-01'),
                (6, 'Jack Ma', '1961-01-30'),
                (7, 'Elon Musk', '1999-01-01')`
        })
    })
    .then(res => res.json())
    .then(data => {
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => console.error("❌ Error:", error));
});

document.getElementById("sendQuery").addEventListener("click", () => {
    const query = document.getElementById("queryInput").value;
    const method = query.trim().toUpperCase().startsWith("SELECT") ? "GET" : "POST";
    fetch(`https://lionfish-app-unhlm.ondigitalocean.app?query=${encodeURIComponent(query)}`, { method })
        .then(res => res.json())
        .then(data => {
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        });
});