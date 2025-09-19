import React from "react";
import Recommendation from "./Recommandation";
import { Link } from "react-router-dom";

export default function SearchResults({ query, results }) {
  const q = (query || "").trim();

  return (
    <div className="page">
      <h2>Search Results{q ? ` for "${q}"` : ""}</h2>

      {!q && (
        <div className="info">
          Type <strong>beach</strong>, <strong>temple</strong>, or{" "}
          <strong>country</strong> and press Search.
        </div>
      )}

      {q && results.length === 0 && (
        <div className="no-results">
          No results found. Try another keyword or{" "}
          <Link to="/">go back home</Link>.
        </div>
      )}

      <div className="results-grid">
        {results.map((item) => (
          <Recommendation key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
