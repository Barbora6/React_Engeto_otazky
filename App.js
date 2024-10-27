
import questions from './data'
import Question from './components/Question'

const App = () => {
  return (
    <div className="questions-box">
      {
        questions.map((oneQuestion) => {
          return <Question key={oneQuestion.id}
                {...oneQuestion}
                    />
        })
      }
    </div>
  )
}

export default App



























// import Question from "./components/Question"
// import questions from "./data"
// import './App.css'

// const App = () => {


//   return (
//     <div className="questions-box">
//       {
//         questions.map( oneQuestion => {
//           return <Question key={oneQuestion.id} {...oneQuestion}/>
//           // spred operátor
//         })
//       }
//     </div>
//   )
// }

// export default App