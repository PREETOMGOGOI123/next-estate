import {create} from 'zustand'

const usePropertyIndexStore = create((set) => ({
    currentIndex: null,
    setSelectedIndex:(state) => set({currentIndex: state}),
}))

export default usePropertyIndexStore;