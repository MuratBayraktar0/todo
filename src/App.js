import ListItem from "./ListItem";
import Input from "./Input";
import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([]);

  return (
    <div style={{backgroundColor:'violet', height:'100vh'}}>
     <Input setItems={setItems} items={items}/>
     {items.map((item) => 
            <ListItem name={item}/>
     )};
    
    </div>
  );
}

export default App;
