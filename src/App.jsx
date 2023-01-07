import { useEffect, useState } from "react";
import { AppContainer } from "./AppStyles";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { jsonData } from "./utils/JsonData";

function App() {

  const [items, setItems] = useState(false);
  useEffect(() => {
    jsonData()
      .then(r => setItems(r))
      .catch(e => console.log(e.message))
  }, []);

  return (
      <AppContainer>
        <Navbar />
        <Form items={items} />
        <Footer />
      </AppContainer>
  );
}
export default App;