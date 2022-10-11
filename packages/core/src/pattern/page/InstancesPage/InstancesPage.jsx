import { InstancesTemplate } from '../../template/InstancesTemplate'
import { defaultProps, propTypes } from './InstancesPage.prop'

export function InstancesPage() {
  return <InstancesTemplate />
}

InstancesPage.defaultProps = defaultProps

InstancesPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default InstancesPage
