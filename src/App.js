import Info from "./useStateAndEffect-Info/Info";
import React, { useState } from 'react';
import './App.css';

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      {/*<div>*/}
      {/*  <button onClick={() => {*/}
      {/*    setVisible(!visible);*/}
      {/*  }}>{visible ? '숨기기' : '보이기'}</button>*/}
      {/*</div>*/}
      {/*{visible && <useStateAndEffect-Info />}*/}
    </div>
  );
}

export default App;
