import "./App.css";
// import { getAbandonmentData } from "./api/PetApi";
import Router from "./shared/Router";
// import GlobalStyle from "./styles/GlobalStyle";

function App() {
  // getAbandonmentData().then((item) => console.log(item));

  const apiUrl = import.meta.env.VITE_API_URL;
  const apiKey = import.meta.env.VITE_API_KEY;

  console.log(apiUrl);
  console.log(apiKey);

  return (
    // <>
    //   <GlobalStyle />
    <Router />
    // </>
  );
}

export default App;
