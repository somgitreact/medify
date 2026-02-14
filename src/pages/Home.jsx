import React, { useContext } from 'react'
import Navmenu from '../navi/Navmenu'
import HeaderHome from '../component/HeaderHome'
import Slider from '../component/Slider'
import FindSpalize from '../component/FindSpalize'
import Caring from '../component/Caring'
import BlogCom from '../component/BlogComp'
import HalfColumn from '../component/HalfColumn'
import Roundbox from '../component/Roundbox'
import Faq from '../component/Faq'
import Appsec from '../component/Appsec'


const Home = () => {
  
  return (
    <div>
       <HeaderHome />
       <Slider />
       <FindSpalize />
       <Slider />
        <Caring />
        <BlogCom />
        <div className='famalibx bluebg'>
          <div className='wrap flex justify-between items-center mb-[-40px] flex-wrap'>
            <HalfColumn>
              
<h2><p className='toptxtinner'>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p> Our Families</h2>
<p>We will work with you to develop individualised care plans, including management of chronic diseases. If we cannot assist, we can provide referrals or advice about the type of practitioner you require. We treat all enquiries sensitively and in the strictest confidence.</p>
            </HalfColumn>
            <HalfColumn>
              <Roundbox width="242px" hight="304px">
                <img src='ic1.svg'  />
                <div className='numTxt'>5000+</div>
                 <p>Happy Patients</p>
              </Roundbox>
               <Roundbox  width="242px" hight="304px"> 
                <img src='ic1.svg'  />
                <div className='numTxt'>5000+</div>
                 <p>Happy Patients</p>
              </Roundbox>
               <Roundbox  width="242px" hight="304px">
                <img src='ic1.svg'  />
                <div className='numTxt'>5000+</div>
                 <p>Happy Patients</p>
              </Roundbox>
               <Roundbox  width="242px" hight="304px">
                <img src='ic1.svg'  />
                <div className='numTxt'>5000+</div>
                 <p>Happy Patients</p>
              </Roundbox>
            </HalfColumn>
          </div>
        </div>
        <Faq />
        <Appsec />
    </div>
  )
}

export default Home