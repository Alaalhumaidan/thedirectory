import './App.css';
import { Title } from './styles';
import dataFile from './data';
import List from './List';
import { useState } from 'react';
import Details from './Details';
import { Route, Switch } from "react-router";

const theme = {
  light: {
    mainColor: "#585858",
    backgroundColor: "#ffffff",
    red: "red",
  },
  dark:{
    mainColor: "#ffffff",
    backgroundColor: "#585858",
    red: "red", 
  }
  
};

function App() {
 
  const [currentTheme, setCurrentTheme] = useState("light");
  const [data, setData] = useState(null);
  const [_data, setDatas] = useState(dataFile);
  
  const dataDelete = (dataId) => {
    const updatedData = _data.filter((data) => data.id !== dataId);
    setData(updatedData);
  }

  const toggleTheme = () => {
    if (currentTheme === "light") setCurrentTheme("dark");
    else setCurrentTheme("light");

  };
  return (

<div>
<Switch>
     <Route path="/data/:dataSlug">
     <Details data ={data}/>
     </Route>
      <Route path ="/data"> 
      <List setData ={setData}
  data = {_data}
  
/>
      </Route>
       <Route exact path="/">
     
      </Route>
    </Switch>

<Title>TITLE</Title>


</div>
  );
}

export default App;
