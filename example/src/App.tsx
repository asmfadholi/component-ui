import SayHello from '@component-ui';

import './App.css';
import 'antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <SayHello name="bella" />
      </header>
    </div>
  );
}

export default App;
