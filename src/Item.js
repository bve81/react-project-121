import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleMoreClick() {
    setTotal(total + 1);
  }

  function handleLessClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  return (
    <div >
      <img src={info.image} alt={info.name} />
      <div className="p-6">
        <h2>{info.name}</h2>
        <p>{info.desc}</p>
      
      <div className="inline-block">
        <div className="inline-block">
        <button
          className="rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-1 px-1 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600"
          disabled={total === 0}
          onClick={handleLessClick}
        >
          –
        </button>
        </div>
        <h3 className="item-total">{total ? total : ""}</h3>
        <div className="inline-block">
        <button className="rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-1 px-1 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600" onClick={handleMoreClick}>
          +
        </button>
        </div>
      </div>
      </div>
    </div>
  );
}
