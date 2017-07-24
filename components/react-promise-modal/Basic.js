import React from 'react'
import Modal from 'react-promise-modal'

class SomeComponent extends React.Component {
  render() {
    return (<div>
      <button onClick={this.showModal.bind(this)}>do something </button>
      <Modal ref="modal" />
    </div>)
  }

  showModal() {
    const { modal } = this.refs

    modal.show()
      .then((result) => {
        alert('resolve:'+JSON.stringify(result))
      })
      .catch((err) => {
        alert('reject:'+JSON.stringify(err))
      })
  }
}

export default SomeComponent