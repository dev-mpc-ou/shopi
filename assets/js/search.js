function renderPrice(price) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(price);
}

function renderResultItem(resultItem) {
    return `
    <div class="search-result-item">
        <div class="search-result-item-image">
            <img src="${resultItem.image}"
                alt="${resultItem.title}" />
        </div>
        <div class="search-result-item-info">
            <div class="search-result-item-title">
                <a href="${resultItem.url}">
                    <span>Yêu thích</span>
                    ${resultItem.title}
                </a>
            </div>
            
            <div class="search-result-item-price">
                <span class="discounted-price">${renderPrice(resultItem.discountedPrice)}</span>
                ${(resultItem.listedPrice && resultItem.discountPercentage) ? `
                    <span class="listed-price">${renderPrice(resultItem.listedPrice)}</span>
                    <span class="discount-percentage">
                        ${resultItem.discountPercentage}
                    </span>
                `: ""}
            </div>
            <div class="search-result-item-promotional-tag">
                <span> ${resultItem.promotionalTag}</span>
                <span>Free ship</span>
            </div>
            <div class="search-result-item-traffic">
                <span class="rate">
                    ${resultItem.rating}
                    <i class="bi bi-star-fill"></i>
                </span>
                <span class="sold">${resultItem.soldCount}</span>
            </div>
            <div class="search-result-item-shipping">
                <span class="shipping-time">
                    <i class="bi bi-truck"></i>
                    ${resultItem.delivery}
                </span>
                <span class="shipping-from">
                    <i class="bi bi-geo-alt-fill"></i>
                    ${resultItem.location}
                </span>
            </div>
        </div>
    </div>
    `
}

async function initResutlItems() {
    const resultItemList = document.querySelector(".search-results-content")
    await timeout(2000)
    fetch("assets/data/sample-products-cleaned.json").then(r => r.json()).then((v) => {
        resultItemList.innerHTML = ""
        v.forEach((item, index) => {
            resultItemList.innerHTML += renderResultItem(item)
        })
    })
        .catch((e) => {
            console.log(e)
        })
}

async function main() {
    initResutlItems()

}

document.addEventListener("DOMContentLoaded", main)