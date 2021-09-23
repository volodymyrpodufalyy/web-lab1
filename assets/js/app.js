async function app () {
    const shares_container = document.getElementById('shares_container');
    const sort_btn = document.getElementById('sort_btn');
    const search_input = document.getElementById('search_input');
    const total_price = document.getElementById('total_price');

    let search_term = '';

    let shares = [];

    const url = 'http://localhost:7070/shares';
    const res = await fetch(url);
    shares = await res.json();
    shares.map(item => createSharesCard(item));

    const sum = (items, prop) => {
        return items.reduce( function(a, b){
            return a + b[prop];
        }, 0);
    };

    total_price.innerText = `Total price: ${sum(shares, 'price')}`;

    search_input.addEventListener('input', e => {
        search_term = e.target.value.toLowerCase();
        shares_container.innerHTML = ``;
        shares.filter((item) => {
            return (
              item.brand.toLowerCase().includes(search_term)
            );
          }).map(item => createSharesCard(item));
    });

    const handleSortButtonClick = () => {
        shares = shares.sort((a, b) => a.price - b.price);
        sharesshares.map(item => createSharesCard(item));_container.innerHTML = ``;
        shares.map(item => createSharesCard(item));
    }

    sort_btn.addEventListener('click', handleSortButtonClick);


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
                <div class="details">Buying date: ${share.buyingDate}</div>
                <div class="details">Risk level: ${share.riskLevel.toLowerCase()}</div>
                <div class="details">Category: ${share.sharesCategory}</div>
                <div class="details">Trading level: ${share.tradingLevel.toLowerCase()}</div>
            </div>
        `;

        shareEl.innerHTML = shareInnerHTML;

        shares_container.appendChild(shareEl);
    }
}


app();
