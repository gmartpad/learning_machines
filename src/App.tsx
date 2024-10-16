// import React, { useState } from 'react'
import {
  RecoilRoot,
  // atom,
  // selector,
  // useRecoilState,
  // useRecoilValue
} from 'recoil'
import Bits from './components/Bits'
import CenterMain from '@components/CenterMain'
import BotBuyList from '@components/BotBuyList'

function App() {
  return (
    <RecoilRoot>
      <div
        style={{
          height: '100vh',
          width: '100vw',
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Bits/>
        <CenterMain/>
        <BotBuyList/>
      </div>
    </RecoilRoot>
  )
}

export default App
