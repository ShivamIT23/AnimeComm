import { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([{}]);
  useEffect(() => {
    fetch("/home/api")
    .then((res) => res.json())
    .then((data) => setBackendData(data));
    },[]);
    
    console.log(backendData);
  return (
    <div>
      <h1>hello</h1>
    </div>
  );
}

export default App;
