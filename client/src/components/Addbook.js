import React, { useEffect, useState } from 'react'
import './Addbook.css'
import { useDispatch, useSelector } from 'react-redux';
import { postaddbook, postaddbook_file } from './redux/slice/addbookslice'
import { useNavigate } from 'react-router-dom';
export default function Addbook() {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const { addbook_data, addbookfile_data } = useSelector(state => state.addbook)
  console.log(addbook_data);
  console.log(addbookfile_data);
  const userid = localStorage.getItem('userid')
  console.log(userid);

  const [addbook_state, set_addbookstate] = useState({
    user_id: userid
  })

  // const [file, set_file] = useState()
  console.log(addbook_state);



  const book_input = (e) => {
    const { name, value } = e.target
    set_addbookstate({ ...addbook_state, [name]: value })
  }

  const book_submit = (event) => {
    event.preventDefault();
    const data = new FormData()
    const filename = addbook_state.image.name
    console.log(filename);
    // data.append("filename", filename)
    // data.append('file', file)
    data.append('bookname',addbook_state.bookname)
    data.append('bookgenre',addbook_state.bookgenre)
    data.append('author:',addbook_state.author)
    data.append('bookdescription',addbook_state.bookdescription)
    data.append('image',addbook_state.image)
    data.append('filename',filename)
    data.append('bookpdf',addbook_state.bookpdf)
    data.append('pdfname',addbook_state.bookpdf.name)
    
    for (var pair of data.entries()) {
      console.log(pair[0]+ ', ' + pair[1]); 
  }
    useEffect(()=>{
      dispatch(postaddbook(addbook_state))

    },[])
    dispatch(postaddbook_file( data ))
   
  
    // navigate('/book')
  }

  return (
    <div>
      <div className='container'>
        <div className='book-form-container'>
          <form action=' ' className='book_form' encType='multipart/form-data' >
            <h3 className='book_title'>Sign in</h3>
            <span >userid</span>
            <input type='text' name='user_id' className='box' value={userid} placeholder='Enter your Username' onChange={book_input} disabled />
            <span >Book Name</span>
            <input type='text' name='bookname' className='box' placeholder='Enter  bookname' onChange={book_input} />
            <span >image</span>
            <input type='file' name='image' className='box' placeholder='image' accept='image/*' onChange={(e) => {
              // set_file(e.target.files[0]);
              set_addbookstate({ ...addbook_state, 'image': e.target.files[0],'filename': e.target.files[0].name });console.log(e.target.files[0].name);
            }} />
            <span>Book pdf</span>
            <input type='file' name='bookpdf' className='box' placeholder='pdf' accept='.pdf' onChange={(e) => {
              // set_file(e.target.files[0]);
              set_addbookstate({ ...addbook_state, 'bookpdf': e.target.files[0], 'pdfname':e.target.files[0].name });console.log(e.target.files[0].name);
            }} />
            <span >Genre</span>
            <input type='text' name='bookgenre' className='box' placeholder='Enter Genre' onChange={book_input} />
            <span >Author</span>
            <input type='text' name='author' className='box' placeholder='Enter Author' onChange={book_input} />
            <span >Book Description</span>
            <input type='text' name='bookdescription' className='box' placeholder='Enter bookdescription' onChange={book_input} />

            <div className='checkbox'>
              <input type='checkbox' name='' />
              <label className='book_label'>remember me</label>
            </div>

            <input type='submit' value={'signin'} className='book_btn' onClick={book_submit} />
            <p>forget password?<a href='#'>Click here</a></p>
            <p>Dont't have an account?<a href='#'>Click here</a></p>
          </form>
        </div>
      </div>
    </div>
  )
}
