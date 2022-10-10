import React, { useState } from 'react'

import { useAppSelector, useAppDispatch } from '../../app/hooks'
import { readFile, selectFile } from './blueprintLoaderSlice'


export default function BlueprintLoader() {
  const file = useAppSelector(selectFile)
  const dispatch = useAppDispatch()
  const [fileContent, setFileContent] = useState('')



  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    var file = event.target.files?.[0] ?? new Blob()
    var reader = new FileReader()
    reader.onload = function (event) {
      // The file's text will be printed here
      console.log(event.target?.result)
      setFileContent(String(event.target?.result))
      dispatch(readFile(String(event.target?.result)))
    }
    reader.readAsText(file)
  }

  return (
    <>
      <input type="file" onChange={ onChange } />
      <button onClick={ (e: React.MouseEvent<HTMLButtonElement>) => console.log(fileContent) }>log bp</button>
      <p>{ file.substring(0, 255) }</p>
    </>
  )
}