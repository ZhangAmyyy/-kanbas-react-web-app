import ModuleList from "../Modules/ModuleList";
import Status from "./Status";
function Home() {
    return (
            <div style={{ display: "flex", flexDirection: "row" }}>
               
                <div style={{ flex: "3", marginRight: "20px" }}>
                <h2>Home</h2>
                    <ModuleList />
                </div>
                <div style={{ flex: "1" }}>
                    <Status />
                </div>
            </div>
    );
  }
  export default Home;
  