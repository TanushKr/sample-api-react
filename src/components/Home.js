import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [input, setInput] = useState(1);
  const [data, setData] = useState(undefined);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const getData = async () => {
    await axios
      .get(`http://localhost:5001/displaydata?inputId=${input}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="wrapper">
        <div className="input_box">
          <label htmlFor="sampleInput">Enter the ID</label>
          <input type="text" id="sampleInput" onChange={handleChange} />
          <button onClick={getData}>Search</button>
        </div>
      </div>
      <div className="container">
        {data &&
          data.map((obj) => {
            return (
              <div className="card">
                {obj &&
                  Object.entries(obj).map(([key, value], index) => {
                    return (
                      <li className="list_items" key={index}>
                        {key.toUpperCase()} : {value.toString()}
                      </li>
                    );
                  })}
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
