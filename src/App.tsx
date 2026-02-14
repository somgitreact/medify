import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Navpages from './navi/Navpages'
import Navmenu from './navi/Navmenu'
import Footer from './component/Footer'
import { Context } from './context/Context'




function App() {


  return (
   
<BrowserRouter>
 <Context>
<Navmenu />
<Navpages />
<Footer />
</Context>
</BrowserRouter>


  )
}

export default App
