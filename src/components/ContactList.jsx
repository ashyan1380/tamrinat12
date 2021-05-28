import React,{useState,useEffect} from 'react'
// import ContactCard from './ContactCard';
import ContactInfo from "./ContactInfo"
import './ContactCard.css'
import {RiBookmark3Fill} from "react-icons/ri";
import { FaWindowClose } from "react-icons/fa";
import {BiEdit} from "react-icons/bi"
import {AiFillSave} from "react-icons/ai"
// import user1 from "./user1.jpg"
// import user2 from "./user2.jpg"
// import user3 from "./user3.jpg"
// import user4 from "./user4.jpg"
// import user5 from "./user5.jpg"
// import user6 from "./user6.jpg"
// import user7 from "./user7.jpg"
// import user8 from "./user8.jpg"
// import user9 from "./user9.jpg"
// import user10 from "./user10.jpg"
 const ContactList = ({contacts,search,editted,showMsg,onDelete,editContact,showInput,handleShowInput,update,edit,save}) => {
  const filterDatas = contacts.filter(person => person.name.toLocaleLowerCase().startsWith(search))

  const [selected, setselected] = useState("");
  // const [selectedEdit, setSelectedEdit] = useState("");
  const [selectedEdit, setSelectedEdit] = useState(false);
  // const [toggleShow, setToggleShow] = useState(true);
  // const [editContact, setEditContact] = useState({})
const handleShow = (contactId) =>{
setselected(contactId)
// console.log('click');
// console.log(contactId);
// console.log(selected);
}
// const handleShowEdit = (contactId) =>{
//   setSelectedEdit(contactId)
//   // edit(contact)
//   // console.log('click');
//   // console.log(contactId);
//   // console.log(selected);
//   }
  // const [ShowEditted, setShowEditted] = useState(false)
  // useEffect(() => {
  //   setShowEditted(true)
  // }, [editContact])
  const [word, setWord] = useState(false)
  // const [seconds, setSecond] = useState(0)
  const [index,setIndex]=useState(0);
const [chek, setChek] = useState(true)

  // useEffect(() => {
  //   setWord(`editted`)
  //   console.log(editted);

  //   // setIndex(index+1)
  //   // setChek(!chek)
  //   // console.log(chek);
  //   // setWord(true)
  //   // console.log(word);
  //   // setIndex(index+1)
  //   // setWord(`it is changed ${index}`)
  // }, [editted])
  // useEffect(() => {
  //   // setIndex(index =>index+1)
  //   setWord(`editted`)
  // }, [filterDatas])
  useEffect(() => {
    // setIndex(index =>index+1)
    setWord(`editted`)
  }, [contacts])
  // const [showMsg, setShowMsg] = useState(false)
  // console.log(showMsg);
  // useEffect(() => {
  //   setShowMsg(!showMsg)
  // }, [contactList])
  console.log(contacts);
  return (
    <div className="parent-card">
     {/* <p>{word}</p> */}
        {filterDatas.map((contact,index)=>(
          <div className="card-container" onClick={()=>handleShow(contact.id)}>
          <RiBookmark3Fill className="star-icon" />
        <div><img className="img-card" src={contact.url}  /></div>
        {/* {showInput ? <input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  :  <h6 >{contact.name}</h6>  } */}
        {selectedEdit === contact.id ?<input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  : <h6  >{contact.name}</h6>} 
        {selectedEdit === contact.id ?<input className="edit-input" placeholder="address" name="address" value={editContact.address} onChange={(e)=>update(e)} />  : <p  >{contact.address}</p>} 
        {selectedEdit === contact.id ?<input className="edit-input" placeholder="tell" name="tell" value={editContact.tell} onChange={(e)=>update(e)}/>  : <p  >{contact.tell}</p>} 
       {(selectedEdit === contact.id  && editted) ? <p>{word}</p> : ""} 
       {/* {(selectedEdit === contact.id  || chek) ? <p>editted</p> : ""}  */}
       {/* {chek && <p>editted</p> }  */}
       {/* <h2>{word}</h2> */}
        {/* {ShowEditted && <p>editted</p>} */}
        {/* {toggleShow && <h6 onClick={toggleShow} >{contact.name}</h6>} */}
        {/* {toggleShow &&  <input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>} */}
        {/* {selectedEdit === contact.id  ? <input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  :  <h6 >{contact.name}</h6>  } */}
        {/* {selectedEdit === contact.id  ? <input className="edit-input" placeholder="address" name="address" value={editContact.address} onChange={(e)=>update(e)} />  :  <p>{contact.address}</p> } */}
        {/* {selectedEdit === contact.id  ? <input className="edit-input" placeholder="tell" name="tell" value={editContact.tell} onChange={(e)=>update(e)}/>  :  <p>{contact.tell}</p>  } */}
        {/* {show ? <h6 >{contactInfo.name}</h6> : <input/>  } */}
        {/* {showInput ? <input/> : <h6>{contactInfo.name}</h6>} */}
        {/* <p>{contact.address}</p>
        <p>{contact.tell}</p> */}
        <BiEdit onClick={(event)=>{event.stopPropagation();edit(contact,contact.id,contact.url)
        setSelectedEdit(contact.id)}} />
        {/* <BiEdit onClick={()=>{handleShowEdit(contact.id)}} /> */}
        {/* <button onClick={()=>{handleShowEdit(contact.id)}}>edit</button> */}
        <AiFillSave
          className="task__close"
          onClick={(event)=>{event.stopPropagation();save(contact,contact.id,contact.url)
           }}
        />
        <FaWindowClose
          className="task__close"
          onClick={(event) =>{event.stopPropagation();onDelete(contact.id)}}/>
        {/* {showMsg && <p>editted</p>} */}
        {selected === contact.id ? <ContactInfo contact={contact} onDelete={onDelete} edit={edit} save={save} editContact={editContact} update={update}/> : "" }
        {/* <ContactInfo className={`contact-info ${selected === contactInfo.id ? "active" : ""}`} contactInfo={contactInfo} /> */}
      </div>
          // <div>
            // <ContactCard showInput={showInput} handleShowInput={handleShowInput} selected={selected} onClick={handleShow } onEdit={handleShowEdit} selectedEdit={selectedEdit} onDelete={onDelete} key={contact.id}  contactInfo={contact} />
    // button
        ))

        }
      {/* <img className="img-card" src={contacts.url}  />
      <h3>{contactList.name}</h3>
      <p>{contactList.address}</p>
      <p>{contactList.tell}</p> */}
    </div>
  )
}
export default ContactList;





// import React,{useState} from 'react'
// import ContactCard from './ContactCard';
// // import user1 from "./user1.jpg"
// // import user2 from "./user2.jpg"
// // import user3 from "./user3.jpg"
// // import user4 from "./user4.jpg"
// // import user5 from "./user5.jpg"
// // import user6 from "./user6.jpg"
// // import user7 from "./user7.jpg"
// // import user8 from "./user8.jpg"
// // import user9 from "./user9.jpg"
// // import user10 from "./user10.jpg"
//  const ContactList = ({contactList,search,onDelete,showInput,handleShowInput}) => {
//   const filterDatas = contactList.filter(person => person.name.toLocaleLowerCase().startsWith(search))

//   const [selected, setselected] = useState("");
//   const [selectedEdit, setSelectedEdit] = useState("");
// const handleShow = (contactId) =>{
// setselected(contactId)
// console.log('click');
// console.log(contactId);
// console.log(selected);
// }
// const handleShowEdit = (contactId) =>{
//   setSelectedEdit(contactId)
//   console.log('click');
//   console.log(contactId);
//   console.log(selected);
//   }
//   return (
//     <div className="parent-card">
//         {filterDatas.map((contact,index)=>(
//           // <div>
//             <ContactCard showInput={showInput} handleShowInput={handleShowInput} selected={selected} onClick={handleShow } onEdit={handleShowEdit} selectedEdit={selectedEdit} onDelete={onDelete} key={contact.id}  contactInfo={contact} />
//     // button
//         ))

//         }
//       {/* <img className="img-card" src={contactList.url}  />
//       <h3>{contactList.name}</h3>
//       <p>{contactList.address}</p>
//       <p>{contactList.tell}</p> */}
//     </div>
//   )
// }
// export default ContactList;