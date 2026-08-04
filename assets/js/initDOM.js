async function loadComponent(id, file) {
    await fetch(file).then(r => r.text()).then((v) => {
        document.getElementById(id).innerHTML = v;
    }).catch((e) => alert("Lỗi trang"))
}

function initSearchParam() {
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get("search");
    const searchInput = document.querySelector("#search-input");
    searchInput.value = searchQuery;

    try {
        const searchQuerySpan = document.querySelector("#search-query");
        searchQuerySpan.textContent = searchQuery;
    } catch (error) {
        // console.log("No search query span found");
    }
}

async function main() {
    await loadComponent("header", "components/header.html");
    await loadComponent("footer", "components/footer.html");
    initSearchParam();
}

document.addEventListener("DOMContentLoaded", main)