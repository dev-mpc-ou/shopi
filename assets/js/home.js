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

function renderShopeeMallItem(shopeeMallItem) {
    return `
    <li class="shopeemall-item">
        <div class="shopeemall-item-content">
            <a class="shopeemall-shop" href="#" target="_self">
                <div class="shopeemall-item-img-wrapper">
                    <img src="${shopeeMallItem.image}"
                        class="shopeemall-image">
                </div>
            </a>
            <div class="shopeemall-text">${shopeeMallItem.promotion}</div>
        </div>
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
            console.log(e)
        })
}

async function loadCategoriesList() {
    const categoriessList = document.querySelector(".categories-box")
    await fetch("assets/data/categories.json").then(r => r.json()).then((v) => {
        v.forEach((item, index) => {
            categoriessList.innerHTML += renderCategoryItem(item)
        })
    })
        .catch((e) => {
            console.log(e)
        })

    // ----
    let categoriessListPos = 0;


    const categoriesLeftBtn = document.querySelector("#categories-left-button")
    const categoriesRightBtn = document.querySelector("#categories-right-button")
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

}

async function loadShopeeMallList() {
    const shopeeMallList = document.querySelector(".shopeemall-items");
    await fetch("assets/data/shopi-maill.json").then(r => r.json()).then((v) => {
        v.forEach((item, index) => {
            shopeeMallList.innerHTML += renderShopeeMallItem(item)
        })
    })
        .catch((e) => {
            // alert("Lỗi tải dịch vụ")
            console.log(e)
        }).finally(() => {
            shopeeMallList.innerHTML +=
                `<li class="shopeemall-item">
                    <button class="shopeemall-header-next-btn">
                        <a class="shopeemall-header-next-btn-wrapper">
                            <div class="shopeemall-header-next-btn-text">Xem tất cả</div>
                            <div class="shopeemall-header-next-btn-icon">
                                <i class="bi bi-chevron-right"></i>
                            </div>
                        </a>
                    </button>
                </li>`
        })

    // ---
    let shopeeMallListPos = 0;

    const shopeeMallLeftBtn = document.querySelector
        ("#shopeemall-left-button")
    const shopeeMallRightBtn = document.querySelector
        ("#shopeemall-right-button")
    const shopeemallBox = document.querySelector
        (".shopeemall-box")

    shopeeMallRightBtn.addEventListener("click", () => {
        if (shopeeMallListPos - shopeemallBox.clientWidth > -shopeeMallList.scrollWidth) {
            shopeeMallListPos -= shopeemallBox.clientWidth
        }
        console.log(shopeeMallListPos)
        shopeeMallList.style.left = `${shopeeMallListPos}px`
    })

    shopeeMallLeftBtn.addEventListener("click", () => {
        if (shopeeMallListPos < 0) {
            shopeeMallListPos += shopeemallBox.clientWidth
        }
        shopeeMallList.style.left = `${shopeeMallListPos}px`
    })
}

async function flashsaleProductList() {
    const flashsaleProductList = document.querySelector(".flashsale-box")
    await fetch("assets/data/flashsale-products.json").then(r => r.json()).then((v) => {
        v.forEach((item, index) => {
            flashsaleProductList.innerHTML += renderFlashsaleProductItem(item)
        })
    })
        .catch((e) => {
            console.log(e)
        })
    // -----------------
    let flashsaleProductListPos = 0;

    const flashsaleProductLeftBtn = document.querySelector("#flashsale-left-button")
    const flashsaleProductRightBtn = document.querySelector("#flashsale-right-button")
    const flashsaleProductListtWapper = document.querySelector(".flashsale-box-wapper")

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
        loadShopeeMallList()
        flashsaleProductList()
        runCooldownFlashsale()
    } catch (e) {

    }
}

document.addEventListener("DOMContentLoaded", main)


