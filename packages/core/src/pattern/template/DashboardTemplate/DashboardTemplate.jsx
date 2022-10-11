import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './DashboardTemplate.prop'
import { useDashboardState } from './DashboardTemplate.hook'
import styles from './DashboardTemplate.scss'

export function DashboardTemplate() {
  const {
    Alert: { Alert },
  } = primer

  const { container, alert, content } = styles

  const { dataTestDashboard, navigatorHeading, instance, state } = useDashboardState()

  return (
    <div className={container}>
      <Alert
        dataTest={{
          default: dataTestDashboard.alert.div.default,
          approve: dataTestDashboard.alert.button.approve,
          cancel: dataTestDashboard.alert.button.cancel,
        }}
        className={alert}
        variant={state.message.type}
        consent={state?.consent}
      >
        {state.message.text}
      </Alert>
      <Navigator heading={navigatorHeading} />
      <div className={content}>{instance.items.length === 0 ? <div>No Data!</div> : <div className={content}>📝 Coming soon 🐬</div>}</div>
    </div>
  )
}

DashboardTemplate.defaultProps = defaultProps

DashboardTemplate.propTypes = propTypes
