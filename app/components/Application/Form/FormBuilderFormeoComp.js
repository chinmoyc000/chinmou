import React from 'react';
import './Css/styles.css';
import { FormEditor, FormRenderer } from './helper/formeo';


function App() {
  return (
    <div className="FormeoCustomWraper">
      <div>
        <FormEditor />
        <FormRenderer />
      </div>
    </div>
  );
}
export default App;
