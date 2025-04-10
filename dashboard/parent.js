document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.createElement('div');
    mobileMenuToggle.className = 'mobile-menu-toggle';
    mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    document.querySelector('.top-header').prepend(mobileMenuToggle);
    
    mobileMenuToggle.addEventListener('click', function() {
        document.querySelector('.sidebar').classList.toggle('active');
    });
    
    // Notification dropdown
    const notificationIcon = document.querySelector('.notification-icon');
    if (notificationIcon) {
        const notificationDropdown = document.createElement('div');
        notificationDropdown.className = 'notification-dropdown';
        notificationDropdown.innerHTML = `
            <div class="dropdown-header">
                <h3>Notifications</h3>
                <span class="mark-read">Mark all as read</span>
            </div>
            <div class="dropdown-list">
                <div class="notification-item unread">
                    <div class="notification-icon">
                        <i class="fas fa-calendar-check"></i>
                    </div>
                    <div class="notification-content">
                        <p>New session scheduled for tomorrow at 3:00 PM</p>
                        <span class="notification-time">2 hours ago</span>
                    </div>
                </div>
                <div class="notification-item unread">
                    <div class="notification-icon">
                        <i class="fas fa-comment-dots"></i>
                    </div>
                    <div class="notification-content">
                        <p>You have a new message from Tutor Michael</p>
                        <span class="notification-time">1 day ago</span>
                    </div>
                </div>
                <div class="notification-item">
                    <div class="notification-icon">
                        <i class="fas fa-dollar-sign"></i>
                    </div>
                    <div class="notification-content">
                        <p>Payment of $120.00 received</p>
                        <span class="notification-time">3 days ago</span>
                    </div>
                </div>
            </div>
            <div class="dropdown-footer">
                <a href="#">View all notifications</a>
            </div>
        `;
        
        notificationIcon.appendChild(notificationDropdown);
        
        notificationIcon.addEventListener('click', function(e) {
            e.stopPropagation();
            notificationDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            notificationDropdown.classList.remove('show');
        });
    }
    
    // User profile dropdown
    const userProfile = document.querySelector('.user-profile');
    if (userProfile) {
        const profileDropdown = document.createElement('div');
        profileDropdown.className = 'profile-dropdown';
        profileDropdown.innerHTML = `
            <div class="dropdown-header">
                <img src="images/user-avatar.jpg" alt="User Avatar">
                <div class="user-info">
                    <h3>Sarah Johnson</h3>
                    <span>Parent</span>
                </div>
            </div>
            <div class="dropdown-list">
                <a href="#profile"><i class="fas fa-user"></i> My Profile</a>
                <a href="#settings"><i class="fas fa-cog"></i> Settings</a>
                <a href="#help"><i class="fas fa-question-circle"></i> Help</a>
            </div>
            <div class="dropdown-footer">
                <a href="#logout"><i class="fas fa-sign-out-alt"></i> Logout</a>
            </div>
        `;
        
        userProfile.appendChild(profileDropdown);
        
        userProfile.addEventListener('click', function(e) {
            e.stopPropagation();
            profileDropdown.classList.toggle('show');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function() {
            profileDropdown.classList.remove('show');
        });
    }
    
    // Initialize chart (using Chart.js as an example)
    if (document.querySelector('.progress-chart')) {
        // This is just a placeholder - you would need to include Chart.js library
        console.log('Chart would be initialized here with real data');
    }
    
    // Tab functionality for other pages
    const tabs = document.querySelectorAll('.tab-nav li');
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', function() {
                tabs.forEach(t => t.classList.remove('active'));
                this.classList.add('active');
                
                const tabId = this.getAttribute('data-tab');
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                document.getElementById(tabId).classList.add('active');
            });
        });
    }
    
    // Session reminder notifications
    function checkUpcomingSessions() {
        // In a real app, this would check for sessions starting soon
        console.log('Checking for upcoming sessions...');
    }
    
    // Check every 5 minutes
    setInterval(checkUpcomingSessions, 300000);
    checkUpcomingSessions();
    
    // Message counter
    function updateMessageCount() {
        const unreadCount = document.querySelectorAll('.message-card.unread').length;
        const messageBadge = document.querySelector('.sidebar-nav #messages .notification-badge');
        if (messageBadge) {
            messageBadge.textContent = unreadCount;
            if (unreadCount === 0) {
                messageBadge.style.display = 'none';
            } else {
                messageBadge.style.display = 'flex';
            }
        }
    }
    
    updateMessageCount();
});