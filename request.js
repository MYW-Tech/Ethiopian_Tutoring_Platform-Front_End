const api_url = "http://localhost/Ethiopian_Tutoring_Platform/Ethiopian_Tutoring_Platform-Back_End/";
function parentSubmit() {
const username = document.getElementById('name').value;
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const phoneNumber = document.getElementById('phone').value;
const address = document.getElementById('address').value;
// const role = document.getElementById('role').value; // It does generate an error
const profileImage = document.getElementById('profile').files[0];

const formData = new FormData();
formData.append('profileImage', profileImage);
formData.append('username', username);
formData.append('email', email);
formData.append('password', password);
formData.append('phoneNumber', phoneNumber);
formData.append('address', address);
formData.append('role', 'parent'); // Asigning the role is 'parent'
formData.append('action', 'signup');

fetch(`${api_url}/user.php`, {
method: 'POST',
body: formData,
})
.then(response => response.json())
.then(data => {
if (data.status === 'success') {
alert('Signup successful!');
window.location = 'parent_signup.html';
} else {
alert('Signup failed: ' + data.data);
}
})
.catch((error) => {
console.error('Error:', error);
alert('Error: ' + error);
});

return false;
}
// function for Student 
function studentSubmit() {
    const username = document.getElementById('name').value;  // Fixed username
    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;
    const phoneNumber = document.getElementById('student-phoneNumber').value;
    const age = document.getElementById('student-age').value;
    const gradeLevel = document.getElementById('student-gradeLevel').value;   
    const preferredSubject = document.getElementById('student-preferredSubject').value;   
    const school = document.getElementById('student-school').value;   
    const studentParentEmail = document.getElementById('family_email').value;  // Fixed parent email
    const role = document.getElementById('role').value;   
    const profileImage = document.getElementById('profileImage').files[0];  // Fixed image input ID

    const formData = new FormData();
    formData.append('profileImage', profileImage);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('age', age);
    formData.append('gradeLevel', gradeLevel);
    formData.append('preferredSubject', preferredSubject);
    formData.append('school', school);
    formData.append('studentParentEmail', studentParentEmail);
    formData.append('role', role);
    formData.append('action', 'signup');

    fetch(`${api_url}/user.php`, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Signup successful!');
            window.location = 'student_signup.html';
        } else {
            alert('Signup failed: ' + data.data);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error: ' + error);
    });

    return false;
}
function tutorSubmit(event) {
    // event.preventDefault(); // Prevent page refresh

    const username = document.getElementById('tutor-name').value.trim();
    const email = document.getElementById('tutor-email').value.trim();
    const password = document.getElementById('tutor-password').value.trim();
    const phoneNumber = document.getElementById('tutor-phoneNumber').value.trim();
    const specialization = document.getElementById('tutor-specialization').value.trim();
    const experienceYear = document.getElementById('tutor-experienceYear').value.trim();
    const bio = document.getElementById('tutor-bio').value.trim();
    const genderInput = document.querySelector('input[name="gender"]:checked');
    
    if (!genderInput) {
        alert("Please select a gender.");
        return false;
    }
    
    const gender = genderInput.value;
    const school = document.getElementById('tutor-school').value.trim();
    const address = document.getElementById('tutor-address').value.trim();
    const amount = document.getElementById('tutor-feeAmount').value.trim();
    const _time = document.getElementById('tutor-time').value.trim();
    const _day = document.getElementById('tutor-day').value.trim();
    const role = "tutor";
    const profileImage = document.getElementById('tutor-profile').files[0];

    const formData = new FormData();
    formData.append('profileImage', profileImage);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('specialization', specialization);
    formData.append('experienceYear', experienceYear);
    formData.append('bio', bio);
    formData.append('gender', gender);
    formData.append('school', school);
    formData.append('address', address);
    formData.append('feeAmount', amount);
    formData.append('tutorTime', _time);
    formData.append('tutorDay', _day);
    formData.append('role', role);
    formData.append('action', 'signup');

    fetch(`${api_url}/user.php`, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === 'success') {
            alert('Signup successful!');
            window.location.href = 'tutor_signup.html'; // Redirect after successful signup
        } else {
            console.error("Signup failed:", data.data);
            alert('Signup failed: ' + data.data);
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error: ' + error);
    });

    return false;
}

// addmin submit functionL

function adminSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('admin-username').value.trim();
    const email = document.getElementById('admin-email').value.trim();
    const password = document.getElementById('admin-password').value.trim();
    const phoneNumber = document.getElementById('admin-phoneNumber').value.trim();
    const profileImage = document.getElementById('admin-profileImage').files[0];

    if (!username || !email || !password || !phoneNumber) {
        alert("Please fill in all required fields.");
        return false;
    }

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phoneNumber);
    formData.append('role', 'admin');
    formData.append('action', 'signup');

    if (profileImage) {
        formData.append('profileImage', profileImage);
    }

    fetch(`${api_url}/user.php`, {
        method: 'POST',
        body: formData,
    })
    .then(response => response.json())
    .then(data => {
        console.log("Server Response:", data);
        if (data.status === 'success') {
            alert('Signup successful!');
            window.location.href = 'admin_signup.html';
        } else {
            alert('Signup failed: ' + data.message);
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('Error: ' + error.message);
    });

    return false;
}


function login() {
const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const role = document.getElementById('role').value;

const formData = new FormData();
formData.append('email', email);
formData.append('password', password);
formData.append('role', role);
formData.append('action', 'login');
fetch(`${api_url}/user.php`, {
method: 'POST',
body: formData,
})
.then(response => response.json())
.then(data => {
if (data.status === 'success') {
alert('Login successful!');
window.location = 'user.htm';
} else {
alert('Login failed: ' + data.data);
}
})
.catch((error) => {
console.error('Error:', error);
alert('Error: ' + error);
});

return false;
}

function logout() {
const data = {
action: 'logout',
email: document.getElementById('email').value,
};

fetch(`${api_url}/user.php?${new URLSearchParams(data).toString()}`, {
method: 'GET',
headers: {
'Content-Type': 'application/json'
}
})
.then(response => response.json())
.then(data => {
if (data.status === 'success') {
alert('Logout successful!');
} else {
alert('Logout failed: ' + data.data);
}
})
.catch((error) => {
console.error('Error:', error);
alert('Error: ' + error);
}); 
}

// fetching user data for profile display
const API_URL = "http://localhost/Ethiopian_Tutoring_Platform/Ethiopian_Tutoring_Platform-Back_End/user.php"; 
const tutorContainer = document.getElementById("tutorList");

async function fetchTutors() {
    try {
        const response = await fetch(API_URL);
        const tutors = await response.json();

        if (!Array.isArray(tutors)) {
            console.error("Invalid API response format.");
            return;
        }

        tutorContainer.innerHTML = ""; // Clear existing content

        tutors.forEach(tutor => {
            const tutorCard = document.createElement("div");
            tutorCard.classList.add("tutor-card");

            tutorCard.innerHTML = `
                <img src="${tutor.profileImage ? tutor.profileImage : 'https://via.placeholder.com/100'}" alt="${tutor.username}">
                <h2>${tutor.username}</h2>
                <p><strong>Specialization:</strong> ${tutor.specialization}</p>
                <p><strong>Fee:</strong> ${tutor.feeAmount} ETB per session</p>
                <button class="see-more-btn" onclick="seeMore('${tutor.tutorID}')">See More</button>
            `;

            tutorContainer.appendChild(tutorCard);
        });

    } catch (error) {
        console.error("Error fetching tutor data:", error);
    }
}

function seeMore(tutorID) {
    // Redirect to the new page with the selected tutor's ID
    window.location.href = `tutor_details.html?tutorID=${tutorID}`;
}

// Fetch tutors on page load
document.addEventListener("DOMContentLoaded", fetchTutors);
