interface Props {
  items: { id: number; title: string; imgUrl: string; description: string }[];
  remove: (id: number) => void;
}
const Cart = ({ items, remove }: Props) => {
  return (
    <>
      {items.map((item, index) => (
        <div
          key={index}
          className="card "
          style={{ margin: "10px", width: "282px" }}
        >
          <img
            src={item.imgUrl}
            className="card-img-top pt-2"
            alt="{drink.name}"
          />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <h6 className="card-subtitle mb-2 text-muted">Ingredients</h6>
            <button
              onClick={() => {
                remove(item.id);
              }}
              type="button"
              className="btn btn-outline-danger"
            >
              remove
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Cart;
