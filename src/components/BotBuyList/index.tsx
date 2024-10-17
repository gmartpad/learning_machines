import { useRecoilState } from "recoil"
import { StyledAside } from "./styled"
import { autoIncrementatorsState, bitState } from "@state/atoms"

const BotBuyList = () => {

  const [bits, setBits] = useRecoilState(bitState)
  const [autoIncrementators, setAutoIncrementators] = useRecoilState(autoIncrementatorsState)

  function updateIncrementatorValue(items: any[], itemName: string, newValue: any) {
    return items.map(item => {
        if (item.name === itemName) {
            // Return a new object with the updated value
            return { ...item, ...newValue };
        }
        return item; // Return the original item if it doesn't match
    });
  }

  return (
    <StyledAside>
      {autoIncrementators.map((i: { name: string, units: number, pricePerUnit: number }, k: number) => (
        <button 
          key={k}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: 10,
            position: 'relative'
          }}
          onClick={
            () => {
              if(bits >= i.pricePerUnit) {
                setBits((currentBits) => Math.floor(currentBits - i.pricePerUnit))
                const updatedIncrementators = updateIncrementatorValue(
                  autoIncrementators, 
                  i.name, 
                  { 
                    units: i.units + 1, 
                    pricePerUnit: Math.floor(i.pricePerUnit + ((i.units + 1) * (i.pricePerUnit / 20)))
                  }
                )
                setAutoIncrementators(updatedIncrementators)
              }
            }
          }
        >
          <h2
            style={{
              margin: 0
            }}
          >
            {i.name}
          </h2>
          <h4 style={{ margin: 0, color: '#0f0' }}>{i.pricePerUnit} bits</h4>
          <p
            style={{
              fontSize: 40,
              position: 'absolute',
              right: 10,
              margin: 0
            }}
          >
            {i.units}
          </p>
        </button>
      ))}
    </StyledAside>
  )
}

export default BotBuyList