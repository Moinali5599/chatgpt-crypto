document.addEventListener('DOMContentLoaded', function () {
    // Sample crypto data
    const cryptoData = [
        { name: 'Bitcoin', symbol: 'BTC', price: 50000 },
        { name: 'Ethereum', symbol: 'ETH', price: 3000 },
        { name: 'Litecoin', symbol: 'LTC', price: 150 },
        { name: 'Ripple', symbol: 'XRP', price: 1.5 },
        { name: 'Cardano', symbol: 'ADA', price: 2.5 },
        { name: 'Polkadot', symbol: 'DOT', price: 30 },
        { name: 'Dogecoin', symbol: 'DOGE', price: 0.3 },
    ];

    const cryptoListContainer = document.getElementById('crypto-list');

    // Populate crypto list
    cryptoData.forEach(crypto => {
        const cardHtml = `
            <div class="col-md-6 col-lg-4">
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${crypto.name}</h5>
                        <p class="card-text">Symbol: ${crypto.symbol}</p>
                        <p class="card-text">Price: $${crypto.price}</p>
                        <button class="btn btn-primary btn-block">Trade ${crypto.symbol}</button>
                    </div>
                </div>
            </div>
        `;
        cryptoListContainer.innerHTML += cardHtml;
    });
});
