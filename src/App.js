import { useEffect, useState } from 'react';
import Info from './component/Info/Info';

function App() {

const [users, setUsers] = useState([]);
const [member, setMember] = useState("")

const showMember = (fullName) => {
  const newMember = [...member, fullName ];
  setMember(newMember);
}

useEffect(() =>{
        fetch("https://randomuser.me/api/?results=15")
        .then(res => res.json())
        .then(data => setUsers(data.results))
}, [])

  return (
    <div className="App">      
    <h4> Show Team Member:{member + ""} </h4>
        {
          users.map( user => <Info user= {user} showMember={showMember}></Info>)
        }              
    </div>
  );
}

export default App;
