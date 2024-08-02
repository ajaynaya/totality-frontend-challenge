
import PropertyItem from './PropertyItem';
import { properties } from '../utilities/data';
import './PropertyList.css';

const PropertyList = ({ addToCart, filters }) => {
  if (!filters) return null; 

  const filteredProperties = properties.filter(property => {
    return (
      (filters.location === "" || property.location === filters.location) &&
      (filters.price === "" || (property.price >= parseInt(filters.price.split('-')[0]) && property.price <= parseInt(filters.price.split('-')[1]))) &&
      (filters.bedrooms === "" || property.bedrooms === parseInt(filters.bedrooms))
    );
  });

  return (
    <div className="property-list">
      {filteredProperties.map(property => (
        <PropertyItem key={property.id} property={property} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default PropertyList;
