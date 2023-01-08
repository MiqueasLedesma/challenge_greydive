import { animated, useSpring } from "@react-spring/web";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContainer } from "./AppStyles";
import { Footer } from "./components/Footer";
import { Form } from "./components/Form";
import { Navbar } from "./components/Navbar";
import { Success } from "./components/Success";
import { jsonData } from "./utils/JsonData";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [items, setItems] = useState(false);
  const [open, setOpen] = useState(false);


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
      <ToastContainer />
      <Routes>
        <Route path="/" element={<>
          <animated.div style={fadeIn}>
            <Form items={items} open={open} setOpen={setOpen} />
          </animated.div>
        </>} />
        <Route path="/success" element={<>
        <Success />
        </>} />
      </Routes>
      <Footer />
    </AppContainer >
  );
}
export default App;