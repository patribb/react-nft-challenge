import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header/Header";
import axios from "axios";
import PunkList from "./components/punkList/PunkList";
import Main from "./components/main/Main";

const App = () => {
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x0180854303d2650cd8125DCf84Da92B455eB1362&order_direction=asc"
      );
      setPunkListData(openseaData.data.assets);
    };
    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {punkListData.length > 0 && (
        <>
          <Main punkListData={punkListData} selectedPunk={selectedPunk} />
          <PunkList
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
};

export default App;
