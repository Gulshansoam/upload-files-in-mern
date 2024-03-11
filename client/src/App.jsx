import { useState } from "react";
import "./App.css";

function App() {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    e.preventDefault();
    console.log(file);
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
