import React, { useState } from "react";
import axios from "axios";
import "./Home.css";

const Home = () => {
  const [input, setInput] = useState(1);
  const [data, setData] = useState({});

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const getData = async () => {
    await axios
      .get(`http://localhost:5001/displaydata?inputId=${input}`)
      .then((res) => {
        console.log(res.data);
        // createTable(res.data[0]);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="wrapper">
      <div className="input_box">
        <label htmlFor="sampleInput">Enter the input</label>
        <input type="text" id="sampleInput" onChange={handleChange} />
        <button onClick={getData}>Search</button>
      </div>
      {/* <p>{data}</p> */}
    </div>
  );
};

export default Home;
