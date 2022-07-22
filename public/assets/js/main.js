const ligthsToogleButton = document.getElementById('lights-toggle-button');


const addDarkStyle = (toggleButton) => {
    toggleButton.addEventListener('change', () => {
        document.body.classList.toggle('dark');
    });
}