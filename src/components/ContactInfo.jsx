import React,{useState} from 'react'
import './ContactInfo.css'
import { FaWindowClose } from "react-icons/fa";
import {BiEdit} from "react-icons/bi"
import {AiFillSave} from "react-icons/ai"
 const ContactInfo = ({contact,onDelete,save,edit,editContact,update}) => {
  const [selectedEdit, setSelectedEdit] = useState(false);
    return (
        <div className="modal">
        {/* <div className="modal-content"> */}
          {/* <div className="modal-header"> */}
            {/* <div className="modal-body"> */}
            {selectedEdit === contact.id ?<input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  : <h5 className="input-info" >name:{contact.name}</h5>} 
            {selectedEdit === contact.id ?<input className="edit-input" placeholder="tell" name="tell" value={editContact.tell} onChange={(e)=>update(e)}/>  : <h6  >tell:{contact.tell}</h6>} 
            {selectedEdit === contact.id ?<input className="edit-input" placeholder="address" name="address" value={editContact.address} onChange={(e)=>update(e)}/>  : <p  >address:{contact.address}</p>} 
            {selectedEdit === contact.id ?<input className="edit-input" placeholder="email" name="email" value={editContact.email} onChange={(e)=>update(e)}/>  : <p  >email:{contact.email}</p>} 
            {/* {selectedEdit === contact.id ?<input className="edit-input" placeholder="name" name="name" value={editContact.name} onChange={(e)=>update(e)}/>  : <p  >name:{contact.name}</p>}  */}
              {/* name:<h2  >{contact.name} </h2> */}
              {/* tell:<h5>{contact.tell}</h5> */}
              {/* address:<p>{contact.address}</p> */}
              {/* email:<p>{contact.email}</p> */}
              {/* <button className="close-button" >ورود مجدد</button> */}
            {/* </div> */}
          {/* </div> */}
        {/* </div> */}
        <div className="container-icon">
        <BiEdit className="icon-contact" onClick={(event)=>{event.stopPropagation();edit(contact,contact.id,contact.url)
        setSelectedEdit(contact.id)}} />
        <AiFillSave
          className="icon-contact"
          onClick={()=>{save(contact,contact.id,contact.url)
            setSelectedEdit(!contact.id)}}
        />
        <FaWindowClose
        className="icon-contact"
        onClick={() => onDelete(contact.id)}
      />
      </div>
      </div>
        // <div className="info-box">
        //     {contactInfo.name}
        // </div>
    )
}
export default ContactInfo;