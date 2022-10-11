import { MonitorsTemplate } from '../../template/MonitorsTemplate'
import { defaultProps, propTypes } from './MonitorsPage.prop'

export function MonitorsPage() {
  return <MonitorsTemplate />
}

MonitorsPage.defaultProps = defaultProps

MonitorsPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default MonitorsPage
