// import { jsPDF } from 'jspdf'
import React from 'react'

import styles from './styles.module.css'

class ExamForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: '',
      sucess: undefined,
      showAnswers: false,
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    let responseCount = 0
    let errorCount = 0

    this.setState({ showAnswers: true })

    this.props.children.forEach((elem) => {
      if (elem.props && elem.props.mdxType === 'ExamCheckbox') {
        responseCount += 1
        if ((elem.props.isCorrect === 'true') !== !!this.state[elem.props.name]) errorCount += 1
      }
    })

    if (parseInt((errorCount / responseCount) * 100) <= 10) {
      // 10% of errors accepted
      //   const doc = new jsPDF({
      //     orientation: 'landscape',
      //     unit: 'px',
      //     format: [1100, 800],
      //   })
      //   doc.addImage('/certif/certificate.jpg', 'JPEG', 0, 0, 1100, 800)
      //   doc.setFontSize(50)
      //   doc.text(this.state.userName || '', 550, 440, { align: 'center' })
      //   doc.text(this.props.moduleName || '', 550, 600, { align: 'center' })

      //   doc.save(`Certificate ${this.props.moduleName}.pdf`)

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
    this.setState({ userName: event.target.value })
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        {this.props.children.map((elem) => {
          if (elem.props && elem.props.mdxType === 'ExamCheckbox')
            return (
              <div key={elem.props.name}>
                <label>
                  {this.state.showAnswers && (
                    <div style={{ display: 'inline-block '}}>
                      {!!this.state[elem.props.name] === (elem.props.isCorrect === 'true') ? (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M23.1459 5.40002L20.3539 2.60002C20.3075 2.55346 20.2523 2.51651 20.1915 2.49131C20.1308 2.4661 20.0657 2.45312 19.9999 2.45312C19.9341 2.45312 19.869 2.4661 19.8083 2.49131C19.7475 2.51651 19.6924 2.55346 19.6459 2.60002L7.85391 14.4C7.80747 14.4466 7.75229 14.4835 7.69155 14.5087C7.6308 14.5339 7.56568 14.5469 7.49991 14.5469C7.43415 14.5469 7.36902 14.5339 7.30828 14.5087C7.24753 14.4835 7.19236 14.4466 7.14591 14.4L4.35391 11.6C4.30747 11.5535 4.25229 11.5165 4.19155 11.4913C4.1308 11.4661 4.06568 11.4531 3.99991 11.4531C3.93415 11.4531 3.86902 11.4661 3.80828 11.4913C3.74753 11.5165 3.69236 11.5535 3.64591 11.6L0.853913 14.4C0.760177 14.4938 0.70752 14.6209 0.70752 14.7535C0.70752 14.8861 0.760177 15.0133 0.853913 15.107L7.14591 21.4C7.19236 21.4466 7.24753 21.4835 7.30828 21.5087C7.36902 21.5339 7.43415 21.5469 7.49991 21.5469C7.56568 21.5469 7.6308 21.5339 7.69155 21.5087C7.75229 21.4835 7.80747 21.4466 7.85391 21.4L23.1459 6.10002C23.2375 6.00655 23.2888 5.8809 23.2888 5.75002C23.2888 5.61914 23.2375 5.49348 23.1459 5.40002Z"
                            fill="#00CC14"
                          />
                        </svg>
                      ) : (
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M22.6639 5.57792C22.9451 5.29663 23.1031 4.91517 23.1031 4.51742C23.1031 4.11967 22.9451 3.73821 22.6639 3.45692L20.5429 1.33592C20.4036 1.19653 20.2382 1.08596 20.0562 1.01051C19.8741 0.935071 19.679 0.89624 19.4819 0.89624C19.2848 0.89624 19.0897 0.935071 18.9077 1.01051C18.7256 1.08596 18.5602 1.19653 18.4209 1.33592L12.1769 7.58092C12.1299 7.6277 12.0662 7.65395 11.9999 7.65395C11.9336 7.65395 11.8699 7.6277 11.8229 7.58092L5.57891 1.33592C5.43961 1.19653 5.27421 1.08596 5.09216 1.01051C4.9101 0.935071 4.71497 0.89624 4.51791 0.89624C4.32084 0.89624 4.12571 0.935071 3.94366 1.01051C3.76161 1.08596 3.59621 1.19653 3.45691 1.33592L1.33591 3.45692C1.0547 3.73821 0.896729 4.11967 0.896729 4.51742C0.896729 4.91517 1.0547 5.29663 1.33591 5.57792L7.58091 11.8229C7.62744 11.8701 7.65353 11.9337 7.65353 11.9999C7.65353 12.0662 7.62744 12.1298 7.58091 12.1769L1.33591 18.4219C1.0547 18.7032 0.896729 19.0847 0.896729 19.4824C0.896729 19.8802 1.0547 20.2616 1.33591 20.5429L3.45691 22.6639C3.59621 22.8033 3.76161 22.9139 3.94366 22.9893C4.12571 23.0648 4.32084 23.1036 4.51791 23.1036C4.71497 23.1036 4.9101 23.0648 5.09216 22.9893C5.27421 22.9139 5.43961 22.8033 5.57891 22.6639L11.8229 16.4189C11.8699 16.3721 11.9336 16.3459 11.9999 16.3459C12.0662 16.3459 12.1299 16.3721 12.1769 16.4189L18.4209 22.6639C18.5602 22.8033 18.7256 22.9139 18.9077 22.9893C19.0897 23.0648 19.2848 23.1036 19.4819 23.1036C19.679 23.1036 19.8741 23.0648 20.0562 22.9893C20.2382 22.9139 20.4036 22.8033 20.5429 22.6639L22.6639 20.5429C22.9451 20.2616 23.1031 19.8802 23.1031 19.4824C23.1031 19.0847 22.9451 18.7032 22.6639 18.4219L16.4189 12.1769C16.3724 12.1298 16.3463 12.0662 16.3463 11.9999C16.3463 11.9337 16.3724 11.8701 16.4189 11.8229L22.6639 5.57792Z"
                            fill="#F11717"
                          />
                        </svg>
                      )}
                    </div>
                  )}
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

        <br />
        <br />

        {this.state.success ? (
          <div className="green">Congrats, you have succeeded!</div>
        ) : (
          <div>
            {this.state.success === false && <div className="red">Sorry, you made too many mistakes.</div>}
            {/* <label>
              Your name:
              <input type="text" value={this.state.name} onChange={(e) => this.handleNameChange(e)} className="exam-name" />
            </label> */}
            <input type="submit" value="Submit" className="exam-submit" />
          </div>
        )}
      </form>
    )
  }
}

export default ExamForm
