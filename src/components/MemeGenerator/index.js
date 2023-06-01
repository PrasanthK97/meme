import {Component} from 'react'

import {Heading, DivContainer} from './styledComponents'

const fontSizesOptionsList = [
  {
    optionId: '8',
    displayText: '8',
  },
  {
    optionId: '12',
    displayText: '12',
  },
  {
    optionId: '16',
    displayText: '16',
  },
  {
    optionId: '20',
    displayText: '20',
  },
  {
    optionId: '24',
    displayText: '24',
  },
  {
    optionId: '28',
    displayText: '28',
  },
  {
    optionId: '32',
    displayText: '32',
  },
]
// Write your code here
class MemeGenerator extends Component {
  state = {
    url: '',
    top: '',
    bot: '',
    fontSize: 20,
    inputUrl: '',
    inputTop: '',
    inputBot: '',
    inputFontSize: 20,
  }

  submitForm = event => {
    const {inputTop, inputBot, inputUrl, inputFontSize} = this.state

    this.setState({
      url: inputUrl,
      top: inputTop,
      bot: inputBot,
      fontSize: parseInt(inputFontSize),
    })
    event.preventDefault()
  }

  changeUrl = event => {
    this.setState({inputUrl: event.target.value})
    console.log(event.target.value)
  }

  changeTopText = event => {
    this.setState({inputTop: event.target.value})
    console.log(event.target.value)
  }

  changeBotText = event => {
    this.setState({inputBot: event.target.value})
    console.log(event.target.value)
  }

  changeFont = event => {
    this.setState({inputFontSize: event.target.value})
    console.log(event.target.value)
  }

  render() {
    const {url, fontSize, top, bot} = this.state
    console.log('render', fontSize)
    return (
      <div>
        <div>
          <form onSubmit={this.submitForm}>
            <h1>Meme Generator</h1>
            <label htmlFor="imageUrl">Image URL</label>
            <br />
            <input onChange={this.changeUrl} id="imageUrl" type="text" />
            <br />
            <label htmlFor="top text">Top Text</label>
            <br />
            <input onChange={this.changeTopText} id="top text" type="text" />
            <br />
            <label htmlFor="bottom text">Bottom Text</label>
            <br />
            <input onChange={this.changeBotText} id="bottom text" type="text" />
            <br />
            <label htmlFor="Font Size">Font Size</label>
            <br />
            <select id="Font Size" onChange={this.changeFont}>
              {fontSizesOptionsList.map(each => (
                <option value={each.optionId}>{each.optionId}</option>
              ))}
            </select>
            <br />
            <button type="submit">Generate</button>
          </form>
        </div>
        <DivContainer data-testid="meme" fontSz={fontSize} bgUrl={url}>
          <Heading fontSz={fontSize} alignPara="flex-start">
            {top}
          </Heading>
          <Heading fontSz={fontSize} alignPara="flex-end">
            {bot}
          </Heading>
        </DivContainer>
      </div>
    )
  }
}

export default MemeGenerator
