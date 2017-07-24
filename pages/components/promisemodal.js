import React from 'react'
import Modal from 'react-promise-modal'

import Layout from '../../components/Layout.js'
import Basic from '../../components/react-promise-modal/Basic'
import Customized from '../../components/react-promise-modal/customize/Customized'

const C = ()=>(<div>
  <h1>Basic</h1>
  <Basic />
  <hr />
  <h1>Customized</h1>
  <Customized />
</div>)

export default Layout(C)