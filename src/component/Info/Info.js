import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlusSquare } from '@fortawesome/free-solid-svg-icons'
import './info.css';

const Info = (props) => {  
    console.log(props.user);  

    const { name, gender, email, picture, phone} = props.user;

    const fullName = name.title + "" +name.first;

    const [mobile, setMobile] = useState("");
    const showPhone = () => setMobile(phone);

    const showMember = props.showMember;

    return (
        <div className="info">           
           <div style={{marginLeft: "5px" , marginRight: "15px"}}>
              <img src={picture.large} alt=""/>
           </div>
           <div >
                <h3>Name: {fullName}</h3>
                <p> Email: {email}</p>
                <p> Gender: {gender}</p>
                <p> Phone: {mobile} </p>
                <button onClick={showPhone} className="numberBtn"> Show Phone Number</button>
                <button onClick={() => showMember(fullName)} className="addBtn"> <FontAwesomeIcon icon={faPlusSquare} />Add me</button>
           </div>
        </div>
    );
};

export default Info;