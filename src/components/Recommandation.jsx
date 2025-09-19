export default function Recommendation({ type, country, description, images }) {
  // Make sure images is always an array
  const imagesArray = Array.isArray(images) ? images : [images];

  return (
    <div className="recommendation">
      <h2>
        {type} Recommendation: {country}
      </h2>
      <p>{description}</p>
      <div className="images">
        {imagesArray.map((img, index) => (
          <img key={index} src={img} alt={`${type} ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}
