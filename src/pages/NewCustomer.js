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
        <button className="btn btn-warning my-2 my-sm-0"><Link to="/">Back</Link></button>
      </div>
    </nav>
    <form onSubmit={handleSubmit}>
    <div className="container mt-4">
    <div className="row">
      <div className="col-md-6">
        <div class="card">
        <h5 class="card-header bg-primary text-white">Customer Details</h5>
          <div class="card-body scroll">
            <div class="form-group row">
              <label class="col-md-5 col-form-label">Account Type</label>
                <div class="col-md-7">
                  <select className="form-control" onChange={handleAccontType}>
                    <option selected="true" disabled="disabled">select</option>
                    <option value="individual">individual</option>
                    <option value="joint">joint</option>
                  </select>
                </div>                    
              </div>
              <div class="form-group row">
                <label class="col-md-5 col-form-label">Account Number</label>
                  <div class="col-md-7">
                    <input type="text" className="form-control" name="account_no" value={accountno} onChange={handleAccountno}/>
                </div>       
              </div>
              <div class="form-group row">
                <label class="col-md-5 col-form-label">Document Type</label>
                  <div class="col-md-7">
                  <select className="form-control" onChange={handleDocumenttype}>
                    <option selected="true" disabled="disabled">select</option>
                    <option value="individual">individual</option>
                    <option value="joint">joint</option>
                  </select>
                </div>       
              </div>
              <div class="form-group row">
                <label class="col-md-5 col-form-label">Profile Image</label>
                  <div class="col-md-7">
                  <input type="file" name="file" onChange={handleImageUpload}/>
                </div>       
              </div>
            </div>
        </div>
      </div>

      <div className="col-md-6" >
      <div class="card">
        <h5 class="card-header bg-primary text-white">Customer Details <span className="float-right add-btn" onClick={addNewFile}>Add</span></h5>
          <div class="card-body scroll">
          {
            documenttags.map((doc,index)=>{
              return(
                <div className="form-group row justify-content-center">
                  <label class="col-md-7 col-form-label">Account Type</label>
                    <div class="col-md-4">
                    <div class="btn-group">
                      <button type="button" class="btn btn-warning rounded mr-2">Confirm</button>
                      <button type="button" class="btn btn-danger rounded">Cancel</button>
                    </div>
                  </div>                    
                </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center mt-4">
      <button type="submit" className="btn1 btn-primary col-md-3">Submit</button>
    </div>
  </form>
</section>
  </>
}