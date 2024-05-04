import React from 'react'
import Banner from '../UserPages/Banner'
import NewCollection from '../UserPages/NewCollection'
import Popular from '../UserPages/Popular'
import Exclusive from '../UserPages/Exclusive'

const UserHome = () => {
  return (
    <div>
      <Banner/>
      <NewCollection/>
      <Popular/>
      <Exclusive/>
    </div>
  )
}

export default UserHome
