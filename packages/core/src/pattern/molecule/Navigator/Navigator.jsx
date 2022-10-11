import { primer } from '@papillonbits/components'
import { defaultProps, propTypes } from './Navigator.prop'
import { useNavigatorState } from './Navigator.hook'
import styles from './Navigator.scss'

export function Navigator({ heading }) {
  const {
    Alert: { Alert, alertVariant },
    Dropdown: { Dropdown, dropdownState },
    Navigation: { TabNav, tabNavState },
    Subhead,
  } = primer

  const { alert, navigator, navigatorHeading, navigatorInstance } = styles

  const { instance, contextNavigation, state, contextNavigationTabNavOnClick, instanceDropdownOnClick } = useNavigatorState()

  return (
    <div className={navigator}>
      <Subhead className={navigatorHeading} heading={heading} />
      <TabNav
        ariaAttr={contextNavigation.ariaAttr}
        items={contextNavigation.items}
        onClick={contextNavigationTabNavOnClick}
        state={state.isLoading ? tabNavState.inactive : tabNavState.active}
      />
      {instance?.items?.length !== 0 ? (
        <Dropdown
          className={navigatorInstance}
          summary={instance.summary}
          ariaAttr={instance.ariaAttr}
          items={instance.items}
          onClick={instanceDropdownOnClick}
          state={state.isLoading ? dropdownState.inactive : dropdownState.active}
        />
      ) : (
        <Alert className={alert} variant={alertVariant.warning}>
          Instances empty!
        </Alert>
      )}
    </div>
  )
}

Navigator.defaultProps = defaultProps

Navigator.propTypes = propTypes
