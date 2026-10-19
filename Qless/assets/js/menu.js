const menuToggle = document.querySelector(".menu-toggle");
const navigationMenu = document.querySelector(".nav-menu");

if (menuToggle && navigationMenu) {
    const closeMenu = () => {
        navigationMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Buka menu navigasi");
        menuToggle.innerHTML = '<i class="fa-solid fa-bars" aria-hidden="true"></i>';
    };

    menuToggle.addEventListener("click", () => {
        const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

        navigationMenu.classList.toggle("is-open", !isOpen);
        menuToggle.setAttribute("aria-expanded", String(!isOpen));
        menuToggle.setAttribute("aria-label", isOpen ? "Buka menu navigasi" : "Tutup menu navigasi");
        menuToggle.innerHTML = `<i class="fa-solid fa-${isOpen ? "bars" : "xmark"}" aria-hidden="true"></i>`;
    });

    navigationMenu.addEventListener("click", (event) => {
        if (event.target.closest("a")) {
            closeMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape" && menuToggle.getAttribute("aria-expanded") === "true") {
            closeMenu();
            menuToggle.focus();
        }
    });

    document.addEventListener("click", (event) => {
        const clickPath = event.composedPath();

        if (!clickPath.includes(navigationMenu) && !clickPath.includes(menuToggle)) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 900) {
            closeMenu();
        }
    });
}

