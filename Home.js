// // Hamburger Menu Toggle
// document.getElementById("menu-toggle").addEventListener("click", function() {
//     document.getElementById("nav-menu").classList.toggle("active");
// });

// // AI Button Click
// document.querySelector(".ai-btn").addEventListener("click", function() {
//     alert("AI Chatbot feature coming soon!");
// });

// // AI Search Button
// document.querySelector(".ai-icon").addEventListener("click", function() {
//     let query = document.querySelector(".input-group input").value;
//     if (query.trim() === "") {
//         alert("Please enter a question.");
//     } else {
//         alert("Searching AI for: " + query);
//     }
// });
// document.getElementById("tutorForm").addEventListener("submit", function(e) {
//     e.preventDefault();

//     let tutor = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         phone: document.getElementById("phone").value,
//         subjects: document.getElementById("subjects").value,
//         price: document.getElementById("price").value,
//         location: document.getElementById("location").value,
//         time: document.getElementById("time").value
//     };

//     // Save to Firebase
//     firebase.database().ref("tutors/").push(tutor).then(() => {
//         alert("Tutor Registered Successfully!");
//         document.getElementById("tutorForm").reset();
//     });
// });
// function loadTutors() {
//     const tutorsList = document.getElementById("tutorsList");
//     tutorsList.innerHTML = ""; // Clear previous data

//     firebase.database().ref("tutors/").once("value", function(snapshot) {
//         snapshot.forEach(function(childSnapshot) {
//             let tutor = childSnapshot.val();
//             let tutorCard = `
//                 <div class="tutor-card">
//                     <h3>${tutor.name}</h3>
//                     <p><strong>Subjects:</strong> ${tutor.subjects}</p>
//                     <p><strong>Hourly Rate:</strong> $${tutor.price}</p>
//                     <p><strong>Location:</strong> ${tutor.location}</p>
//                     <p><strong>Available Time:</strong> ${tutor.time}</p>
//                     <button onclick="bookTutor('${tutor.name}')">Book Now</button>
//                 </div>
//             `;
//             tutorsList.innerHTML += tutorCard;
//         });
//     });
// }

// // Load tutors when the page loads
// window.onload = loadTutors;
// function searchTutors() {
//     let searchInput = document.getElementById("search").value.toLowerCase();
//     let tutorCards = document.getElementsByClassName("tutor-card");

//     for (let i = 0; i < tutorCards.length; i++) {
//         let cardText = tutorCards[i].innerText.toLowerCase();
//         if (cardText.includes(searchInput)) {
//             tutorCards[i].style.display = "block";
//         } else {
//             tutorCards[i].style.display = "none";
//         }
//     }
// }
// function bookTutor(tutorName) {
//     let parentName = prompt("Enter your name:");
//     let sessionTime = prompt("Enter session time:");

//     if (parentName && sessionTime) {
//         firebase.database().ref("bookings/").push({
//             tutor: tutorName,
//             parent: parentName,
//             time: sessionTime
//         }).then(() => {
//             alert("Booking Confirmed with " + tutorName);
//         });
//     }
// }
