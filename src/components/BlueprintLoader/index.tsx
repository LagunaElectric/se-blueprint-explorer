import React, { Component } from 'react'

type Props = {}

type State = {
  files?: FileList | null,
  fileContents?: String | ArrayBuffer | undefined
}

export default class BlueprintLoader extends Component<Props, State> {
  state: State = { files: null }
  inputRef: React.RefObject<HTMLInputElement>

  constructor(props: Props) {
    super(props)
    this.handleUpload = this.handleUpload.bind(this)
    this.inputRef = React.createRef<HTMLInputElement>()
  }

  handleUpload(e: React.ChangeEvent<HTMLInputElement>): void {
    const selectedFiles = this.inputRef.current?.files
    console.log(selectedFiles)
    this.setState({ files: selectedFiles })
    console.log(this.state.files)
    const fileReader = new FileReader()
    fileReader.onloadend = e => {
      const content = fileReader.result
      this.setState({ fileContents: content ?? "No file" })
      console.log(content)
    }
    fileReader.readAsText(this.state.files?.[0] ?? new Blob())
  }

  render() {
    return (
      <>
        <input type="file" ref={ this.inputRef } onChange={ this.handleUpload } />
        <button onClick={ (e: React.MouseEvent<HTMLButtonElement>) => console.log(this.state) }>log bp</button>
        <p>{ this.state.fileContents?.toString() }</p>
      </>
    )
  }
}