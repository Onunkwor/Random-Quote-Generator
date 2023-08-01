let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {quote: `"Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference."`
    , person: "Robert Frost"},
    {quote: `"The most difficult thing is the decision to act, the rest is merely tenacity."`
    , person: "Amelia Earhart"},
    {quote: `"Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails.  Explore, Dream, Discover."`
    , person: "Mark Twain"},
    {quote: `"The most common way people give up their power is by thinking they don’t have any."`
    , person: "Alice Walker"},
    {quote: `"The best time to plant a tree was 20 years ago. The second best time is now."`
    , person: "Chinese Proverb"},
    {quote: `"Eighty percent of success is showing up."`
    , person: "Woody Allen"},
    {quote: `"It matters not what someone is born, but what they grow to be."`
    , person: "Master Oogway"},
    {quote: `"Quit, don’t quit. Noodles, don’t noodles… You are too concerned with what was and what will be. There’s a saying: Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present."`
    , person: "Master Oogway"},
    {quote: `"The more you take, the less you have."`
    , person: "Master Oogway"},
    {quote: `"One often meets his destiny on the road he takes to avoid it."`
    , person: "Master Oogway"},
    {quote: `"There are no accidents"`
    , person: "Master Oogway"},
    {quote: `"There is just news. There is no good or bad."`
    , person: "Master Oogway"},
    {quote: `"There is no good or bad without us, there is only perception. There is the event itself and the story we tell."`
    , person: "Ryan Holiday"}
];

btn.addEventListener('click', function() {
    
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})