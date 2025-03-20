const api_url = "http://localhost:8080/yope_php/Ethiopian_Tutoring_Platform/Back_End";

function cheekRole() {
    const role = document.getElementById('role').value;
    
    document.getElementById('admin').style.display = 'none';
    document.getElementById('parent').style.display = 'none';
    document.getElementById('student').style.display = 'none';
    document.getElementById('tutor').style.display = 'none';
    
    document.getElementById(role).style.display = 'block';
}

function adminSubmit() {
    const username = document.getElementById('admin-username').value;
    const email = document.getElementById('admin-email').value;
    const password = document.getElementById('admin-password').value;
    const phoneNumber = document.getElementById('admin-phoneNumber').value;
    const role = document.getElementById('role').value;   
    const profileImage = document.getElementById('admin-profileImage').files[0];

    const formData = new FormData();
    formData.append('profileImage', profileImage);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
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
            window.location = 'user.htm';
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

function parentSubmit() {
    const username = document.getElementById('parent-username').value;
    const email = document.getElementById('parent-email').value;
    const password = document.getElementById('parent-password').value;
    const phoneNumber = document.getElementById('parent-phoneNumber').value;
    const address = document.getElementById('parent-address').value;
    const role = document.getElementById('role').value;   
    const profileImage = document.getElementById('parent-profileImage').files[0];

    const formData = new FormData();
    formData.append('profileImage', profileImage);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address', address);
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
            window.location = 'user.htm';
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

function studentSubmit() {
    const username = document.getElementById('student-username').value;
    const email = document.getElementById('student-email').value;
    const password = document.getElementById('student-password').value;
    const phoneNumber = document.getElementById('student-phoneNumber').value;
    const age = document.getElementById('student-age').value;
    const gradeLevel = document.getElementById('student-gradeLevel').value;   
    const preferredSubject = document.getElementById('student-preferredSubject').value;   
    const school = document.getElementById('student-school').value;   
    const studentParentEmail = document.getElementById('student-studentParentEmail').value;   
    const role = document.getElementById('role').value;   
    const profileImage = document.getElementById('parent-profileImage').files[0];

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
            window.location = 'user.htm';
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

function tutorSubmit() {
    const username = document.getElementById('tutor-username').value;
    const email = document.getElementById('tutor-email').value;
    const password = document.getElementById('tutor-password').value;
    const phoneNumber = document.getElementById('tutor-phoneNumber').value;
    const specialization = document.getElementById('tutor-specialization').value;
    const exprienceYear = document.getElementById('tutor-exprienceYear').value;
    const bio = document.getElementById('tutor-bio').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;    
    const school = document.getElementById('tutor-school').value;    
    const address = document.getElementById('tutor-address').value;   
    const role = document.getElementById('role').value;   
    const profileImage = document.getElementById('tutor-profileImage').files[0];

    const formData = new FormData();
    formData.append('profileImage', profileImage);
    formData.append('username', username);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('phoneNumber', phoneNumber);
    formData.append('specialization', specialization);
    formData.append('exprienceYear', exprienceYear);
    formData.append('bio', bio);
    formData.append('gender', gender);
    formData.append('school', school);
    formData.append('address', address);
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
            window.location = 'user.htm';
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
        action: 'logout'
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