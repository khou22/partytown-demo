import { Partytown } from "@builder.io/partytown/react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1>Partytown Demo</h1>
      <Partytown debug forward={["dataLayer.push"]} />
      <script
        type="text/partytown"
        dangerouslySetInnerHTML={{
          __html: 'console.log("Hello, Partytown");',
        }}
      />
    </div>
  );
};

export default App;
