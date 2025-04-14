// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact Form
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Replace with your SMTP.js credentials
    Email.send({
        Host: "smtp.gmail.com",
        Username: "sabarish27hov@gmail.com",
        Password: "Admin@2024",
        To: 'sabarish27nov@gmail.com',
        From: email,
        Subject: subject,
        Body: `Name: ${name}<br>Email: ${email}<br>Message: ${message}`
    }).then(
        message => {
            alert('Message sent successfully!');
            contactForm.reset();
        }
    ).catch(
        error => {
            alert('Error sending message. Please try again later.');
            console.error('Error:', error);
        }
    );
});

// Scroll Animation
const sections = document.querySelectorAll('.section');

const observerOptions = {
    threshold: 0.2
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// Add animation classes to elements
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.section h2, .section p, .section .about-content, .section .education-content, .section .experience-content, .section .projects-grid, .section .blogs-grid');
    
    elements.forEach(element => {
        element.classList.add('fade-in');
    });
}); 