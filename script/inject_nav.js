function initNav() {
    fetch('nav.html')
        .then((res) => {
            if (!res.ok) throw new Error("Failed to load nav.html");
            return res.text();
        })
        .then((text) => {
            const navElem = document.querySelector("nav#navbar");
            navElem.innerHTML = text;
        })
        .catch((err) => console.error(err));
}
