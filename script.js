// Toggle Light/Dark Mode
const themeToggleBtn = document.getElementById('theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    const isLight = body.classList.contains('light-mode');
    themeToggleBtn.innerHTML = isLight 
        ? '<i class="fa-solid fa-sun"></i>' 
        : '<i class="fa-solid fa-moon"></i>';
});

