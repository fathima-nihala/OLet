import React, { useState } from 'react'

export const UpdateAdminProf = () => {
    const [firstname, setfirstname] = useState('');
    const [email, setemail] = useState('')
    const [image, setImage] = useState('')

    return (
        <div>
            <form encType='multipart/form-data'>
                <div>
                <input type="text" placeholder='Name' value={firstname} onChange={(e) => setfirstname(e.target.value)} />
                </div>
                <div>
                <input type="email" placeholder="email" value={email} onChange={(e) => setemail(e.target.value)} />
                </div>
                <div>
                <input type="file" name="image" accept="image/*" onChange={(e) => setImage(e.target.files[0])} />
                </div>
                <div>
                    <button>Update</button>
                </div>
            </form>
        </div>
    )
}
