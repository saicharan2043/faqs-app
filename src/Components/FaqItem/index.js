// Write your code here.
import "./index.css"

const FaqItem = (props) ={

    const {listItems , clickSilmbal} = props
    
    const {questionText , answerText , isTrue} = listItems

    return(
        <li className="list">
            <div className="top-container">
                <h1 className="top-text">{questionText}</h1>
                <img src={isTrue ? "https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png" : "https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"} alt="" className="top-img"/>
            </div>
            {isTrue ? 
                <hr className="hr-line"/>
                <p className="discription">{answerText}</p> : null
            }
        </li>
    )
}

export default FaqItem