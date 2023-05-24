document.addEventListener("DOMContentLoaded", function (e) {
  e.preventDefault();

  const userRole = window.prompt("skriv ansat eller leder"); // user eller admin
  console.log(userRole);

  fetch(`https://kvejen.com/adbis/api/component-data/${userRole}`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        const element = data[i];
        const container = document.getElementById("components");
        container.innerHTML += `
        <div class="component">
      <h2 class="component-headline">${element.headline}</h2>
      <p class="component-content">${element.content}</p>
      <a href="${element.buttonLink}"><button class="component-button">${element.buttonText}</button></a>
    </div>
        `;
      }
    })
    .catch((error) => console.log(error));
});
