// title , author name, genre, short description, price, seller, buyNow -method that shows price and seller, learnMore - method that shows name, genre, and short description.

let myCurrentBook = {
    title: "The Final Empire",
    author: "Brandon Sanderson",
    genre: "Fantasy",
    series: {
        name: "Mistborn",
        index: 1,
    },
    desc: `<p>For a thousand years the ash fell and no flowers bloomed. For a thousand years the Skaa slaved in misery and lived in fear. For a thousand years the Lord Ruler, the "Sliver of Infinity," reigned with absolute power and ultimate terror, divinely invincible. Then, when hope was so long lost that not even its memory remained, a terribly scarred, heart-broken half-Skaa rediscovered it in the depths of the Lord Ruler's most hellish prison. Kelsier "snapped" and found in himself the powers of a Mistborn. A brilliant thief and natural leader, he turned his talents to the ultimate caper, with the Lord Ruler himself as the mark.</p><p>Kelsier recruited the underworld's elite, the smartest and most trustworthy allomancers, each of whom shares one of his many powers, and all of whom relish a high-stakes challenge. Only then does he reveal his ultimate dream, not just the greatest heist in history, but the downfall of the divine despot.</p><p>But even with the best criminal crew ever assembled, Kel's plan looks more like the ultimate long shot, until luck brings a ragged girl named Vin into his life. Like him, she's a half-Skaa orphan, but she's lived a much harsher life. Vin has learned to expect betrayal from everyone she meets, and gotten it. She will have to learn to trust, if Kel is to help her master powers of which she never dreamed\.</p><p>This saga dares to ask a simple question: What if the hero of prophecy fails?</p>`,
    price: 7.19,
    seller: {
        name: "Amazon",
        URL: "https://www.amazon.com/Mistborn-Final-Empire-Brandon-Sanderson/dp/1250318548/",
    },
    buyNow: function() {
        document.getElementById("theBook").innerHTML += `<p><a href="${myCurrentBook.seller.URL}" alt="Buy ${myCurrentBook.title} for ${myCurrentBook.value} at ${myCurrentBook.seller.name} 's website ${myCurrentBook.seller.URL} .">Buy "${myCurrentBook.title}" for ${myCurrentBook.price} @ ${myCurrentBook.seller.name}</p>`;
    },
    learnMore: function() {
        document.getElementById("theBook").innerHTML = `<h2>Title: ${myCurrentBook.title}</h2><h3>Genre: ${myCurrentBook.genre}</h3><h3>Series: Book ${myCurrentBook.series.index} of ${myCurrentBook.series.name}</h3><h3>From the Cover:</h3>${myCurrentBook.desc}`;
    },
}

function theBook(){
    myCurrentBook.learnMore();
    myCurrentBook.buyNow();
}

theBook();
