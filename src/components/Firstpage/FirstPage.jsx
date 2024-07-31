import React from 'react'
import './FirstPage.css'
import vinay_pic from '../Image/vinay_pic.jpg'

const FirstPage = () => {
  return (
    <div className="alltext">
     <div className="front">
      <h1>this is  the resume</h1>
  
     </div>
     <div className="contact">
     <div className="pic">
        <img src={vinay_pic} alt=""/>
      </div>
      <h2>name:vinay kumar</h2>
      <h2>pho no:+9129994379</h2>
      <h2>email:vinay2272001@gmail.com</h2>
     
     </div>
     
     <hr/>
     <section className="object">
            <h2>OBJECT</h2>
            <p> To work with an organization where can learn new skills and increase
               my abilities for the organizational goals as well as myself.  </p>
     </section>
     <hr/>
     <section className="object">
            <h2>EDUCATION</h2>
            <p>DEGREE: BCA FROM CHANDIGARH GROUP OF COLLEGE JHANJERI (MOHALI)  
              <br/>10TH PASSED FROM STATE BOARD , SCORE:70%  
               
               <br/>12TH PASSED FROM STATE BOARD , SCORE:78%  
        </p>
     </section>
     <br/>
     <section className="object">
            <h2>EXPERIENCE</h2>
            <p>Deep understating of current performance coding tools and Strategies.<br/> Excellent interpersonal skills with the ability to build Strong ties to partners.<br/> 
              I am fresher having good knowledge of coding and communication skills.   
        </p>
     </section>
     <br/>
     <section className="object">
            <h2>SKILLS</h2>
            <p>           SQL(DATABASE) I MS EXCEL <br/> 
                 WEB DEVLOPMENT(FROTN-END-DEVLOPMENT)  <br/>
            I.HTML 2.CSS 3.JAVA SCRIPT 4. BOOTSTRAP 5. REACT JS 6.PHP <br/> 
                                       GOOD COMMUNICATION SKILLS  
 
        </p>
     </section>
     <section className="object">
            <h2>HOBBIES</h2>
            <p>           
            1.READING BOOK              2. TRAVELING                        3. CODING               4.PLAYING CRICKET   
        </p>
     </section>

    </div>
  )
}

export default FirstPage