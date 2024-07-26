function search() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.remove('highlight');
        if (section.innerText.toLowerCase().includes(query)) {
            section.scrollIntoView({ behavior: 'smooth' });
            section.classList.add('highlight');
        }
    });
}

// Testimonials  
   
