import { atom } from "recoil";

const bitState = atom({
    key: 'bitState',
    default: 0
})

export {
    bitState
}