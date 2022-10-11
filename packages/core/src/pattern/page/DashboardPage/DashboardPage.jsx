import { DashboardTemplate } from '../../template/DashboardTemplate'
import { defaultProps, propTypes } from './DashboardPage.prop'

export function DashboardPage() {
  return <DashboardTemplate />
}

DashboardPage.defaultProps = defaultProps

DashboardPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default DashboardPage
