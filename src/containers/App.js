import React, { useState,useEffect } from "react";
import Search from "../components/Search"
import {AiFillHome} from "react-icons/ai"
import {BsBoxArrowUp} from "react-icons/bs"
import {AiOutlineUnorderedList} from "react-icons/ai"
import {HiViewGrid} from "react-icons/hi"
// import Contacts from "./Contacts"
import ContactList from "../components/ContactList"
import AddContact from "../components/AddContact"
import user1 from "./user1.jpg"
import user2 from "./user2.jpg"
import user3 from "./user3.jpg"
import user4 from "./user4.jpg"
import user5 from "./user5.jpg"
import user6 from "./user6.jpg"
import profile from "./profile.png"
// import user7 from "./user7.jpg"
// import user8 from "./user8.jpg"
// import user9 from "./user9.jpg"
// import user10 from "./user10.jpg"
// import { RiGameFill } from "react-icons/ri";
const App = () => {
  // const title = "Task Manager";

  const [contacts, setContacts] = useState([
    {
      id: 1,
      name: "Ed Revalo",
      address: "new jersey",
      tell: 111111 ,
      email:"Revalo@gmail.com",
      url: user1,
    },
    {
      id: 2,
      name: "brenda",
      address: "florida",
      tell: 222222,
      email:"brenda@gmail.com",
      url: user2,
    },
    {
      id: 3,
      name: "Betty",
      address: "michigan",
      tell: 333333,
      email:"Betty@gmail.com",
      url: user3,
    },
    {
      id: 4,
      name: "neil",
      address: "ohio",
      tell: 444444,
      email:"neil@gmail.com",
      url: user4,
    },
    {
      id: 5,
      name: "penna",
      address: "national",
      tell: 555555,
      email:"penna@gmail.com",
      url: user5,
    },
    {
      id: 6,
      name: "Ronaldo",
      address: "alabama",
      tell: 666666,
      email:"Ronaldo@gmail.com",
      url: user6,
    },
    
  ]);
  const [search, setSearch] = useState('')
  const handleSearch = (search) =>{
    setSearch(search)
  }
  const [showAddContact, setShowAddContact] = useState(false);
const handleAddContact = (contact)=>{
  console.log("contact");
  let id=(contacts.length)+1;
  let url=profile;
  let newContact ={...contact,id,url}
  setContacts([...contacts,newContact])
}
const handleDelete = (contactId) => {
  console.log(contactId);
  setContacts(contacts.filter((contact) => contact.id !== contactId));
};
// const [showInput, setShowInput] = useState(false)
const handleShowInput=(contactId)=>{
  console.log("input");
  console.log(contactId);
  contacts.map((contact)=>contact.id !== contactId ? setShowInput(true) : setShowInput(false) )
  // if (condition) {
    
  // }
  // setShowInput(!showInput)
}
const [editIndex, setEditIndex] = useState(-1)
const [showInput, setShowInput] = useState(false)
const [editted, seteditted] = useState(false)
const [editContact, setEditContact] = useState({})
//   vaghti roye edit mizanam hame a taghir mide
const save= (obj,contactId,contactUrl)=>{
  let url=contactUrl
  let mycontact={...editContact,url}
  // console.log(mycontact);
  setEditContact(mycontact)
  if (editIndex === -1) {
    return
  }
// setContacts(contacts.splice(contactId-1,1,editContact))
let newContacts=contacts.splice(contactId-1,1,mycontact)
// setContacts(newccontacts)
// console.log(newContacts);
// console.log(contacts);
setContacts(contacts)
setEditContact({})
// setEditContact(obj)
  setEditIndex(-1)
  seteditted(!editted)
  // console.log(editIndex);
  // console.log(contactId);
  // let newcontacts=[...contacts]
// console.log(newcontacts);
//   newcontacts.splice(editIndex,1,editContact)
// console.log(newcontacts);

//  setContacts(newcontacts)
//  console.log(contacts);
//   setEditIndex(-1)
//   setEditContact({})
// console.log(contacts);
  // console.log('edit');
  // console.log(contactId,obj,index);
  
  // contacts.map((contact)=>contact.id !== contactId && setShowInput(!showInput) )
// if (contactId === contacts[index].id) {
//   setShowInput(!showInput)
  
// }
}
const update=(e)=>{
  let obj={}
  obj[e.target.name]=e.target.value;
  let newContact ={...editContact,...obj}
  setEditContact(newContact)
  // console.log(editContact);
  // let contacts=[...contacts]
  // contacts.splice(editIndex,1,newContact)
  // setContacts(contacts)
  // setEditIndex(-1)
  // setEditContact({})
  // setEditContact({})

}
const edit=(obj,contactId,contactUrl)=>{
  setEditContact(obj)
  setEditIndex(contactId-1)
  
// let newcontact=[...contacts]
// console.log(newcontact);
// newcontact.splice(editIndex,1,editContact)
// console.log(newcontact);
// setContacts(newcontact)
}
const [word, setWord] = useState("")
useEffect(() => {
  setWord("editted")
}, [contacts])
//  const [showMsg, setShowMsg] = useState(true)
//   console.log(showMsg);
//   useEffect(() => {
//     setShowMsg(!showMsg)
//   }, [contacts])
 
 

console.log(contacts);

    return (
      // <div className="app-container">
      <div className="container-contact">
      <Search onSearch={handleSearch} search={search} />
      {showAddContact && <AddContact onAddContact={handleAddContact} />}
      <div className="header-contact">
      <p>contacts(6)</p>
      <div className="header-right">
      <AiOutlineUnorderedList/>
      <HiViewGrid/>
      </div>
      </div>
      <ContactList word={word} editted={editted} contacts={contacts} editContact={editContact} save={save} edit={edit} update={update} search={search} onDelete={handleDelete} showInput={showInput} handleShowInput={handleShowInput} />
     <div onClick={()=>setShowAddContact(!showAddContact)} className="cicle-plus">+</div>
     <div className="container-icon">
     <AiFillHome className="home-icon"/>
     <BsBoxArrowUp className="arrow-up"/>
     </div>
      {/* {contacts.map((contact,index)=>(
      <Contacts contactList={contact} />
      ))} */}
      {/* <AddContact onSubmit= {this.handleNewContact} /> */}
       </div>
      //  </div>
    );
// const renderTask =
//   tasks.length > 0 ? (
//     <Tasks tasksList={tasks} onDelete={handleDelete} />
//   ) : (
//     <div className="noTasks">No Tasks To show</div>
//   );
// const renderTask = () => {
//   if (tasks.length) {
//     return <Tasks tasksList={tasks} onDelete={handleDelete} />;
//   } else {
//     return <div className="noTasks">No Tasks To show</div>;
//   }
// };
 
};
export default App;

  


















// import React, { Component } from 'react';

// import Contacts from './containers/Contacts.jsx'

// /*App component starts here */
// class App extends Component {

//   render() {
//     return (
//       <div className="container">
//         <div className="row">
//           <div className="col-sm-7 offset-sm-2">
//             <span className="title">Contacts</span>
//               <Contacts />
//           </div>
//         </div>
//       </div>
    
  
     
//     );
//   }
// }

// export default App;
