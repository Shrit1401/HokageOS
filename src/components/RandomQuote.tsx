import React from "react";

interface RandomQuoteProps {
  quote: { quote: string; author: string } | null;
}

const RandomQuote: React.FC<RandomQuoteProps> = ({ quote }) => (
  <div className="text-center w-[50%] gap-5 flex flex-col">
    shrit.
    <div className="text-center">
      {quote && (
        <>
          <p className="text-2xl">{quote.quote}</p>
          <p className="text-xl opacity-50">
            {quote.author === "Unknown" ? "" : quote.author}
          </p>
        </>
      )}
    </div>
  </div>
);

export default RandomQuote;
