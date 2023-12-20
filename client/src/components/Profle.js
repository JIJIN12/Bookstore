import React, { useEffect, useState } from 'react'
import './Profile.css'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
export default function Profle() {
    const [selectedSection, setSelectedSection] = useState('profile');
    const [usedata, setusedata] = useState([])
    const [activity_data,set_activity] = useState([])
    console.log(usedata);
    console.log(selectedSection);

    const Token = localStorage.getItem('token')
    const userid = localStorage.getItem('userid')
    console.log(userid);

    useEffect(() => {
        axios.get('https://bookstore-7000.onrender.com/profile?userid=' + userid).then((Response) => {
            console.log(Response);
            setusedata(Response.data.Details)


        })
    }, [])

    // Function to update the selected section
    const handleSectionClick = (section) => {
        if (section == 'profile') {
            axios.get('https://bookstore-7000.onrender.com/profile?userid=' + userid
                //  {
                //     headers: {
                //         Authorization: `Bearer  ${Token}`
                //     }
                // }
            ).then((Response) => {
                console.log(Response);
                setusedata(Response.data.Details)
            })
        }
        if (section == 'activity') {
            console.log("hii");
            axios.get('https://bookstore-7000.onrender.com/profile/activity?userid=' + userid
                //  {
                //     headers: {
                //         Authorization: `Bearer  ${Token}`
                //     }
                // }
            ).then((Response) => {
                console.log(Response);
                set_activity(Response.data.Details)
            })
        }


        setSelectedSection(section);
    };



    const Profilelogout = () => {
        localStorage.clear()
        window.location.reload();
        toast.success('Logout successful', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }

    const deleteprofile = () => {
        axios.get(`https://bookstore-7000.onrender.com/profile/deleteprofile/${userid}`).then((response) => {
            console.log(response);
        })
    }

    // Function to render data based on the selected section
    const renderData = () => {
        switch (selectedSection) {
            case 'profile':
                return (
                    <div >
                        {/* <img className="profile-picture" src={data.profilePicture} alt="Profile Picture" /> */}
                        <div className="profile-name">Name:{usedata.FullName} </div>
                        <div className="profile-name">Email:{usedata.Email} </div>
                        <div className="profile-info">Job: </div>
                        <div className="profile-info">Location: </div>
                        {/* <button className="profile-button">Follow</button> */}
                    </div>
                );



            case 'activity':
                return (
                    <div className='activity_body'>
                        <h1 className="profile-heading">Activity</h1>
                        <p className="profile-text">This is the activity section.</p>
                        {/* <h1>works</h1> */}
                        <h3 className='profile_text_h3'><b>Book uploaded</b></h3>
                        <p className='profile_text'>Number of book uploaded:{activity_data.length}</p><br />
                        <h3 className='profile_text_h3'><b>Book Details</b></h3>
                        {activity_data?.map((data, key) => (

                            <p className='profile_text'><b>{key+1}. Book name:</b>{data.bookname}</p>

                        ))}
                    </div>
                );
            case 'settings':
                return (
                    <div>

                        <h2 className="profile-heading">Settings</h2>
                        <h3>Edit your profile</h3>
                        <button className='profile_edit btn btn-primary'>Edit</button><br /><br />
                        <h3>Delete your Profile</h3>
                        <buttton className='profile_delete btn btn_secondary' onClick={deleteprofile} >Delete</buttton>

                    </div>
                );
            default:
                return null;
        }
    };
    return (

        <div className='profile_body'>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='prodile_heading row'>
                <h1 className='profile_h1'>Profile </h1>

                <div className=' profile_logout'>
                    <button className='logout btn btn-success' onClick={Profilelogout}>Logout</button>
                </div>


            </div>
            <div className="profile-container">
                <div className="profile-section-list">

                    <div className={selectedSection === 'profile' ? "profile-section-item active" : "profile-section-item"} onClick={() => handleSectionClick('profile')}>Profile</div>
                    <div className={selectedSection.settings ? "profile-section-item active" : "profile-section-item"} onClick={() => handleSectionClick('activity')}>Activity</div>
                    <div className={selectedSection.activity ? "profile-section-item active" : "profile-section-item"} onClick={() => handleSectionClick('settings')}> Settings</div>
                </div>
                <div className="profile-data-display">
                    {renderData()}
                </div>
            </div>

        </div>
    )
}
