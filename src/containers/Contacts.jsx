import React from 'react'
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
 const Contacts = ({contactList}) => {
  return (
    <div className="contact-container">
      <img className="img-card" src={contactList.url}  />
      <h3>{contactList.name}</h3>
      <p>{contactList.address}</p>
      <p>{contactList.tell}</p>
    </div>
  )
}
export default Contacts;






// import React, { Component } from 'react';
// import SearchBar from '../components/SearchBar';
// import ContactCard from '../components/ContactCard';
// import '../Contacts.css';
// import AddContact from './AddContact';

// // const contactsAPI = 'https://demo1443058.mockable.io/codeproject_tutorial/api/contacts';
		
// class Contacts extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       searchText: '',
//       searchResult: [],
//       contactList: []
//     }

//     this.handleNewContact = this.handleNewContact.bind(this);
//     this.handleSearch = this.handleSearch.bind(this);
//     this.returnContactList = this.returnContactList.bind(this);

//   }

//   handleSearch(searchText) {
   
//     this.setState({searchResult: [], searchText: searchText});
//     this.state.contactList.map(contact => {

//       if(searchContact(contact, searchText)) {
//          this.setState( prevState => ({
//            searchResult: [...prevState.searchResult, contact]
//          }), () => console.log(this.state.searchResult))
//       }
//     })
//   }

//   componentWillMount() {
//     let init = {
//          method: 'GET',
//          headers: new Headers(),
//          mode: 'cors',
//          cache: 'default' 
//       };

//     fetch(contactsAPI, init)
//       .then( response => response.json())
//       .then( 
//         data => this.setState( 
//           prevState => ({
//           contactList: [...data.contacts]
//           }) 
//         )
//       )
//     }

//   returnContactList() {
//    return this.state.searchText ? this.state.searchResult :this.state.contactList
//   }

//   handleNewContact(newContact) {
//   	console.log("Hey00");
//   	console.log(newContact);
//   	this.setState( prevState => ({
//   		contactList: [
//   			...prevState.contactList, newContact ]
//   		}), () => console.log(this.state.contactList))
//   }
//   render() {


//     return (
//     	<div>

//      		<SearchBar onSearch={this.handleSearch} />
//      		<br />
//          	<AddContact onSubmit= {this.handleNewContact} />
//          	<br />
//           	<ul className="list-group" id="contact-list">
//            		{ this.returnContactList().map(
//                   (contact) => 
//                   <li key={contact.email} className="list-group-item"> 
//                     <ContactCard contact = {contact}/>
//                   </li>
//               	)}
//             </ul>
//         </div>
//     );
//   }
// }

// const searchContact = (contact, searchText) => (
//  contact.name.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
//  contact.surname.toLowerCase().search(searchText.toLowerCase()) !== -1 ||
//  contact.phone.toString().search(searchText) !== -1
// )

// export default Contacts;
