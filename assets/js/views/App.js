import createSharesCard from "../components/SharesCard.js";

async function App () {
    const app_container = document.getElementById('app');
    app_container.innerHTML = `<ul id="shares_container" class="shares__list"></ul>`;

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

    console.log(shares, 'shares');

    const sum = (items, prop) => {
        return items.reduce( function(a, b){
            return a + b[prop];
        }, 0);
    };

    total_price.innerText = `Total price: ${sum(shares, 'price')}`;


    const handleSearchInput = (e) => {
        search_term = e.target.value.toLowerCase();
        shares_container.innerHTML = ``;
        shares.filter((item) => {
            return (
              item.brand.toLowerCase().includes(search_term)
            );
          }).map(item => createSharesCard(item));
    }

    const handleSortButtonClick = () => {
        shares = shares.sort((a, b) => a.price - b.price);
        shares_container.innerHTML = ``;
        shares.map(item => createSharesCard(item));
        shares.map(item => createSharesCard(item));
    }

    search_input.addEventListener('input', handleSearchInput);

    sort_btn.addEventListener('click', handleSortButtonClick);

}


export default App;
