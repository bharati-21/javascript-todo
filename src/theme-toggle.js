const themeToggleCheckbox = document.querySelector('#theme-toggle-checkbox');
const body = document.querySelector('body');
themeToggleCheckbox.addEventListener('click', toggleTheme);

function toggleTheme() {
    if(body.classList.contains('light-theme')) {
        body.className = 'dark-theme';
    }
    else {
        body.className = 'light-theme';
    }
}