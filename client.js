document.getElementById("insertData").addEventListener("click", () => {
    fetch("https://lionfish-app-unhlm.ondigitalocean.app", { 
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            query: `INSERT INTO patient (patientid, name, dateOfBirth) VALUES 
                (4, 'Sara Brown', '1901-01-01'),
                (5, 'John Smith', '1941-01-01'),
                (6, 'Jack Ma', '1961-01-30'),
                (7, 'Elon Musk', '1999-01-01')
            ` 
        })
    })
    .then(res => res.json()) 
    .then(data => {
        document.getElementById("output").textContent = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error("❌ Error:", error);
        document.getElementById("output").textContent = "Error inserting data.";
    });
});

document.getElementById("sendQuery").addEventListener("click", () => {
    const query = document.getElementById("queryInput").value.trim(); 
    const isSelect = query.toUpperCase().startsWith("SELECT");
    const method = isSelect ? "GET" : "POST";  
    
    const options = {
        method: method,
        headers: {
            "Content-Type": "application/json"
        }
    };
    let url = "https://lionfish-app-unhlm.ondigitalocean.app";
    if (isSelect) {
        url += `?query=${encodeURIComponent(query)}`;
    } else {
        options.body = JSON.stringify({ query: query });
    }
    
    fetch(url, options)
        .then(res => res.json())  
        .then(data => {
            document.getElementById("output").textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
            console.error("❌ Query Error:", error);
            document.getElementById("output").textContent = "Error processing query.";
        });
});