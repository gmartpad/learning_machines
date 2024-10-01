import React from 'react'
import { useRecoilState } from 'recoil'
import { bitState } from '../state/atoms'

const Bits = () => {
    const [bits, setBits] = useRecoilState(bitState)

    return (
        <div className="card">
          <button onClick={() => setBits((currVal) => currVal + 1)}>
            bits is {bits}
          </button>
          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>
    )
}

export default Bits