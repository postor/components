import React from 'react'
import {Glyphicon } from 'react-bootstrap'

export const eventTypes = {
  closeAll: 'closeAll',
  openAll: 'openAll'
}

export default class DefaultTemplate extends React.Component {

  handleOpen(isOpen) {
    const { data = {}, updateData, } = this.props

    updateData({
      ...data,
      isOpen,
    })
  }

  handleOpenAll(isOpen) {
    const { treeEvent } = this.props
    treeEvent(isOpen ? eventTypes.openAll : eventTypes.closeAll)
  }

  render() {
    const { data = {}, children = [], } = this.props
    const handleOpen = this.handleOpen.bind(this)
    const handleOpenAll = this.handleOpenAll.bind(this)

    const getControls = (isOpen) => {
      if (isOpen) {
        return (<span>
          <Glyphicon glyph="chevron-down" onClick={() => handleOpen(false)} />
        </span>)
      }
      return (<span>
        <Glyphicon glyph="chevron-right" onClick={() => handleOpen(true)} /> 
        <Glyphicon glyph="triangle-right" onClick={() => handleOpenAll(true)} />
      </span>)
    }

    return (
      <div>
        <p>{data.title} {getControls(data.isOpen)}</p>
        <ul style={{ display: data.isOpen ? 'block' : 'none' }}>
          {children.map((x, i) => (<li key={i}>{x}</li>))}
        </ul>
      </div>
    )
  }
}