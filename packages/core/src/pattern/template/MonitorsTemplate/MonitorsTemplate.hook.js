import { useSelector } from 'react-redux'
import { pageContent } from '../../../library/constant'
import { dataTestMonitors } from '../../../library/constant/dataTest/monitors'
import { alertTextMonitors } from '../../../library/constant/alertText/monitors'

export function useMonitorsState() {
  const navigatorHeading = pageContent.monitors.subheadHeading
  const instance = useSelector(({ context }) => context.instance)
  const contextAuthorization = useSelector(({ context }) => context.authorization)
  const state = useSelector(({ ui }) => ui.state)

  return {
    dataTestMonitors,
    alertTextMonitors,
    navigatorHeading,
    pageContent,
    instance,
    contextAuthorization,
    state,
  }
}
