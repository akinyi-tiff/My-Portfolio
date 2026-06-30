/*HOME PAGE */
   
const welcome = document.getElementById("welcome");
const changeBtn = document.getElementById("changeBtn");

if (welcome && changeBtn) {

    changeBtn.addEventListener("click", function () {

        welcome.textContent = "Welcome to Tiffany Akinyi's Portfolio!";
        welcome.style.color = "blue";
        welcome.style.fontSize = "40px";

    });

}


/*ABOUT PAGE */
   

const aboutHeading = document.getElementById("aboutHeading");
const aboutBtn = document.getElementById("aboutBtn");

if (aboutHeading && aboutBtn) {

    aboutBtn.addEventListener("click", function () {

        aboutHeading.textContent = "About Tiffany Akinyi";
        aboutHeading.style.color = "green";

    });

}


/*SERVICE PAGE */ 

const serviceBtn = document.getElementById("serviceBtn");
const cards = document.querySelectorAll(".services .card");

let currentCard = 0;

if (serviceBtn && cards.length > 0) {

    serviceBtn.addEventListener("click", function () {

        cards.forEach(function (card) {

            card.style.backgroundColor = "white";
            card.style.border = "none";

        });

        cards[currentCard].style.backgroundColor = "#cce5ff";
        cards[currentCard].style.border = "2px solid blue";

        currentCard++;

        if (currentCard >= cards.length) {
            currentCard = 0;
        }

    });

}


/* CONTACTS PAGE */

const contactsForm = document.getElementById("contactsForm");

if (contactsForm) {

    contactsForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const errorMessage = document.getElementById("errorMessage");

        if (name === "" || email === "" || message === "") {

            errorMessage.textContent = "Please fill in all required fields.";
            errorMessage.style.color = "red";

        } else {

            errorMessage.textContent = "Message sent successfully!";
            errorMessage.style.color = "green";

            contactForm.reset();

        }

    });

}


/*PROJECTS PAGE (FETCH)*/
   

const projectContainer = document.getElementById("projectsContainer");

if (projectContainer) {

    fetch("projects.json")
        .then(function (response) {
            return response.json();
        })
        .then(function (projects) {

            projects.forEach(function (project) {

                projectContainer.innerHTML += `

                    <div class="card">

                        <img src="${project.image}" alt="${project.title}">

                        <h3>${project.title}</h3>

                        <p>${project.description}</p>

                    </div>

                `;

            });

        })
        .catch(function () {

            projectContainer.innerHTML = "<p>Unable to load projects.</p>";

        });

}