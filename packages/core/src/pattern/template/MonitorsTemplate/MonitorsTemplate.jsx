import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './MonitorsTemplate.prop'
import { useMonitorsState } from './MonitorsTemplate.hook'
import styles from './MonitorsTemplate.scss'

export function MonitorsTemplate() {
  const {
    Alert: { Alert },
  } = primer

  const { container, alert, content } = styles

  const { dataTestMonitors, navigatorHeading, instance, state } = useMonitorsState()

  return (
    <div className={container}>
      <Alert
        dataTest={{
          default: dataTestMonitors.alert.div.default,
          approve: dataTestMonitors.alert.button.approve,
          cancel: dataTestMonitors.alert.button.cancel,
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

MonitorsTemplate.defaultProps = defaultProps

MonitorsTemplate.propTypes = propTypes
