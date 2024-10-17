import { useRecoilState, useRecoilValue } from 'recoil'
import { bitState, currentProductionState } from '@state/atoms'
import { StyledAside } from './styled'
import { useEffect } from 'react'

const Bits = () => {
    const [bits, setBits] = useRecoilState(bitState)
    const currentProduction: number = useRecoilValue(currentProductionState)

    useEffect(() => {
      // Retrieve the last update time from localStorage
      const lastUpdateTime = localStorage.getItem('lastUpdateTime');
      if (lastUpdateTime) {
          const elapsedTime = Math.floor((Date.now() - Number(lastUpdateTime)) / 1000);
          // Increment bits based on elapsed time
          localStorage.setItem('bitState', String(bits + parseFloat((elapsedTime * currentProduction).toFixed(1))))
      }

      // Update the last update time in localStorage
      localStorage.setItem('lastUpdateTime', String(Date.now()));

      // Set up the interval to increment bits every second
      const intervalId = setInterval(() => {
          setBits((currVal) => currVal + parseFloat(currentProduction.toFixed(1)));
          // Update the last update time in localStorage
          localStorage.setItem('lastUpdateTime', String(Date.now()));
      }, 1000);

      // Cleanup function to clear the interval
      return () => {
          clearInterval(intervalId);
      };
  }, [currentProduction, setBits]); // Dependencies include currentProduction and setBits

    return (
        <StyledAside>
          <h3>currentProduction: {currentProduction.toFixed(1)}</h3>
          <button onClick={() => setBits((currVal) => currVal + 1)}>
            bits is {bits.toFixed(1)}
          </button>
        </StyledAside>
    )
}

export default Bits