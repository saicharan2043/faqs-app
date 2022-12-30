// Write your code here.
import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

class faqsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      QuestionList: [
        props.faqsList.map(echValue => ({...echValue, isTrue: false})),
      ],
    }
  }

  render() {
    const {QuestionList} = this.state
    return (
      <div className="bg-color">
        <div className="container">
          <h1 className="heading">FAQs</h1>
          <ul className="ul-order-list">
            {QuestionList.map(echValue => (
              <FaqItem
                listItems={echValue}
                key={echValue.id}
                clickSilmbal={this.clickSilmbal}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default faqsList
