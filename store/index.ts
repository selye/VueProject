import { createPinia } from 'pinia';
import useCountStore from "./modules/useCount.ts"

const pinia = createPinia()
export { useCountStore }
export default  pinia