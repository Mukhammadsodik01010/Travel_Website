import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SearchResults from "./components/SearchResults";

/*
  Master data array used across the app.
  Each item has: id, type ("beach"|"temple"|"country"), name, images (array), description, createdAt
*/
const DATA = [
  // Beaches (>= 2)
  {
    id: 1,
    type: "beach",
    name: "Sunny Cove",
    images: [
      "https://t3.ftcdn.net/jpg/02/43/25/90/360_F_243259090_crbVsAqKF3PC2jk2eKiUwZHBPH8Q6y9Y.jpg",
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    ],
    description: "White sand, calm water — perfect for relaxation.",
    createdAt: "2024-01-10",
  },
  {
    id: 2,
    type: "beach",
    name: "Coral Bay",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=801&q=80",
      "https://images.unsplash.com/photo-1501959915551-4e8b2a9f8d9a?w=800&q=80",
    ],
    description: "Great snorkeling and coral reefs nearby.",
    createdAt: "2024-02-01",
  },

  // Temples (>= 2)
  {
    id: 3,
    type: "temple",
    name: "Golden Temple",
    images: [
      "https://images.unsplash.com/photo-1549880338-65ddcdfd017b?w=800&q=80",
      "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=800&q=80",
    ],
    description: "Ancient architecture with serene gardens.",
    createdAt: "2023-12-05",
  },
  {
    id: 4,
    type: "temple",
    name: "Ancient Shrine",
    images: [
      "https://images.unsplash.com/photo-1526481280698-3f2f4c8e7bd7?w=800&q=80",
      "https://images.unsplash.com/photo-1471973038589-11a1f6a2fb6a?w=800&q=80",
    ],
    description: "A quiet place full of cultural history.",
    createdAt: "2024-03-12",
  },

  // Countries (>= 2)
  {
    id: 5,
    type: "country",
    name: "Japan",
    images: [
      "https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Japan.jpg?h=fcdfd899&itok=bPWz69YA",
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    ],
    description: "Modern cities, traditional shrines, beautiful scenery.",
    createdAt: "2023-08-20",
  },
  {
    id: 6,
    type: "country",
    name: "Greece",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=802&q=80",
      "https://images.unsplash.com/photo-1505765050938-13fe3e4a6d6b?w=800&q=80",
    ],
    description: "Historic ruins, islands, and great food.",
    createdAt: "2024-04-18",
  },

  // extra items to make search and UI realistic
  {
    id: 7,
    type: "beach",
    name: "Lagoon Point",
    images: [
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=803&q=80",
      "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=800&q=80",
    ],
    description: "Hidden lagoon with crystal clear water.",
    createdAt: "2024-06-05",
  },
];

export default function App() {
  const [query, setQuery] = useState("");
  const [searchTriggered, setSearchTriggered] = useState(false);

  // compute filtered results (case-insensitive substring match on name or type or description)
  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return DATA.filter(
      (item) =>
        item.type.toLowerCase().includes(q) ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q)
    );
  }, [query]);

  const handleSearch = (q) => {
    setQuery(q);
    setSearchTriggered(true);
  };

  const handleClear = () => {
    setQuery("");
    setSearchTriggered(false);
  };

  return (
    <Router>
      <Navbar
        query={query}
        setQuery={setQuery}
        onSearch={() => handleSearch(query)}
        onClear={handleClear}
      />
      <div className="container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                data={DATA}
                searchTriggered={searchTriggered}
                query={query}
                results={results}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/search"
            element={<SearchResults query={query} results={results} />}
          />
        </Routes>
      </div>
    </Router>
  );
}
