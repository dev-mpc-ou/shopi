function loadComponent(id, file) {
    fetch(file).then(r => r.text()).then((v) => {
        document.getElementById(id).innerHTML = v;
    }).catch((e) => alert("Lỗi trang"))
}


function main() {
    loadComponent("header", "components/header.html");
    loadComponent("footer", "components/footer.html");
}

document.addEventListener("DOMContentLoaded", main)