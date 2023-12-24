import React, { useState } from 'react'
import './Addauthor.css'
import axios from 'axios'
export default function Addauthor() {
  const [addauthor_state, set_addauthorstate] = useState({})
  const [file, setfile] = useState({})
  console.log(addauthor_state);
  const author_input = (e) => {
    const { name, value } = e.target
    set_addauthorstate({ ...addauthor_state, [name]: value })
  }

  const author_submit = (e) => {
    if (file) {                                                           // to add file -
      const data = new FormData()
      const filename = file.name
      data.append("name", filename)
      data.append("file", file)
      console.log(data);
      axios.post('https://bookstore-7000.onrender.com/author/uploads', data).then((Response) => {
        console.log(Response);
      }).catch((error) => {
        console.log(error);                                                           //-to add file
      })
    }
    axios.post('https://bookstore-7000.onrender.com/author/addauthor', addauthor_state).then((Response) => {
      console.log(Response);
    }).catch((error) => {
      console.log(error);
    })
    e.preventDefault()
  }
  return (
    <div>
      <div>
        <div className='container'>
          <div className='author-form-container'>
            <form action='' className='author_form' encType='multipart/form-data' >
              <h3 className='author_title'>AUTHOR FORM</h3>
              {/* <span >userid</span>
            <input type='text' name='user_id' className='box' value={userid} placeholder='Enter your Username' onChange={author_input} disabled /> */}
              <span >author Name</span>
              <input type='text' name='authorname' className='box' placeholder='Enter  authorname' onChange={author_input} />
              <span >image</span>
              <input type='file' name='image' className='box' placeholder='image' accept='image/*' onChange={(e) => {
                // set_file(e.target.files[0]);
                setfile(e.target.files[0]);
                set_addauthorstate({ ...addauthor_state, 'image': e.target.files[0], 'filename': e.target.files[0].name }); console.log(e.target.files[0].name);
              }} />

              <span >Genre</span>
              <input type='text' name='authorgenre' className='box' placeholder='Enter Genre' onChange={author_input} />
              <span >author Description</span>
              <input type='text' name='authordescription' className='box' placeholder='Enter authordescription' onChange={author_input} />

              <div className='checkbox'>
                <input type='checkbox' name='' />
                <label className='author_label'>remember me</label>
              </div>

              <input type='submit' value={'signin'} className='author_btn' onClick={author_submit} />
              <p>forget password?<a href='#'>Click here</a></p>
              <p>Dont't have an account?<a href='#'>Click here</a></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
