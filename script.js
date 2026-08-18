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

// Handling Form Pendaftaran
const formPendaftaran = document.getElementById('form-pendaftaran');

formPendaftaran.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const nama = document.getElementById('nama').value;
    const divisi = document.getElementById('divisi').options[document.getElementById('divisi').selectedIndex].text;
    
    alert(`Terima kasih ${nama}, pendaftaran kamu untuk divisi ${divisi} berhasil dikirim!`);
    formPendaftaran.reset();
});