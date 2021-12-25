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
          <label htmlFor="sampleInput">Enter the input</label>
          <input type="text" id="sampleInput" onChange={handleChange} />
          <button onClick={getData}>Search</button>
        </div>
      </div>
      {data && (
        <div className="container">
          <div className="card">
            {data &&
              Object.entries(data[0]).map(([key, value], index) => {
                return (
                  <li className="list_items" key={index}>
                    {key} : {value.toString()}
                  </li>
                );
              })}
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
