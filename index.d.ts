import {
  InterpolationValue,
  GlobalStyleComponent,
  DefaultTheme
} from 'styled-components'

declare const preflight: InterpolationValue
declare const Preflight: GlobalStyleComponent<{}, DefaultTheme>

export { preflight, Preflight }
export default preflight
