window.addEventListener("DOMContentLoaded", async () => {
    try {
      await fetch("/api/init-emoji");
    } catch (error) {
      console.error("Initialization failed:", error);
    }
  });
  
  const form = document.getElementById("nameForm");
  const result = document.getElementById("result");
  
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
  
    const userName = document.getElementById("userName").value;
  
    try {
      const response = await fetch("/api/get-name", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        result.textContent = `${data.name} ${data.emoji}`;
      } else {
        result.textContent = data.error;
      }
  
    } catch (error) {
      result.textContent = "Server error";
    }
  });