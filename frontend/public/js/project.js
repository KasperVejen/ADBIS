document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();

  // Check if user is logged in

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
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
