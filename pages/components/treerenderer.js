import React from 'react'
import { Grid, Row, Col, Panel,Glyphicon } from 'react-bootstrap'

import Layout from '../../components/Layout.js'
import BasicTree from '../../components/react-tree-renderer/basic/Container'
import UpdateTree from '../../components/react-tree-renderer/update/Container'
import EventTree from '../../components/react-tree-renderer/event/Container'

const list = {
  BasicTree,
  UpdateTree,
  EventTree,
}

class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: {},
    }
  }

  render() {
    const select = this.select.bind(this)
    const { selected } = this.state
    return (
      <div>
        <h1>react-tree-renderer</h1>
        <Grid>
          <Row>
            <Col>
              <div>
                {Object.keys(list).map((title) => {
                  const Container = list[title]
                  return (selected[title]) ?
                    <Panel key={title} header={(<span onClick={
                      () => select(title)
                    }>{title}<Glyphicon glyph="chevron-down"/></span>)} >
                      <Container />
                    </Panel> : <Panel key={title} header={(<span onClick={
                      () => select(title)
                    }>{title}<Glyphicon glyph="chevron-right"/></span>)} ></Panel>
                })}
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

  select(title) {
    const { selected } = this.state
    selected[title] = !selected[title]
    this.setState({ selected })
  }
}

export default Layout(Post)