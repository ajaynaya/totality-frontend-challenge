
import './Filter.css';

const Filter = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  return (
    <div className="filter">
      <label>
        Location:
        <select name="location" value={filters.location} onChange={handleChange}>
          <option value="">All Locations</option>
          <option value="New York, NY">New York, NY</option>
          <option value="Lake Tahoe, CA">Lake Tahoe, CA</option>
          <option value="Malibu, CA">Malibu, CA</option>
          <option value="Chicago, IL">Chicago, IL</option>
          <option value="Aspen, CO">Aspen, CO</option>
          <option value="Miami, FL">Miami, FL</option>
          <option value="Nashville, TN">Nashville, TN</option>
          <option value="San Francisco, CA">San Francisco, CA</option>
          <option value="Los Angeles, CA">Los Angeles, CA</option>
          <option value="Portland, OR">Portland, OR</option>
        </select>
      </label>

      <label>
        Price Range:
        <select name="price" value={filters.price} onChange={handleChange}>
          <option value="">All Prices</option>
          <option value="0-100">$0 - $100</option>
          <option value="100-200">$100 - $200</option>
          <option value="200-300">$200 - $300</option>
          <option value="300-400">$300 - $400</option>
        </select>
      </label>

      <label>
        Bedrooms:
        <select name="bedrooms" value={filters.bedrooms} onChange={handleChange}>
          <option value="">Any</option>
          <option value="1">1 Bedroom</option>
          <option value="2">2 Bedrooms</option>
          <option value="3">3 Bedrooms</option>
          <option value="4">4 Bedrooms</option>
        </select>
      </label>
    </div>
  );
};

export default Filter;
