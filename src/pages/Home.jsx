import React from "react";
import Recommendation from "../components/Recommandation";
import SearchResults from "../components/SearchResults";

export default function Home({ data, searchTriggered, query, results }) {
  // Show intro and either full featured recommendations or search results
  return (
    <div className="page">
      <section className="intro">
        <h1>Discover Your Next Adventure</h1>
        <p className="lead">
          Personalized travel recommendations — beaches, temples, and countries.
          Use the search bar above to find recommendations.
        </p>
      </section>

      {/* If user searched, show search results inline on Home */}
      {searchTriggered ? (
        <SearchResults query={query} results={results} />
      ) : (
        <>
          <h2>Featured Recommendations</h2>
          <div className="results-grid">
            {/* Show a representative selection: first beach, first temple, first country */}
            {data
              .filter((it, idx) => idx < 6) // show some items
              .map((item) => (
                <Recommendation key={item.id} item={item} />
              ))}
          </div>
        </>
      )}
    </div>
  );
}
