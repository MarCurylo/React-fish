import { useState } from "react";
import "./App.css";
import rawFish from "./fishList.json";
import FishList from "./components/FishList";
import FishForm from "./components/FishForm";
import FishTankForm from "./components/FishTankForm";

function App() {
  const [activeTab, setActiveTab] = useState(1);

  const [listOfFish, setListOFFish] = useState(rawFish.fish);

  const handleDelete = (idToDelete) => {
    const temp = listOfFish.filter((fish) => fish.id !== idToDelete);
    setListOFFish(temp);
  };

  const handleAdd = (fishToAdd) => {
    setListOFFish([...listOfFish, fishToAdd]);
  };

  return (
    <>
      <div className="container">
        <div className="row text-center">
          <div className="col">
            <h1>Vejdou se ryby do akvária?</h1>
            <div>
              <button
                className={`btn btn-primary ${
                  activeTab === 1 ? "btn-secondary" : ""
                }`}
                name="list-of-dogs"
                onClick={() => setActiveTab(1)}>
                Seznam ryb
              </button>
              <button
                className={`btn btn-primary ${
                  activeTab === 2 ? "btn-secondary" : ""
                }`}
                name="shelter-storage"
                onClick={() => setActiveTab(2)}>
                Výběr Akvaria
              </button>
            </div>
          </div>
        </div>
        {activeTab === 1 && (
          <>
            <FishList data={listOfFish} onDelete={handleDelete} />
            <FishForm data={listOfFish} onAdd={handleAdd} />
          </>
        )}
        {activeTab === 2 && (
          <>
            <FishTankForm data={listOfFish} />
          </>
        )}
      </div>
    </>
  );
}

export default App;
