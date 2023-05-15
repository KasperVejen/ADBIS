document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();

  // Check if user is logged in and is admin or user
  const userRole = "admin"; //Change to actual user role
  if (userRole !== "user" && userRole !== "admin") {
    window.location.href = "unauthorized.html";
    return;
  }

  //add time registration to database
  const form = document.getElementById("project");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    fetch("https://kvejen.com/adbis/api/projects/project", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
        window.location.href = "https://kvejen.com/adbis/";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
