import React from 'react'
import Anchors from '../Anchors'
import { useState } from 'react'


const ReferFriend = () => {
  const [submit, setSubmit] = useState("Submit Form")
  return (
    <div className='referContainer'>
     <Anchors/>


      <div className='heroRefer'>
      <div className='textRefer'>
        <p id='temp39'>Refer your friend & earn 3% of their project's value*</p>
      </div>
      <div className='formRefer'>
      <form className="form">
              <p style={{
                fontWeight: "500"
              }}>Enter Your Friend's Details</p>
              <input type="text" name="name" placeholder="Friend's - Name"></input>
              <input type="text" name="name" placeholder="Friend's - Email-id"></input>
              <input type="text" name="name" placeholder="Friend's - Phone number"></input>
              {/* <input style={{
                height: "100px"
              }} type="text" placeholder=" Please Enter Property Name"></input> */}


              <button onClick={() => {
                setSubmit("Submitting...")
                setTimeout(() => {
                  setSubmit("Submit");
                }, 500)
              }}>{submit}</button>


              <p id="temp7">By submitting this form, you agree to the <span style={{ color: "red" }} className="privateClass">privacy policy </span>& <span style={{ color: "red" }} className="privateClass">terms and conditions</span></p>


              <check></check>
            </form>
      </div>
      </div>
    </div>
  )
}

export default ReferFriend