function renderServiceItem(serviceItem) {
    return `
    <li>
        <a href="#">
            <div class="image">
                <img src="${serviceItem.image}" alt="" srcset="">
            </div>
            <div class="service-title">${serviceItem.title}</div>
        </a>
    </li>
    `
}

function loadServiceList() {
    const serviceList = document.querySelector("#service-list")
    fetch("assets/data/service-home.json").then(r => r.json()).then((v) => {
        v.forEach((item, index) => {
            serviceList.innerHTML += renderServiceItem(item)
        })
    })
    .catch((e) => {
        alert("Lỗi tải dịch vụ")
    })
}


function main() {
    try {
        loadServiceList()
    } catch (e) {
        
    }
}

document.addEventListener("DOMContentLoaded", main)


