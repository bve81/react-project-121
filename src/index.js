import React, { useState } from "react";
import { render } from "react-dom";
import Shop from "./Shop";
import "./build/index.css";

function App() {
  const [login, setLogin] = useState(false);

  if (login) {
    return (
      <>
      <div className="block">
      <div className="flex items-center mt-3 ml-[40%]">
        <Shop />
      </div>
      <div className="flex items-center ml-[50%] mb-3">
        <button className="flex mb-auto rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600" onClick={() => setLogin(false)}>
          Выйти
        </button>
      
      </div>
      </div>
      </>
    );
  } else {
    return (
      <>
      <div className="fixed top-[50%] left-[50%]  w-52 h-[10px] flex mt-[-50px] mr-0 mb-0 ml-[-100px]">
      <div className="h-40 w-80 max-w-full border border-gray-300 rounded-sm bg-white ">
        <div className="p-6">
        <h2 className="text-lg font-medium">Нужно залогиниться!</h2>
        
        <div className="mt-4 flex">
        <button className="inline-block rounded-sm font-medium border border-solid cursor-pointer text-center text-base py-3 px-6 text-white bg-green-400 border-green-400 hover:bg-green-600 hover:border-green-600" onClick={() => setLogin(true)}>
          Войти
        </button>
          </div>
        </div>
      </div>
      </div>
      </>
    );
  }
}

render(<App />, document.querySelector("#root"));
