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
    loadHTML("#about-me", "index/about-me.html");
    loadHTML("#work", "index/work.html");
    loadHTML("#projects", "index/projects.html");
    loadHTML("#contact", "index/contact.html");
});
