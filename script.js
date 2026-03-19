let quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
];

let btn = document.getElementById("btn");
let quoteElement = document.getElementById("quote");

btn.addEventListener("click", function() {
    let randomIndex= Math.floor(Math.random()*quotes.length);
    quoteElement.textContent = quotes[randomIndex];
    quoteElement.style.fontStyle = "italic";
});
