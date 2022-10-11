import { useSelector } from 'react-redux'
import { pageContent } from '../../../library/constant'
import { dataTestDashboard } from '../../../library/constant/dataTest/dashboard'
import { alertTextDashboard } from '../../../library/constant/alertText/dashboard'

export function useDashboardState() {
  const navigatorHeading = pageContent.dashboard.subheadHeading
  const instance = useSelector(({ context }) => context.instance)
  const contextAuthorization = useSelector(({ context }) => context.authorization)
  const state = useSelector(({ ui }) => ui.state)

  return {
    dataTestDashboard,
    alertTextDashboard,
    navigatorHeading,
    instance,
    contextAuthorization,
    state,
  }
}
