import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { continuePagePath } from '../../../route/path'

export function useAuthorizationState() {
  const navigate = useNavigate()

  const contextAuthorization = useSelector(({ context }) => context.authorization)
  const state = useSelector(({ ui }) => ui.state)

  if (contextAuthorization.token) {
    navigate(continuePagePath)
  }

  return {
    state,
  }
}
