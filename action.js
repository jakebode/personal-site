main = document.getElementById("content")

function changeBorderColor() {
    let pageUrl = window.location.href;
    if (pageUrl === "file:///C:/Users/jbode/projects/personal-site/index.html") {
        main.style.border = "solid 15px #FFF";
    } else if (pageUrl === "file:///C:/Users/jbode/projects/personal-site/about.html") {
        main.style.border = "solid 15px var(--color-1)";
    } else if (pageUrl === "file:///C:/Users/jbode/projects/personal-site/projects.html") {
        main.style.border = "solid 15px var(--color-2)";
    } else if (pageUrl === "file:///C:/Users/jbode/projects/personal-site/reflection.html") {
        main.style.border = "solid 15px var(--color-3)";
    } else if (pageUrl === "file:///C:/Users/jbode/projects/personal-site/contact.html") {
        main.style.border = "solid 15px var(--color-4)";
    }
}

changeBorderColor()