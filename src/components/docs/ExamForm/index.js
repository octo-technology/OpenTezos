import { jsPDF } from 'jspdf'
import React from 'react'

import styles from './styles.module.css'

class ExamForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      sucess: undefined,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(event) {
    event.preventDefault()
    let responseCount = 0
    let errorCount = 0

    this.props.children.forEach((elem) => {
      if (elem.props.mdxType === 'ExamCheckbox') {
        responseCount += 1
        if ((elem.props.isCorrect === 'true') !== !!this.state[elem.props.name]) errorCount += 1
      }
    })

    // alert('Errors: ' + errorCount + ' responseCount: ' + responseCount + ' errorPercent: ' + parseInt(errorCount / responseCount * 100))

    if(parseInt(errorCount / responseCount * 100) <= 10) {
      const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: [1100, 800],
      })
      doc.addImage('/certif/certificate.jpg', 'JPEG', 0, 0, 1100, 800)
      doc.setFontSize(50)
      doc.text(this.state.name || '', 550, 440, { align: 'center' })
      doc.text(this.props.moduleName || '', 550, 600, { align: 'center' })
  
      doc.save('certificate.pdf')
  
      this.setState({ success: true })
    } else {
      this.setState({ success: false })
    }

    
  }

  handleChange(event) {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value,
    })
  }

  handleNameChange(event) {
    this.setState({name: event.target.value});
  }

  render() {
    console.log(this.state)

    return (
      <form onSubmit={this.handleSubmit}>
        {this.props.children.map((elem) => {
          if (elem.props.mdxType === 'ExamCheckbox')
            return (
              <div key={elem.props.children}>
                <label>
                  <input
                    name={elem.props.name}
                    type="checkbox"
                    checked={this.state[elem.props.name]}
                    onChange={this.handleChange}
                  />
                  {elem.props.children}
                </label>
                <br />
              </div>
            )
          else if (elem.props.mdxType === 'h3')
            return (
              <div>
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
              <input type="text" value={this.state.name} onChange={this.handleNameChange} />
            </label>
            <input type="submit" value="Submit" />
          </div>
        )}
      </form>
    )
  }
}

class ExamCheckbox extends React.Component {
  render() {
    return <div />
  }
}

export { ExamForm, ExamCheckbox }
