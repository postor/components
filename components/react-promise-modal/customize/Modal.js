

import { Modal, Button } from 'react-bootstrap'
import PromiseModal from 'react-promise-modal'

const options = ['','A','B','C']

export default class Customized extends PromiseModal {

  constructor(props) {
    super(props)

    const { selected = '' } = props
    this.state = {
      ...this.state, // {show:false}
      selected,
    }
  }


  /**
   * 用于变更配置
   * @return {Object}
   */
  getConfig() {
    const { selected } = this.state
    const resolve = this.getResolve()
    const reject = this.getReject()

    return {
      headerContent: (<Modal.Title>Customized Modal</Modal.Title>),
      bodyContent: (<p>select and confirm：
        <select value={selected} onChange={this.handleSelect.bind(this)}>
          {options.map((v)=>(<option key={v} value={v}>{v||'--'}</option>))}
        </select>
      </p>),
      footerContent: (<div>
        <Button onClick={() => reject('cancleBtn')}>Cancle</Button>
        {!!selected && <Button bsStyle="primary" onClick={() => resolve(selected)}>Confirm</Button>}
      </div>),
      modalProps: { className: 'test' },
      headerProps: { closeButton: false },
      bodyProps: { style: { color: '#FF0000' } },
      footerProps: {},
    }
  }

  handleSelect(e){
    this.setState({
      selected: e.target.value,
    })
  }
}