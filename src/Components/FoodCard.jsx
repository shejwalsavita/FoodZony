
function FoodCard({ item, onAddToCart }) {
  return (
    <div className="col-md-4 col-sm-6 mb-4 ">
      <div className="card h-100 shadow-sm fade-in" >
        <img src={item.image} className="card-img-top img-fluid"  alt={item.name} />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <strong>₹{item.price}</strong>
          <button
            className="btn btn-sm btn-success"
            onClick={() => onAddToCart(item)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;