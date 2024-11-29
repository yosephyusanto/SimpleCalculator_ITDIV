import './SupportMessage.css'

function SupportMessage(){
  return (
    <div className="support-message-wrapper">
      <h1 className="thank-message">Thank You for sending us your report, we will track the problem now</h1>
      <p className='ticket-number'><span>ticket number: </span> {Math.floor(Math.random() * 10000)
            .toString()
            .padStart(4, "0")}</p>
    </div>
  )
}

export default SupportMessage;