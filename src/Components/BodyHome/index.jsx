
import { useState } from 'react'
import './style.css'

const BodyHome = () => {
    const [state, setstate] = useState('-60%')
    setTimeout(()=>{

       setstate('-3.5%') 
    },300)
    return (
    <div className="body-home" id='home'>
        <h1 className="body-home-after" style={{left:state}} >BEST</h1>
        <div className="body-home-description" >
            <h1>BEST</h1>
            <h3>OS MELHORES NO QUE FAZEMOS</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam praesentium voluptate at eum magni obcaecati eos quo quibusdam. Aliquid minus officia doloribus eveniet, rem fugiat non debitis itaque eaque! Consequatur.</p>
        </div>
    </div> );
}
 
export default BodyHome;