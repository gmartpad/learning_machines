import React, { useState } from 'react'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue
} from 'recoil'
import './App.css'
import { bitState } from './state/atoms'
import Bits from './components/Bits'

function App() {
  

  return (
    <RecoilRoot>
      <Bits/>
    </RecoilRoot>
  )
}

export default App
