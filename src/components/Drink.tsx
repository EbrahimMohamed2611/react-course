import React, { useState } from "react";

const Drink = () => {
  const [drink, setDrink] = useState({
    name: "Americano",
    description:
      "Coffee Stock Photos, Images and Backgrounds for Free Download",
    price: "55$",
    ingredients: {
      milk: "50% fats",
      sugar: "Stevia",
    },
  });

  const [coffeTags, setCoffeTags] = useState([
    "Espresso",
    "Cappuccino",
    "Mocha",
  ]);

  const handleUpdatePrice = () => {
    // drink.price = 60; // wrong and not working becouse the state immutable object
    // should create new object
    const newDrink = {
      ...drink,
      price: "66$",
      ingredients: {
        ...drink.ingredients,
        sugar: "Sweetal zero calories",
      },
    };
    setDrink(newDrink);
  };

  const handleAddNewTag = () => {
    // Add to the array
    setCoffeTags([
      ...coffeTags,
      "Iced Coffees",
      "Lattes",
      "Breve",
      "Macchiatos",
      "Cortado",
    ]);
  };

  const handleRemoveCoffeTag = (tagName: string) => {
    setCoffeTags(coffeTags.filter((tage) => tagName !== tage));
  };

  const handleUpdate = (tageName: string) => {
    setCoffeTags(
      coffeTags.map((tage) => (tage === "Lattes" ? "New Lattes" : tage))
    );
  };

  return (
    <div>
      <div className="card " style={{ margin: "10px", width: "282px" }}>
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/025/282/026/small_2x/stock-of-mix-a-cup-coffee-latte-more-motive-top-view-foodgraphy-generative-ai-photo.jpg"
          className="card-img-top"
          alt="{drink.name}"
        />
        <div className="card-body">
          <h5 className="card-title">{drink.name}</h5>
          <p className="card-text">{drink.description}</p>
          <h6 className="card-subtitle mb-2 text-muted">Ingredients</h6>

          <div className="card mb-2">
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> {drink.ingredients.milk}</li>
              <li className="list-group-item"> {drink.ingredients.sugar}</li>
            </ul>
          </div>
          <button onClick={handleUpdatePrice} className="btn btn-primary">
            Update the Price !{" "}
            <span className="badge bg-warning"> {drink.price}</span>
          </button>
          <h6 className="card-subtitle mb-2  mt-2">Coffee Tags</h6>
          <button onClick={handleAddNewTag} className="btn btn-primary">
            Add new Tage
          </button>
          <div className="d-flex m-1 flex-row">
            {coffeTags.map((tage, index) => (
              <>
                {/* <button
                  onClick={() => handleUpdate(tage)}
                  className="btn btn-primary btn-sm"
                >
                  Update
                </button> */}
                <span
                  onClick={() => handleRemoveCoffeTag(tage)}
                  className="m-1 badge bg-dark"
                  key={index}
                >
                  {tage}
                </span>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drink;
