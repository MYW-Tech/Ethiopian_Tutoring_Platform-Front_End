const api_url = "http://localhost/Ethiopian_Tutoring_Platform/Ethiopian_Tutoring_Platform-Back_End/user.php";

let tutorsData = [];
let currentPage = 1;
const tutorsPerPage = 10; // Show 10 tutors per page

function fetchTutors() {
    fetch(api_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        const tutors = Array.isArray(data) ? data : [data];
        tutorsData = tutors.filter(tutor => tutor.role === 'tutor');
        currentPage = 1; // reset page on fetch
        displayTutors();
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('tutors-container').innerHTML = `
            <div class="error-message">
                <p>Failed to load tutors. Please try again later.</p>
                <button onclick="fetchTutors()">Retry</button>
            </div>
        `;
    });
}

function displayTutors() {
    const tutorsContainer = document.getElementById('tutors-container');
    tutorsContainer.innerHTML = '';

    const start = (currentPage - 1) * tutorsPerPage;
    const end = start + tutorsPerPage;
    const paginatedTutors = tutorsData.slice(start, end);

    if (paginatedTutors.length === 0) {
        tutorsContainer.innerHTML = "<p>No tutors available.</p>";
        return;
    }

    // Create grid container
    const gridContainer = document.createElement('div');
    gridContainer.style.display = 'grid';
    gridContainer.style.gridTemplateColumns = 'repeat(auto-fill, minmax(280px, 1fr))';
    gridContainer.style.gap = '20px';
    gridContainer.style.padding = '20px';

    paginatedTutors.forEach(tutor => {
        const tutorCard = document.createElement('div');
        tutorCard.classList.add('tutor-card');
        tutorCard.style.border = '1px solid #e0e0e0';
        tutorCard.style.borderRadius = '8px';
        tutorCard.style.padding = '15px';
        tutorCard.style.backgroundColor = '#fff';
        tutorCard.style.boxShadow = '0 2px 8px rgba(0,0,0,0.1)';
        tutorCard.style.transition = 'transform 0.3s ease';

        // Hover effect
        tutorCard.onmouseenter = () => tutorCard.style.transform = 'translateY(-5px)';
        tutorCard.onmouseleave = () => tutorCard.style.transform = 'none';

        // Hourly rate at top
        const hourlyRate = document.createElement('div');
        hourlyRate.style.fontSize = '1.3rem';
        hourlyRate.style.fontWeight = 'bold';
        hourlyRate.style.color = '#27ae60';
        hourlyRate.style.marginBottom = '10px';
        hourlyRate.textContent = `${tutor.feeAmount} ETB/hr`;
        
        // Tutor name (first name + last initial)
        const nameParts = tutor.username.split(' ');
        const displayName = nameParts.length > 1 
            ? `${nameParts[0]} ${nameParts[1].charAt(0)}.`
            : tutor.username;
        
        const name = document.createElement('h3');
        name.textContent = displayName;
        name.style.margin = '5px 0';
        name.style.fontSize = '1.2rem';
        name.style.color = '#2c3e50';

        // Rating and jobs
        const rating = document.createElement('div');
        rating.style.margin = '5px 0 10px 0';
        rating.style.color = '#f39c12';
        rating.style.fontWeight = '500';
        rating.innerHTML = `
            <span style="font-weight: bold;">${tutor.rating || '5.0'}/5</span>
            <span style="color: #7f8c8d; font-size: 0.9rem;"> (${tutor.exprienceYear || '0'} ${tutor.exprienceYear === '1' ? 'year' : 'years'} experience)</span>
        `;

        // Specializations (split into two lines like in the image)
        const specializations = tutor.specialization ? 
            tutor.specialization.split(',').map(s => s.trim()) : 
            ['General Tutor'];
        
        const specialization1 = document.createElement('div');
        specialization1.textContent = specializations[0] || '';
        specialization1.style.margin = '5px 0';
        specialization1.style.color = '#34495e';
        
        const specialization2 = document.createElement('div');
        specialization2.textContent = specializations[1] || '';
        specialization2.style.margin = '5px 0 15px 0';
        specialization2.style.color = '#34495e';

        // See More button
        const seeMoreButton = document.createElement('button');
        seeMoreButton.textContent = 'See More';
        seeMoreButton.style.width = '100%';
        seeMoreButton.style.padding = '8px';
        seeMoreButton.style.backgroundColor = '#3498db';
        seeMoreButton.style.color = 'white';
        seeMoreButton.style.border = 'none';
        seeMoreButton.style.borderRadius = '4px';
        seeMoreButton.style.cursor = 'pointer';
        seeMoreButton.style.fontWeight = 'bold';
        seeMoreButton.style.transition = 'background-color 0.3s';
        
        seeMoreButton.onmouseenter = () => seeMoreButton.style.backgroundColor = '#2980b9';
        seeMoreButton.onmouseleave = () => seeMoreButton.style.backgroundColor = '#3498db';
        
        seeMoreButton.onclick = function() {
            localStorage.setItem('selectedTutor', JSON.stringify(tutor));
            window.location.href = 'tutor-details.html';
        };

        // Assemble the card
        tutorCard.appendChild(hourlyRate);
        tutorCard.appendChild(name);
        tutorCard.appendChild(rating);
        tutorCard.appendChild(specialization1);
        tutorCard.appendChild(specialization2);
        tutorCard.appendChild(seeMoreButton);

        gridContainer.appendChild(tutorCard);
    });

    tutorsContainer.appendChild(gridContainer);
    renderPagination();
}

function renderPagination() {
    const paginationContainer = document.getElementById('pagination');
    paginationContainer.innerHTML = '';

    const totalPages = Math.ceil(tutorsData.length / tutorsPerPage);

    if (totalPages <= 1) return; // No pagination needed if only one page

    // Create "See More" button (loads next page)
    const seeMoreBtn = document.createElement('button');
    seeMoreBtn.textContent = 'See More Tutors';
    seeMoreBtn.style.margin = '20px auto';
    seeMoreBtn.style.padding = '10px 20px';
    seeMoreBtn.style.backgroundColor = '#3498db';
    seeMoreBtn.style.color = 'white';
    seeMoreBtn.style.border = 'none';
    seeMoreBtn.style.borderRadius = '4px';
    seeMoreBtn.style.cursor = 'pointer';
    seeMoreBtn.style.fontWeight = 'bold';
    seeMoreBtn.style.display = 'block';
    seeMoreBtn.style.transition = 'background-color 0.3s';
    
    seeMoreBtn.onmouseenter = () => seeMoreBtn.style.backgroundColor = '#2980b9';
    seeMoreBtn.onmouseleave = () => seeMoreBtn.style.backgroundColor = '#3498db';
    
    seeMoreBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            displayTutors();
            // Scroll to bottom to see new tutors
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: 'smooth'
            });
        }
    };
    
    paginationContainer.appendChild(seeMoreBtn);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', fetchTutors);