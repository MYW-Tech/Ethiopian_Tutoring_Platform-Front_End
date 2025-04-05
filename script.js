document.addEventListener("DOMContentLoaded", function() {
    const tutorContainer = document.getElementById("tutor-container");

    // Sample tutor data
    const tutors = [
        {
            name: "John Doe",
            subject: "Math",
            location: "New York, NY",
            rating: 4.8,
            image: "images/tutor1.jpg"
        },
        {
            name: "Jane Smith",
            subject: "English",
            location: "Los Angeles, CA",
            rating: 4.5,
            image: "images/tutor2.jpg"
        },
        {
            name: "Mark Johnson",
            subject: "Science",
            location: "Chicago, IL",
            rating: 4.9,
            image: "images/tutor3.jpg"
        }
    ];

    // Function to display tutors
    function displayTutors(tutorList) {
        tutorContainer.innerHTML = "";
        tutorList.forEach(tutor => {
            const tutorCard = `
                <div class="tutor-card">
                    <img src="${tutor.image}" alt="${tutor.name}">
                    <h3>${tutor.name}</h3>
                    <p>Subject: ${tutor.subject}</p>
                    <p>Location: ${tutor.location}</p>
                    <p class="rating">⭐ ${tutor.rating}</p>
                    <button>Book Now</button>
                </div>
            `;
            tutorContainer.innerHTML += tutorCard;
        });
    }

    // Initial display
    displayTutors(tutors);

    // Search Functionality
    document.getElementById("search-btn").addEventListener("click", function() {
        const searchInput = document.getElementById("search-input").value.toLowerCase();
        const filteredTutors = tutors.filter(tutor =>
            tutor.name.toLowerCase().includes(searchInput) ||
            tutor.subject.toLowerCase().includes(searchInput) ||
            tutor.location.toLowerCase().includes(searchInput)
        );
        displayTutors(filteredTutors);
    });
});
