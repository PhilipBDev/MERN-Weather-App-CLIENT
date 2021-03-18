// Insert ZIP or city. Geolocation.
// Location, Image, Temp

const LocationForm = () => {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="location"
          placeholder="Type zip code or city here.."
        />
      </form>
    </div>
  );
};

export default LocationForm;
