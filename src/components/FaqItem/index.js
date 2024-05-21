// Write your code here.
import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isShowing: false}

  toggleButton = () => {
    this.setState(prevState => ({
      isShowing: !prevState.isShowing,
    }))
  }

  renderQuestion = () => {
    const {faqsList} = this.props
    const {questionText} = faqsList
    const {isShowing} = this.state

    console.log(questionText)

    const buttonIcon = isShowing
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const buttonIconAltText = isShowing ? 'minus' : 'plus'

    const classForListItem = isShowing ? 'list-item-class' : null

    return (
      <li className={`${classForListItem} list-item`}>
        <h1 className="question">{questionText}</h1>
        <button className="btn" type="button">
          <img
            onClick={this.toggleButton}
            src={buttonIcon}
            alt={buttonIconAltText}
          />
        </button>
      </li>
    )
  }

  renderAnswers = () => {
    const {faqsList} = this.props
    const {answerText} = faqsList
    const {isShowing} = this.state
    if (isShowing) {
      return (
        <li className="answer-in-list-item">
          <hr />
          <p>{answerText}</p>
        </li>
      )
    }
    return null
  }

  render() {
    const {faqsList} = this.props
    console.log(faqsList)
    return (
      <div>
        {this.renderQuestion()}
        {this.renderAnswers()}
      </div>
    )
  }
}

export default FaqItem
