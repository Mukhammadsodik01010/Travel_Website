import Recommendation from "../components/Recommandation";

const recommendations = [
  {
    type: "Beach",
    country: "Maldives",
    images:
      "https://t3.ftcdn.net/jpg/02/43/25/90/360_F_243259090_crbVsAqKF3PC2jk2eKiUwZHBPH8Q6y9Y.jpg",
    description:
      "Relax on pristine white sand beaches and enjoy crystal-clear waters.",
  },
  {
    type: "Temple",
    country: "Thailand",
    images:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpTqNLc2NgBnf612YwHobIdauxmQDkweNQhA&s",
    description: "Discover ancient temples and rich cultural heritage.",
  },
  {
    type: "Country",
    country: "Japan",
    images:
      "https://www.commonwealthfund.org/sites/default/files/styles/countries_hero_desktop/public/country_image_Japan.jpg?h=fcdfd899&itok=bPWz69YA",
    description:
      "Experience modern cities, traditional shrines, and stunning landscapes.",
  },
];

export default function Home() {
  return (
    <div className="page">
      <section className="intro">
        <h1>Discover Your Next Adventure</h1>
        <p>
          Explore destinations based on your preferences with personalized
          suggestions.
        </p>
      </section>
      <section className="recommendations-section">
        {recommendations.map((rec, index) => (
          <Recommendation key={index} {...rec} />
        ))}
      </section>
    </div>
  );
}
