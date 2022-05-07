// import logo from "./logo.svg";
import "./App.css";
import ChatterList from "./components/chatterList/chatterList";
import ChattingRoomList from "./components/chattingRoomList/chattingRoomList";
import DirectMessageList from "./components/directMessageList/directMessageList";

function App() {
  return (
    <div style={{ display: "flex" }}>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header> */}
      <ChattingRoomList />
      <DirectMessageList />
      <div
        style={{
          width: "100%",
          backgroundColor: "#36393F",
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        채팅방
      </div>
      <ChatterList />
    </div>
  );
}

export default App;
