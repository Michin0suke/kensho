import React from 'react'
import styled from 'styled-components'
import HomeLayout from './HomeLayout/HomeLayout'
import Id from '../Id/Id'

export default class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      countOfContents: 3,
      layoutsLength: 3,
      isId: 0,
      layouts: [],
      contents: [],
      categoryList: []
    }
  }

  componentDidMount () {
    fetch('https://prizz.jp/homeLayout.json')
      .then(responce => responce.json())
      .then(json => {
        let layouts = JSON.parse(JSON.stringify(json)).contents
        this.setState({ layouts: layouts })
        return layouts
      })
      .then(layouts => {
        for (let i in layouts) {
          if ('endpoint' in layouts[i]) {
            fetch(`https://api.prizz.jp/${layouts[i].endpoint}`)
              .then(response => response.json())
              .then(json => {
                let pairContent = JSON.parse(JSON.stringify(json))
                pairContent.no = layouts[i].no
                let contents = this.state.contents.slice()
                this.setState({ contents: contents.concat(pairContent) })
              })
          } else {
            let contents = this.state.contents.slice()
            this.setState({ contents: contents.concat(layouts[i]) })
          }
        }
      })
      .catch(ex => console.log('parsing failed', ex))

    fetch('https://prizz.jp/categoryList.json')
      .then(responce => responce.json())
      .then(json => {
        const categoryList = JSON.parse(JSON.stringify(json))
        this.setState({ categoryList: categoryList })
      })
  }

  fetchMoreData = () => {
    const layouts = this.state.layouts.slice()
    this.setState({
      layouts: layouts.concat(layouts)
    })
  }

  onClickId = id => {
    if (id !== undefined) {
      this.setState({ isId: id })
    } else {
      // setTimeout(() => this.setState({ isId: 0 }), 300)
      this.setState({ isId: 0 })
    }
  }

  render = () => {
    let renderContents = []
    // stateがcontentsとlayoutの両方反映されているときのみ実行する。
    if (this.state.layouts.length === this.state.contents.length && this.state.contents.length !== 0) {
      this.state.layouts.forEach((layout, index) => {
        let pairContent = this.state.contents.find(content => {
          return content.no === layout.no
        })
        renderContents.push(
          <HomeLayout
            key={index}
            layout={layout}
            content={pairContent}
            categoryList={this.state.categoryList}
            onClick={this.onClickId}
          />)
      })
      if (this.state.isId !== 0) {
        let contents = this.state.contents
          .filter(c => c.contents)
          .map(c => c.contents)
          .map(c =>
            c.filter(s => s.id === this.state.isId)[0]
          )
          .filter(c => c !== undefined)[0]
        if (contents !== undefined) {
          renderContents.push(<Id key={this.state.isId} contents={contents} onClick={this.onClickId} />)
        } else {
          console.log(`contents in Home.js : ${contents}`)
        }
      }
    }
    return (
      <Wrapper>
        {renderContents}
      </Wrapper>
    )
  }
}
const Wrapper = styled.div`
  margin: 0;
  padding: 0;
`
