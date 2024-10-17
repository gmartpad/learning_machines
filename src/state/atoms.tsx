import { atom, selector } from "recoil";

// Utility function to check and parse value from localStorage
const getLocalStorageValue = (key: string, defaultValue: any) => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue): defaultValue;
}

const bitState = atom({
    key: 'bitState',
    default: Number(getLocalStorageValue('bitState', 0)),
    effects: [
        ({ setSelf, onSet }) => {
            // On initialization, set atom state from localStorage if available
            const storedValue = localStorage.getItem('bitState');

            if(storedValue != null) {
                setSelf(Number(JSON.parse(storedValue)));
            }

            // Save to localStorage whenever the atom state changes
            onSet((newValue) => {
                localStorage.setItem('bitState', JSON.stringify(newValue));
            })
        }
    ]
})

// 

const autoIncrementatorsState = atom({
    key: 'autoIncrementatorsState',
    default: getLocalStorageValue('autoIncrementatorsState', [
        {
            name: 'Turing Testers',
            units: 0,
            pricePerUnit: 20,
            productionPerUnit: 0.1
        }
    ]),
    effects: [
        ({ setSelf, onSet }) => {
            // On initialization, set atom state from localStorage if available
            const storedValue = localStorage.getItem('autoIncrementatorsState');

            if(storedValue != null) {
                setSelf(JSON.parse(storedValue));
            }

            // Save to localStorage whenever the atom state changes
            onSet((newValue) => {
                localStorage.setItem('autoIncrementatorsState', JSON.stringify(newValue))
            })
        }
    ]
})

// Selector for current production state using reduce
const currentProductionState = selector({
    key: 'currentProductionState', // unique ID
    get: ({ get }) => {
        // Get the autoIncrementatorsState
        const autoIncrementators = get(autoIncrementatorsState);

        console.log('autoIncrementators: ', autoIncrementators)
        
        // Calculate total production using reduce
        const totalProduction = autoIncrementators.reduce((total: number, incrementator: {
            name: string,
            units: number,
            pricePerUnit: number,
            productionPerUnit: number
        }) => {
            return Number(total + incrementator.units * incrementator.productionPerUnit);
        }, 0);

        console.log('totalProduction: ', totalProduction)
        
        return totalProduction;
    }
});

export {
    bitState,
    autoIncrementatorsState,
    currentProductionState
}