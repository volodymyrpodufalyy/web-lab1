function createSharesCard(share) {
    const shareEl = document.createElement('li');
    shareEl.classList.add('share');

    const brand = share.brand[0].toUpperCase() + share.brand.slice(1);
    
    const shareInnerHTML = `
        <div class="img-container">
            <img src="/assets/images/stock-market.png" alt="${brand}" />
        </div>
        <div class="info">
            <span class="number">#${share.id.toString().padStart(3, '0')}</span>
            <h3 class="name">${brand}</h3>
            <div class="details">Price: ${share.price}</div>
            <div class="details">Risk level: ${share.riskLevel.toLowerCase()}</div>
        </div>
    `;

    shareEl.innerHTML = shareInnerHTML;

    shares_container.appendChild(shareEl);
}

export default createSharesCard;
