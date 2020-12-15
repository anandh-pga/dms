import React from "react";
import {Link} from 'react-router-dom';
import '../style/newcustomer.css';
export default function NewCustomer() {

  const [accounttype, setAccounttype] = React.useState('');
  const [accountno, setAccountno] = React.useState('');
  const [documenttype, setDocumenttype] = React.useState('');
  const [image, setImage] = React.useState(null);
  const [documenttags, setDocumenttags] = React.useState([
    {label:'Document',type:'file'},
    {label:'Document',type:'file'},
    {label:'Document',type:'file'},
    {label:'Document',type:'file'},

  ]);
  const [totaldoc, setTotaldoc] = React.useState([])

 

  // add new file in dynamic
  const addNewFile = (e) =>{
    e.preventDefault();
    setDocumenttags([...documenttags,{label:'Document',type:'file'}])
    console.log(documenttags)
  }



// input fields setState
   const documentUpload = (e) => {
    e.preventDefault();
    const newfile = e.target.files[0];
    console.log(newfile)
    // setState([...totaldoc, newfile],()=>{
    //   console.log(totaldoc)
    // })
    setTotaldoc([...totaldoc, newfile])
    console.log(totaldoc)
  }

const handleAccontType = (e) => {
  setAccounttype(e.target.value)
}
const handleAccountno = (e) => {
  setAccountno(e.target.value)
}

const handleDocumenttype = (e) => {
  setDocumenttype(e.target.value)
}

 const handleImageUpload = e => {
    e.preventDefault();
    setImage(e.target.files[0])
  }



// form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(accounttype)
    console.log(accountno)
    console.log(documenttype)
    console.log(image)
    console.log(totaldoc)
  }


  return <>
  <section className="bg-img">
    <nav className="navbar navbar-light shadow">
      <span className="navbar-brand mb-0 h1 text-white">DMS</span>
      <div className="form-inline">
        <button className="btn btn-danger my-2 my-sm-0"><Link to="/">Back</Link></button>
      </div>
    </nav>
    <form onSubmit={handleSubmit}>
    <div className="container">
    <div className="row">
    <div className="col-md-6">
      <div>
        <label>Account Type</label>
        <select onChange={handleAccontType}>
          <option selected="true" disabled="disabled">select</option>
          <option value="individual">individual</option>
          <option value="joint">joint</option>
        </select>
      </div>

      <div>
        <label>Account Number</label>
        <input type="text" name="account_no" value={accountno} onChange={handleAccountno}/>
      </div>

      <div>
        <label>Document Type</label>
        <select onChange={handleDocumenttype}>
          <option selected="true" disabled="disabled">select</option>
          <option value="individual">individual</option>
          <option value="joint">joint</option>
        </select>
      </div>
       <div>
        <label>Profile Image</label>
         <input type="file" name="file" onChange={handleImageUpload}/>
      </div>
    </div>

    <div className="col-md-6" >
      <div className="d-flex justify-content-between align-items-center mb-3">
      <span><h2>For more files to upload</h2></span><button className="btn" onClick={addNewFile}>Add</button>
      </div>
        {
          documenttags.map((doc,index)=>{
            return(
              <div key={index} className="d-flex justify-content-between align-items-center">
                <label>{doc.label} {index+1}</label>
                <input type={doc.type} onChange={documentUpload}/>
                {/* <button className="btn" onClick={}>upload</button> */}
                </div>
            )
          })
        }
      </div>
      </div>
      </div>

      <div className="d-flex justify-content-center">
        <button type="submit" className="btn btn-primary">Submit</button>
      </div>
      </form>
</section>
  </>
}