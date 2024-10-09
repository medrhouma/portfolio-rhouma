document.addEventListener('DOMContentLoaded', function() { 
    // Navbar scroll effect 
    window.addEventListener('scroll', function() { 
        if (window.scrollY > 50) { 
            document.querySelector('.navbar').classList.add('scrolled'); 
        } else { 
            document.querySelector('.navbar').classList.remove('scrolled'); 
        } 
    }); 

    // Smooth scrolling for anchor links 
    document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
        anchor.addEventListener('click', function (e) { 
            e.preventDefault(); // Prevent default anchor behavior
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
