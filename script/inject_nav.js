function initNav() {
    fetch('nav.html')  // Fetches the content of the nav.html file
        .then(res => res.text())  // Wait for the response and parse it as text
        .then(text => {
            let oldelem = document.querySelector("nav#navbar");  // Find the nav element
            oldelem.innerHTML = text;  // Inject the nav content
        });
}
