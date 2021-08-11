import React, {Fragment} from 'react';
import Navibar from './components/Navibar';
import Cards from './components/Cards';
import Anchor from './components/Anchor'

function App() {
  return (
    <Fragment>
      <Navibar/>
      <Cards/>
      <Anchor/>
    </Fragment>
  );
}

export default App;
