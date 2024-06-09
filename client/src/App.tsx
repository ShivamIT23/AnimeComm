import { useEffect, useState } from "react";
import Container from "./Components/Container"

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
      <Container />
    </div>
  );
}

export default App;
