
import './PropertyItem.css';

const PropertyItem = ({ property, addToCart }) => {
  return (
    <div className="property-item">
      <img src={property.image} alt={property.title} className="property-item-image" />
      <div className="property-item-details">
        <h2 className="property-item-title">{property.title}</h2>
        <p className="property-item-location">{property.location}</p>
        <p className="property-item-price">${property.price}</p>
        <p className="property-item-bedrooms">{property.bedrooms} Bedrooms</p>
        <button onClick={() => addToCart(property)} className="property-item-button">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default PropertyItem;
