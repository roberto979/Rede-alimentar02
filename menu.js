document.addEventListener('DOMContentLoaded', () => {
    
    
    const welcomeBar = document.getElementById('welcomeMessageBar');
    if (welcomeBar) {
       
        const currentPage = window.location.pathname.split("/").pop();

        let messages = [];

        
        if (currentPage === "index.html" || currentPage === "home.html" || currentPage === "") {
            messages = [
                "🇦🇴 Welcome to Rede Alimentar! Discover the most authentic flavours of Luanda.",
                "✨ Experience the comfort of Kinaxixi and our passion for traditional gastronomy.",
                "❖ Tradition and modernity combined in a unique environment tailored for you."
            ];
        } else if (currentPage === "menu.html") {
            messages = [
                "🍲 Did you know? Our Mufete and Funge follow ancestral recipes passed down through generations.",
                "🍤 Explore our premium international options carefully selected by the Head Chef.",
                "🔥 Daily Special: Our traditional Calulu is made using fresh, locally sourced ingredients!"
            ];
        } else if (currentPage === "reservations.html") {
            messages = [
                "🗓️ Plan your dining experience with us: Book your table online in less than a minute.",
                "🍷 Group dinners or family moments? Secure your perfect spot in advance.",
                "⭐ Tip: Avoid the queues and guarantee a seamless culinary experience by booking early."
            ];
        } else {
          
            messages = [
                "✨ Your feedback is crucial for us to maintain our standard of excellence.",
                "📱 Follow our official social media channels to stay up to date with seasonal offers.",
                "💬 Looking for a personalized catering service for special events? Get in touch!"
            ];
        }

      
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        
        welcomeBar.textContent = randomMessage;
        welcomeBar.style.display = 'block';
    }

    
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
            menuToggle.setAttribute('aria-expanded', !isExpanded);
            navLinks.classList.toggle('active');
            menuToggle.textContent = isExpanded ? '☰' : '✕';
        });

        document.addEventListener('click', (e) => {
            if (!navLinks.contains(e.target) && !menuToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
                menuToggle.textContent = '☰';
            }
        });
    }

    const resDateInput = document.getElementById('resDate');
    if (resDateInput) {
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const dd = String(today.getDate()).padStart(2, '0');
        resDateInput.min = `${yyyy}-${mm}-${dd}`;
    }

   
    const resForm = document.getElementById('reservationForm');
    const resFeedback = document.getElementById('resFeedback');
    if (resForm && resFeedback) {
        resForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('resName').value;
            resFeedback.style.display = 'block';
            resFeedback.style.backgroundColor = '#d4edda';
            resFeedback.style.color = '#155724';
            resFeedback.textContent = `Perfect, ${name}! Your table request has been submitted successfully.`;
            resForm.reset();
        });
    }

    
    const modal = document.getElementById('lightboxModal');
    const modalImg = document.getElementById('lightboxImg');
    const captionText = document.getElementById('lightboxCaption');
    const closeBtn = document.querySelector('.lightbox-close');
    const triggers = document.querySelectorAll('.lightbox-trigger');

    if (modal && modalImg && closeBtn) {
        triggers.forEach(img => {
            img.style.cursor = 'pointer';
            img.addEventListener('click', function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            });
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = "none";
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }

});
const faqQuestions = document.querySelectorAll('.faq-question');

if (faqQuestions.length > 0) {
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            const faqAnswer = question.nextElementSibling; // Captura a div .faq-answer
            const faqIcon = question.querySelector('.faq-icon');

           
            const isOpen = faqItem.classList.contains('active');

            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
                const answer = item.querySelector('.faq-answer');
                if (answer) answer.style.maxHeight = null;
                const icon = item.querySelector('.faq-icon');
                if (icon) icon.textContent = '+';
            });

           
            if (!isOpen) {
                faqItem.classList.add('active');
                
                faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
                if (faqIcon) faqIcon.textContent = '−';
            }
        });
    });
}