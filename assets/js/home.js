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

function renderCategoryItem(categoryItem) {
    return `
    <li>
        <img src="${categoryItem.image}" alt="${categoryItem.title}"
            srcset="">
        <div>${categoryItem.title}</div>
    </li>
    `
}

function renderFlashsaleProductItem(flashsaleProductItem) {
    return `<li class="flashsale-product">
                <img src="${flashsaleProductItem.image}" alt="">
                <div class="flashsale-product-price">
                   ${flashsaleProductItem.price}
                </div>
                <div class="flashsale-product-quantity">
                    <div></div>
                    <span>${flashsaleProductItem.status}</span>
                </div>
            </li>`
}

function loadServiceList() {
    const serviceList = document.querySelector("#service-list")
    fetch("assets/data/service-home.json").then(r => r.json()).then((v) => {
        v.forEach((item, index) => {
            serviceList.innerHTML += renderServiceItem(item)
        })
    })
        .catch((e) => {
            console.log(e)
        })
}

function loadCategoriesList() {
    const categoriessList = document.querySelector(".categories-box")
    fetch("assets/data/categories.json").then(r => r.json()).then((v) => {
        v.forEach((item, index) => {
            categoriessList.innerHTML += renderCategoryItem(item)
        })
    })
        .catch((e) => {
            console.log(e)
        })
}

function flashsaleProductList() {
    const flashsaleProductList = document.querySelector(".flashsale-box")
    fetch("assets/data/flashsale-products.json").then(r => r.json()).then((v) => {
        v.forEach((item, index) => {
            flashsaleProductList.innerHTML += renderFlashsaleProductItem(item)
        })
    })
        .catch((e) => {
            console.log(e)
        })
}


function initEvents() {
    let categoriessListPos = 0;
    let flashsaleProductListPos = 0;

    const flashsaleProductLeftBtn = document.querySelector("#flashsale-left-button")
    const flashsaleProductRightBtn = document.querySelector("#flashsale-right-button")
    const flashsaleProductList = document.querySelector(".flashsale-box")
    const flashsaleProductListtWapper = document.querySelector(".flashsale-box-wapper")

    const categoriesLeftBtn = document.querySelector("#categories-left-button")
    const categoriesRightBtn = document.querySelector("#categories-right-button")
    const categoriessList = document.querySelector(".categories-box")
    const categoriessListWapper = document.querySelector(".categories-box-wapper")


    categoriesRightBtn.addEventListener("click", () => {

        if (categoriessListPos - categoriessListWapper.clientWidth > -categoriessList.scrollWidth) {
            categoriessListPos -= categoriessListWapper.clientWidth
        }
        categoriessList.style.left = `${categoriessListPos}px`
    })

    categoriesLeftBtn.addEventListener("click", () => {
        if (categoriessListPos < 0) {
            categoriessListPos += categoriessListWapper.clientWidth
        }
        categoriessList.style.left = `${categoriessListPos}px`
    })

    flashsaleProductRightBtn.addEventListener("click", () => {

        if (flashsaleProductListPos - flashsaleProductListtWapper.clientWidth > -flashsaleProductList.scrollWidth) {
            flashsaleProductListPos -= flashsaleProductListtWapper.clientWidth
        }
        console.log(flashsaleProductListPos)
        flashsaleProductList.style.left = `${flashsaleProductListPos}px`
    })

    flashsaleProductLeftBtn.addEventListener("click", () => {
        if (flashsaleProductListPos < 0) {
            flashsaleProductListPos += flashsaleProductListtWapper.clientWidth
        }
        flashsaleProductList.style.left = `${flashsaleProductListPos}px`
    })
}

function runCooldownFlashsale() {
    const clockE = document.querySelector(".flashsale-clock");
    const endTime = new Date("2026-08-01T00:00:00");

    const timer = setInterval(() => {
        const now = new Date();
        const diff = endTime - now;

        if (diff <= 0) {
            clearInterval(timer);
            clockE.textContent = "00:00:00";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor(diff / (1000 * 60 * 60)) % 24;
        const minutes = Math.floor(diff / (1000 * 60)) % 60;
        const seconds = Math.floor(diff / 1000) % 60;

        clockE.textContent =
            `${days}d ${String(hours).padStart(2, "0")}:` +
            `${String(minutes).padStart(2, "0")}:` +
            `${String(seconds).padStart(2, "0")}`;
    }, 1000);
}

function main() {

    try {
        loadServiceList()
        loadCategoriesList()
        flashsaleProductList()
        initEvents()
        runCooldownFlashsale()
    } catch (e) {

    }
}

document.addEventListener("DOMContentLoaded", main)


