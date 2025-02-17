import { useState } from "react";

function FishForm({ data, onAdd }) {
  const [valid, setValid] = useState(false);
  const [newFish, setNewFish] = useState({
    id: data.length > 0 ? Math.max(...data.map((fish) => fish.id)) + 1 : 1,
    name: "",
    type: "mala",
  });

  const HandleChange = (e) => {
    const source = e.target.id;
    const val = e.target.value;
    let updatedFish;
    switch (source) {
      case "name": {
        updatedFish = { ...newFish, name: val };
        break;
      }
      case "type-velka": {
        updatedFish = { ...newFish, type: "velka" };

        break;
      }
      case "type-mala": {
        updatedFish = { ...newFish, type: "mala" };

        break;
      }
      default:
        break;
    }
    setNewFish(updatedFish);
    validateData(updatedFish);
  };

  const validateData = (fish) => {
    if (fish.name.trim().length === 0 || fish.type.trim().length === 0) {
      setValid(false);
    } else {
      setValid(true);
    }
  };
  const resetNewFish = () => {
    const temp = {
      id: newFish.id + 1,
      name: "",
      type: "mala",
    };
    setNewFish(temp);
    validateData(temp);
  };

  return (
    <div className="row">
      <div className="col-2">
        <input
          type="text"
          id="name"
          placeholder="Jmeno"
          value={newFish.name}
          onChange={HandleChange}
        />
      </div>
      <div className="col-2">
        <label htmlFor="type-velka">Velká</label>
        <input
          name="radio"
          type="radio"
          id="type-velka"
          value={newFish.type}
          onChange={HandleChange}
          checked={newFish.type === "velka"}
        />
      </div>
      <div className="col-2">
        <label htmlFor="type-mala">Malá</label>
        <input
          name="radio"
          type="radio"
          id="type-mala"
          value={newFish.type}
          checked={newFish.type === "mala"}
          onChange={HandleChange}
        />
      </div>
      <div className="col-2">
        <button
          disabled={!valid}
          onClick={() => {
            onAdd(newFish);
            resetNewFish();
          }}>
          Odeslat
        </button>
      </div>
    </div>
  );
}

export default FishForm;
