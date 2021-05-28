import React,{useState} from 'react'
import './AddContact.css'
 const AddContact = ({onAddContact}) => {
    const [name, setName] = useState("")
    const [errName, setErrName] = useState("")
    const [tell, setTell] = useState("")
    const [errTell, setErrTell] = useState("")
    const [address, setAddress] = useState("")
    const [email, setEmail] = useState("")
    const handleSubmit = (e ) =>{
        e.preventDefault();
        // task={name,day,reminder}
                //  console.log(name,day,reminder);
                if (!name) {
                    // alert('please add task')
                    setErrName('نام مخاطب را وارد کنید')
                    return 
                }
                if (!tell) {
                    // alert('please add task')
                    setErrTell('شماره مخاطب را وارد کنید')
                    return 
                }

                // add task
            //   console.log("form submitted");
              onAddContact({name,tell,address,email})
        setName('')
        setTell('')
        setAddress('')
        setEmail('')
        setErrName('')
        setErrTell('')
             }
    //  console.log('contact');
    return (
        <div className="modal">
            <h3>Add Contact</h3>
        <form onSubmit={handleSubmit} className="add-form">
        <div className="form-control">

<input type="text" placeholder="Add Name" value={name} onChange={(e) => setName(e.target.value)}></input>

        </div>
        {<div className="err" > {errName ? errName : "" }</div>}
        <div className="form-control">

<input type="text" placeholder="Add tell" value={tell} onChange={(e) => setTell(e.target.value)}></input>

        </div>
        {<div className="err" > {errTell ? errTell : "" }</div>}

        <div className="form-control">

<input type="text" placeholder="Add address" value={address} onChange={(e) => setAddress(e.target.value)}></input>


        </div>
        <div className="form-control">

<input type="email" placeholder="Add email" value={email} onChange={(e) => setEmail(e.target.value)}></input>


        </div>
<input onClick={handleSubmit} type="submit" value="Save Contact" className="btn btn--green btn--save" />
    </form>
    </div>
    )
}
export default AddContact
