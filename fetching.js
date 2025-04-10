
const api_base_url = "http://localhost/Ethiopian_Tutoring_Platform/Ethiopian_Tutoring_Platform-Back_End";
function parentSubmit() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const phoneNumber= document.getElementById('phoneNumber').value;
    const address = document.getElementById('address').value;
    const profileImage = document.getElementById('profileImage').files[0];

    const formData = new FormData();
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', address);
    formData.append('profileImage', profileImage);
    formData.append('action', 'signup_for_parent');

    const url = `${api_base_url}/myw.tutor.api.php`;
    fetch(url, {
            method: 'POST',
            body: formData,
        })
    .then(response => response.json())
    .then(data => {
        const resultContainer = document.createElement('div');
        resultContainer.textContent = JSON.stringify(data, null, 2);
        // document.body.appendChild(resultContainer);
        // Process the data as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function tutorSubmit() {
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
    formData.append('amount', amount);
    formData.append('time', _time);
    formData.append('day', _day);
    formData.append('action', 'signup_for_tutor');

    const url = `${api_base_url}/myw.tutor.api.php`;
    fetch(url, {
            method: 'POST',
            body: formData,
        })
    .then(response => response.json())
    .then(data => {
        const resultContainer = document.createElement('div');
        resultContainer.textContent = JSON.stringify(data, null, 2);
        // document.body.appendChild(resultContainer);
        // Process the data as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

// function for Student 
function studentSubmit() {
    const username = document.getElementById('username').value;  // Fixed username
    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;
    const phoneNumber = document.getElementById('student-phoneNumber').value;
    const age = document.getElementById('student-age').value;
    const gradeLevel = document.getElementById('student-gradeLevel').value;   
    const preferredSubject = document.getElementById('student-preferredSubject').value;   
    const school = document.getElementById('student-school').value;   
    const studentParentEmail = document.getElementById('family_email').value;  // Fixed parent email
    const profileImage = document.getElementById('profileImage').files[0];  // Fixed image input ID

    const formData = new FormData();
    formData.append('profileImage', profileImage);
    formData.append('student-username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phoneNumber);
    formData.append('age', age);
    formData.append('grade', gradeLevel);
    formData.append('subject', preferredSubject);
    formData.append('school', school);
    formData.append('studentParentEmail', studentParentEmail);
    formData.append('action', 'signup_for_student');

    const url = `${api_base_url}/myw.tutor.api.php`;
    fetch(url, {
            method: 'POST',
            body: formData,
        })
    .then(response => response.json())
    .then(data => {
        const resultContainer = document.createElement('div');
        resultContainer.textContent = JSON.stringify(data, null, 2);
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function adminSubmit() {
    const username = document.getElementById('username').value;  // Fixed username
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    const phoneNumber = document.getElementById('admin-phoneNumber').value;
    const profileImage = document.getElementById('profileImage').files[0];  // Fixed image input ID

    const formData = new FormData();
    formData.append('profileImage', profileImage);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phone', phoneNumber);
    formData.append('action', 'signup_for_admin');

    const url = `${api_base_url}/myw.tutor.api.php`;
    fetch(url, {
            method: 'POST',
            body: formData,
        })
    .then(response => response.json())
    .then(data => {
        const resultContainer = document.createElement('div');
        resultContainer.textContent = JSON.stringify(data, null, 2);
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
}






















function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('login-password').value;

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);
    formData.append('action', 'login_for_parent');

    const url = `${api_base_url}/myw.tutor.api.php`;
    fetch(url, {
            method: 'POST',
            body: formData,
        })
    .then(response => response.json())
    .then(data => {
        const resultContainer = document.createElement('div');
        resultContainer.textContent = JSON.stringify(data, null, 2);
        document.body.appendChild(resultContainer);
        // Process the data as needed
    })
    .catch(error => {
        console.error('Error:', error);
    });
}

function logout() {
    const input = {
        "action": "logout"
    };

    const url = `${api_base_url}/myw.tutor.api.php?${new URLSearchParams(input)}`; 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const resultContainer = document.createElement('div');
            resultContainer.textContent = JSON.stringify(data, null, 2);
            document.body.appendChild(resultContainer);
            // Process the data as needed
        })
        .catch(error => {
            console.error('Error:', error);
        });
}


