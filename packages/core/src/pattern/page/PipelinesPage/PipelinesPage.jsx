import { PipelinesTemplate } from '../../template/PipelinesTemplate'
import { defaultProps, propTypes } from './PipelinesPage.prop'

export function PipelinesPage() {
  return <PipelinesTemplate />
}

PipelinesPage.defaultProps = defaultProps

PipelinesPage.propTypes = propTypes

// Default export is required to use with React.lazy()
export default PipelinesPage
