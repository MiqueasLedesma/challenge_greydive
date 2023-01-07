import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { AppContainer } from "./AppStyles";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { jsonData } from "./utils/JsonData";

function App() {

  const [items, setItems] = useState(false);

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateX(-100%)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    delay: 1000,
  });

  useEffect(() => {
    jsonData()
      .then(r => setItems(r))
      .catch(e => console.log(e.message))
  }, []);

  return (
      <AppContainer>
        <Navbar />
        <animated.div style={fadeIn}>
        <Form items={items} />
        </animated.div>
        <Footer />
      </AppContainer >
  );
}
export default App;