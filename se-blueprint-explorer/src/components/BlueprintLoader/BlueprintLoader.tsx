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
    reader.onload = async function (event) {
      // The file's text will be printed here
      console.log(event.target?.result)
      setFileContent(String(event.target?.result))
      dispatch(readFile(String(event.target?.result)))
      const res = await fetch('http://localhost:8000/test', {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify({ xml: event.target?.result })
      })
      console.log(res)
    }
    reader.readAsText(file)
  }

  return (
    <>
      <input type="file" onChange={ onChange } />
      <button onClick={ (e: React.MouseEvent<HTMLButtonElement>) => console.log(file) }>log bp</button>
      <p>{ file.toString() }</p>
    </>
  )
}