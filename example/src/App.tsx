import { SayHello } from '@component-ui';

import './App.css';
import 'antd/dist/antd.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <SayHello name="bella" />
      </header>
    </div>
  );
}

export default App;
