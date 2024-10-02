import React, { useState } from 'react';

const quotes = [
    "1. “Life is very short and anxious for those who forget the past, neglect the present, and fear the future.” – Seneca",
    "2. “Life is what happens when you’re busy making other plans.”",
    "3. “You only live once, but if you do it right, once is enough.”",
    "4. “In the end, we will remember not the words of our enemies, but the silence of our friends.”",
    "5. “Waste no more time arguing what a good man should be. Be One.” – Marcus Aurelius",
    "6. “How long are you going to wait before you demand the best for yourself?” – Epictetus"
    
];

export default function QuoteGenerator() {
    const [quoteIndex, setQuoteIndex] = useState(0); 

    const incrementQuote = () => {
        setQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length); 
    };
    const randomQuote = () => {
        let randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * quotes.length);
        } while (randomIndex === quoteIndex); 
        setQuoteIndex(randomIndex); 
    };
    /* dating code
        const randomIndex = Math.floor(Math.random() * quotes.length);
        setQuoteIndex(randomIndex); 
    */

    return (
        <>
            <div className="container">
                <p className="counter-container">
                    {quotes[quoteIndex]}
                </p>
                &nbsp;
                <button className="button-container" onClick={incrementQuote}>Increment</button>
                <button className="button-container" onClick={randomQuote}>Random</button>
            </div>
        </>
    );
}
