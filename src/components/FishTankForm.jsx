import React, { useEffect, useState } from "react";

function FishTankForm({ data }) {
  const [sirka, setSirka] = useState(0);
  const [vyska, setVyska] = useState(0);
  const [delka, setDelka] = useState(0);
  const [vysledek, setVysledek] = useState(0);
  const [sizeRq, setSizeRq] = useState("");
  const [valid, setValid] = useState(false);

  useEffect(() => {
    let temp =
      (((parseInt(sirka) / 10) * parseInt(vyska)) / 10) *
      (parseInt(delka) / 10);
    10;
    let total = 0;

    data.forEach((fish) => {
      if (fish.type === "velka") {
        total += 20;
      } else {
        total += 10;
      }
    });
    if (sizeRq > temp) {
      setValid(false);
    } else {
      setValid(true);
    }

    setSizeRq(total);
    setVysledek(temp);
  });

  const HandleChange = (e) => {
    const source = e.target.id;
    const val = e.target.value;
    switch (source) {
      case "sirka": {
        setSirka(val);
        break;
      }
      case "delka": {
        setDelka(val);
        break;
      }
      case "vyska": {
        setVyska(val);
        break;
      }
      default:
        break;
    }
  };

  return (
    <div className="container text-center">
      <h2>Vyberte si svoje akvarium!</h2>
      <span>
        <label htmlFor="sirka">Šířka v cm</label>
        <input
          name="sirka"
          type="number"
          id="sirka"
          placeholder="cm"
          value={sirka}
          onChange={HandleChange}
        />
        <label htmlFor="delka">Délka v cm</label>
        <input
          name="delka"
          type="number"
          id="delka"
          placeholder="cm"
          value={delka}
          onChange={HandleChange}
        />
        <label htmlFor="vyska">Výška v cm</label>
        <input
          name="vyska"
          type="number"
          id="vyska"
          placeholder="cm"
          value={vyska}
          onChange={HandleChange}
        />
        <p>
          Zadané hodnoty Šířka: {sirka} Délka: {delka} Výška: {vyska}{" "}
        </p>
        <p>Objem vámi zadaneho akvária: {vysledek}L</p>
        <p>
          Požadovaný objem: {sizeRq}L, počet ryb: {data.length}
        </p>
        <button
          className={`btn  ${valid === true ? "btn-primary" : "btn-danger"}`}
          disabled={!valid}>
          Odeslat
        </button>
      </span>
    </div>
  );
}

export default FishTankForm;
