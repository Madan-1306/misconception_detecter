async function analyzeVideo() {
  const url = document.getElementById("videoUrl").value;
  if (!url) {
    alert("Please enter a YouTube link!");
    return;
  }

  document.getElementById("results").innerHTML = "<p>⏳ Analyzing video... please wait.</p>";

  try {
    let response = await fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify({ video_url: url })
    });

    let data = await response.json();

    document.getElementById("results").innerHTML = `
      <h2>🔴 Misconceptions Found:</h2>
      <p class="misconception">${data.misconceptions || "No misconceptions detected."}</p>
      
      <h2>🟢 Corrections:</h2>
      <p class="correction">${data.corrections || "Everything looks correct!"}</p>
    `;
  } catch (error) {
    document.getElementById("results").innerHTML = "<p>❌ Error: Could not analyze video.</p>";
    console.error(error);
  }
}
