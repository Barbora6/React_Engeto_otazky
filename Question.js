import './Question.css'
import { useState } from 'react'
import { FaAnglesLeft } from "react-icons/fa6";

const Question = ({title, info}) => {

  const[show, setShow] = useState(false)

  return <section className="one-question">
    <div className="one-question-main">
    <FaAnglesLeft className='question-icon'/>
      <h2>{title}</h2>
      <button onClick={() => setShow(!show)}>Odpověď</button>
    </div>
    {show && <p>{info}</p>}
  </section>
}

export default Question




























// import './Question.css'
// import { useState } from 'react'
// import { FaArrowRight } from "react-icons/fa6";

// const Question = ( {title, info}) => {
//     const[show, setShow] = useState(false)


//   return <section className='one-question'>
//     <div className="one-question-main">
//     <FaArrowRight className='question-icon'/>
//     <h2>{title}</h2>
//     <button onClick={ () => setShow(!show)}>Odpověď</button>
//     </div>
    
//     {show && <p>{info}</p>}
//   </section>
  
// }

// export default Question