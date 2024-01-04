import { defineStore } from "pinia";

const useCountStore = defineStore("count", {
    state: () => ({
        count: 0
    }),
    getters: {
        double: (state) => state.count * 2,
    },
    actions: {
        increment(){
            this.count++
        },
        clear(){

        }
    }
})

export default useCountStore