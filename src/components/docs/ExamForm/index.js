import { jsPDF } from 'jspdf'
import React from 'react'

import styles from './styles.module.css'

class ExamForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      sucess: undefined,
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    let responseCount = 0
    let errorCount = 0

    this.props.children.forEach((elem) => {
      if (elem.props && elem.props.mdxType === 'ExamCheckbox') {
        responseCount += 1
        if ((elem.props.isCorrect === 'true') !== !!this.state[elem.props.name]) errorCount += 1
      }
    })


    if(parseInt(errorCount / responseCount * 100) <= 10) { // 10% of errors accepted
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1100, 800],
      })
      doc.addImage('/certif/certificate.jpg', 'JPEG', 0, 0, 1100, 800)
      doc.setFontSize(50)
      doc.text(this.state.userName || '', 550, 440, { align: 'center' })
      doc.text(this.props.moduleName || '', 550, 600, { align: 'center' })
  
      doc.save(`Certificate ${this.props.moduleName}.pdf`)
  
      this.setState({ success: true })
    } else {
      this.setState({ success: false })
    }

    
  }

  handleChange(event) {
    console.log(event)
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleNameChange(event) {
    this.setState({userName: event.target.value});
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        {this.props.children.map((elem) => {
          if (elem.props && elem.props.mdxType === 'ExamCheckbox')
            return (
              <div key={elem.props.name}>
                <label>
                  <input
                    className="exam-checkbox"
                    name={elem.props.name}
                    type="checkbox"
                    checked={!!this.state[elem.props.name]}
                    onChange={(e) => this.handleChange(e)}
                  />
                  {elem.props.children}
                </label>
                <br />
              </div>
            )
          else if (elem.props && elem.props.mdxType === 'h3')
            return (
              <div key={elem.props.children}>
                <br />
                <br />
                {elem}
              </div>
            )
          else return elem
        })}

        <br /><br />

        {this.state.success ? (
          <div className="green">Congrats, your pdf certificate has been sent!</div>
        ) : (
          <div>
            {this.state.success === false && <div className="red">Sorry, you made too many mistakes, please try again.</div>}
            <label>
              Your name:
              <input type="text" value={this.state.name} onChange={(e) => this.handleNameChange(e)} className="exam-name" />
            </label>
            <input type="submit" value="Submit" className="exam-submit" />
          </div>
        )}
      </form>
    )
  }
}

export default ExamForm
