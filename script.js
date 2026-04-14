let expression = "";

// ✅ Change this from AWS URL to Localhost
const BASE_URL = "http://localhost:3000";

// ➕ Add values
function add(val) {
  expression += val;

  // show expression on top
  document.getElementById("expression").innerText = expression;
}

// 🧮 Calculate result
function calculate() {
  // show loading vibe 😏
  document.getElementById("result").innerText = "...";

  fetch(`${BASE_URL}/calc`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ exp: expression })
  })
  .then(res => res.json())
  .then(data => {
    console.log("Response:", data); // 🔍 debug

    // show result below
    document.getElementById("result").innerText = data.result;

    // Convert to string so the next calculation doesn't break
    expression = data.result.toString();
  })
  .catch(err => {
    console.error("Error:", err);
    document.getElementById("result").innerText = "Error";
  });
}

// ❌ Clear everything
function clearResult() {
  expression = "";

  document.getElementById("expression").innerText = "";
  document.getElementById("result").innerText = "0";
}