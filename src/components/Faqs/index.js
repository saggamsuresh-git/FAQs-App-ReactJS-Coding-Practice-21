// Write your code here.
import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="bg-container">
      <div className="faqs-container">
        <h1 className="faqs-heading">FAQs</h1>
        <ul className="list-container">
          {faqsList.map(each => (
            <FaqItem faqsList={each} key={each.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
