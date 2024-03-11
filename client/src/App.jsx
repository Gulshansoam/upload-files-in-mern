import { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(file);
    const formdata = new FormData();
    formdata.append("file", file);
    console.log(formdata, "formdata");
    axios
      .post("http://localhost:5001/upload", formdata)
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div>
        <input
          type="file"
          onChange={(e) => {
            setFile(e.target.files[0]);
          }}
        />
        <button onClick={handleUpload}>Upload</button>
      </div>
    </>
  );
}

export default App;
