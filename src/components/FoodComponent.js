const FoodComponent = ({ name, image_url }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image_url} alt={name} />
      </div>
      <div className="card-title">{name}</div>
    </div>
  );
};

export default FoodComponent;
