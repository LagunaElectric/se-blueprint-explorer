import React, { Component } from 'react'

type Props = {}

type State = {
  files?: FileList | null,
  fileContents?: String | ArrayBuffer | null
}

export default class BlueprintLoader extends Component<Props, State> {
  state: State = { files: null }
  inputRef: React.RefObject<HTMLInputElement>

  constructor(props: Props) {
    super(props)
    this.inputRef = React.createRef<HTMLInputElement>()
    this.onChange = this.onChange.bind(this)
  }


  onChange(event: React.ChangeEvent<HTMLInputElement>) {
    var file = event.target.files?.[0] ?? new Blob()
    var reader = new FileReader()
    reader.onload = function (event) {
      // The file's text will be printed here
      console.log(event.target?.result)
    }
    reader.readAsText(file)
  }

  render() {
    return (
      <>
        <input type="file" ref={ this.inputRef } onChange={ this.onChange } />
        <button onClick={ (e: React.MouseEvent<HTMLButtonElement>) => console.log(this.state) }>log bp</button>
        <p>{ this.state.fileContents?.toString() }</p>
      </>
    )
  }
}