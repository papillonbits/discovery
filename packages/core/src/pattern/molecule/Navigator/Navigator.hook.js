import { useSelector } from 'react-redux'
import { useBindActionCreators } from '../../../store/dispatch'

export function useNavigatorState() {
  const { contextSetNavigationAction, getFilesObjectsNewSelectedInstanceThunk } = useBindActionCreators()

  const instance = useSelector(({ context }) => context.instance)
  const contextNavigation = useSelector(({ context }) => context.navigation)
  const state = useSelector(({ ui }) => ui.state)

  /* istanbul ignore next */
  function contextNavigationTabNavOnClick(newNavigation) {
    contextSetNavigationAction(newNavigation)
  }

  /* istanbul ignore next */
  function instanceDropdownOnClick(newInstance) {
    getFilesObjectsNewSelectedInstanceThunk({ newInstance })
  }

  return {
    instance,
    contextNavigation,
    state,
    contextNavigationTabNavOnClick,
    instanceDropdownOnClick,
  }
}
