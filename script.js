document.addEventListener('DOMContentLoaded', function() {
 
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
    
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    if (tabs.length > 0) {
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                tabs.forEach(t => t.classList.remove('active'));
                tabContents.forEach(c => c.classList.remove('active'));
                
                tab.classList.add('active');
                
                const tabIndex = Array.from(tabs).indexOf(tab);
                if (tabContents[tabIndex]) {
                    tabContents[tabIndex].classList.add('active');
                }
            });
        });
    }
    
    const validatePasswordMatch = (formId) => {
        const form = document.getElementById(formId);
        if (form) {
            const password = form.querySelector('input[name="password"]');
            const confirmPassword = form.querySelector('input[id$="confirm-password"]');
            
            if (password && confirmPassword) {
                form.addEventListener('submit', function(e) {
                    if (password.value !== confirmPassword.value) {
                        e.preventDefault();
                        alert('Passwords do not match!');
                        confirmPassword.focus();
                    }
                });
            }
        }
    };
    
    validatePasswordMatch('register-form');
    validatePasswordMatch('charity-register-form');
    
    const adminForm = document.getElementById('admin-login-form');
    if (adminForm) {
        adminForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const username = this.querySelector('input[name="username"]').value;
            const password = this.querySelector('input[name="password"]').value;
            
            if (username === 'admin' && password === 'admin') {
                window.location.href = 'admin_dashboard.html';
            } else {
                alert('Invalid admin credentials');
            }
        });
    }
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                if (navLinks) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });
    
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            if (this.id === 'donation-form') {
                alert('Thank you for your donation! Your contribution is making a difference.');
                window.location.href = 'user_dashboard.html';
            } else if (this.id === 'contact-form') {
                alert('Thank you for your message! Our team will get back to you soon.');
                this.reset();
            } else {
                this.reset();
            }
        });
    });
    
    const causeCards = document.querySelectorAll('.cause-card');
    causeCards.forEach(card => {
        card.addEventListener('click', function() {
            causeCards.forEach(c => c.classList.remove('selected'));
            this.classList.add('selected');
        });
    });
    
    const addCauseBtn = document.getElementById('add-cause-btn');
    if (addCauseBtn) {
        addCauseBtn.addEventListener('click', function(e) {
            e.preventDefault();
            alert('Add new cause functionality would open a modal in a real application');
        });
    }
});