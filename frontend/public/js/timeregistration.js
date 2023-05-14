document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();

  fetch("https://kvejen.com/adbis/api/database")
    .then((response) => response.json())
    .then((data) => {
      let select = document.getElementById("project");
      for (let i = 0; i < data.length; i++) {
        let option = document.createElement("option");
        option.value = data[i].project_ID;
        option.text = data[i].project_name;
        select.add(option);
      }
    });

  const form = document.getElementById("timeregistration");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    fetch("https://kvejen.com/adbis/api/timeregistration/timeregistration", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        alert(data.message);
      });
  });
});
