function loadHTML(selector, file) {
    fetch(file)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${file}`);
            return response.text();
        })
        .then(data => {
            document.querySelector(selector).innerHTML = data;
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("#about-me", "shared/about-me.html");
    loadHTML("#work", "shared/work.html");
    loadHTML("#projects", "shared/projects.html");
    loadHTML("#contact", "shared/contact.html");
});
