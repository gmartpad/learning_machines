import { useRecoilState } from 'recoil'
import { bitState } from '@state/atoms'
import { StyledAside } from './styled'

const Bits = () => {
    const [bits, setBits] = useRecoilState(bitState)

    return (
        <StyledAside>
          <button onClick={() => setBits((currVal) => currVal + 1)}>
            bits is {bits}
          </button>
        </StyledAside>
    )
}

export default Bits