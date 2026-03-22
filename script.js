// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('nav-glass');
    } else {
        nav.classList.remove('nav-glass');
    }
});

// Spiritual Tab Toggle
function toggleSpiritual(tab) {
    const grid = document.getElementById('services-grid');
    const list = document.getElementById('events-list');
    const btnS = document.getElementById('btn-services');
    const btnE = document.getElementById('btn-events');

    if (tab === 'services') {
        grid.classList.remove('hidden');
        list.classList.add('hidden');
        btnS.className = "px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#1E3A8A] text-white transition-all";
        btnE.className = "px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#1E3A8A] transition-all";
    } else {
        grid.classList.add('hidden');
        list.classList.remove('hidden');
        btnE.className = "px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest bg-[#1E3A8A] text-white transition-all";
        btnS.className = "px-8 py-2 rounded-full text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-[#1E3A8A] transition-all";
    }
}