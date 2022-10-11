import { getLocaleDateTimeString } from '@papillonbits/library/date'
import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './InstancesTemplate.prop'
import { useInstancesState } from './InstancesTemplate.hook'
import styles from './InstancesTemplate.scss'

export function InstancesTemplate() {
  const {
    Alert: { Alert, alertVariant },
    Button: { Button, buttonVariant, iconAlignment, buttonState },
    Form: {
      Input: { Input, inputState },
    },
    Grid: { FlexGrid, flexGridSelection, flexGridState },
    Icon: { iconName },
    Label,
    Pagination: { PreviousNext, previousNextState },
  } = primer

  const {
    container,
    alert,
    content,
    contentDisplay,
    contentDisplayGridInstances,
    contentDisplayPagination,
    contentDisplayEdit,
    contentDisplayEditField,
    contentDisplayEditFieldLabel,
    contentDisplayEditFieldInput,
    contentDisplayAction,
    contentDisplayActionGroup,
    contentDisplayActionGroupButton,
  } = styles

  const {
    dataTestInstances,
    alertTextInstances,
    navigatorHeading,
    contextAuthorization,
    currentPage,
    sort,
    edit,
    state,
    paginatedRandomInstancesObjectsNamesValues,
    editObjectNameOnChange,
    paginationOnClick,
    createObjectButtonOnClick,
    deleteObjectButtonOnClick,
    instancesObjectsFlexGridOnChange,
    instancesObjectsFlexGridOnClick,
  } = useInstancesState()

  if (contextAuthorization.isRequired && !contextAuthorization.token) {
    return (
      <Alert dataTest={{ default: dataTestInstances.alert.div.default }} className={alert} variant={alertVariant.error}>
        {alertTextInstances.authorize.notAuthorized}
      </Alert>
    )
  }

  return (
    <div className={container}>
      <Alert
        dataTest={{
          default: dataTestInstances.alert.div.default,
          approve: dataTestInstances.alert.button.approve,
          cancel: dataTestInstances.alert.button.cancel,
        }}
        className={alert}
        variant={state.message.type}
        consent={state?.consent}
      >
        {state.message.text}
      </Alert>
      <Navigator heading={navigatorHeading} />
      <div className={content}>
        <div className={contentDisplay}>
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Top' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={state.isLoading ? previousNextState.inactive : previousNextState.active}
          />
          <FlexGrid
            className={contentDisplayGridInstances}
            items={paginatedRandomInstancesObjectsNamesValues}
            idIndex={0}
            isSelectedIndex={1}
            selection={flexGridSelection.checkbox}
            sort={sort.object}
            onChange={instancesObjectsFlexGridOnChange}
            onClick={instancesObjectsFlexGridOnClick}
            onDoubleClick={() => {}}
            state={state.isLoading ? flexGridState.inactive : flexGridState.active}
          />
          <PreviousNext
            className={contentDisplayPagination}
            ariaAttr={{ label: 'Pagination Bottom' }}
            currentPage={currentPage}
            onClick={paginationOnClick}
            state={state.isLoading ? previousNextState.inactive : previousNextState.active}
          />
          <div className={contentDisplayEdit}>
            <div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Name" />
                <Input
                  dataTest={dataTestInstances.edit.input.instanceName}
                  className={contentDisplayEditFieldInput}
                  value={edit?.object?.name || ''}
                  placeholder="Edit name"
                  ariaAttr={{ label: 'Type in a name' }}
                  onChange={editObjectNameOnChange}
                  state={state.isLoading ? inputState.inactive : inputState.active}
                />
              </div>
            </div>
            <div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Date Modified" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={getLocaleDateTimeString(edit?.object?.['date-modified']) || ''}
                  state={inputState.inactive}
                />
              </div>
              <div className={contentDisplayEditField}>
                <Label className={contentDisplayEditFieldLabel} text="Date Created" />
                <Input
                  className={contentDisplayEditFieldInput}
                  value={getLocaleDateTimeString(edit?.object?.['date-created']) || ''}
                  state={inputState.inactive}
                />
              </div>
            </div>
          </div>
          <div className={contentDisplayAction}>
            <div className={contentDisplayActionGroup}>
              <Button
                dataTest={dataTestInstances.action.button.createInstance}
                className={contentDisplayActionGroupButton}
                text="Create Instance"
                icon={{ alignment: iconAlignment.left, name: iconName.Plus16 }}
                variant={buttonVariant.primary}
                onClick={createObjectButtonOnClick}
                state={state.isLoading ? buttonState.inactive : buttonState.active}
              />
              <Button
                dataTest={dataTestInstances.action.button.deleteInstance}
                className={contentDisplayActionGroupButton}
                text="Delete Instance(s)"
                icon={{ alignment: iconAlignment.left, name: iconName.Trashcan16 }}
                variant={buttonVariant.danger}
                onClick={deleteObjectButtonOnClick}
                state={state.isLoading ? buttonState.inactive : buttonState.active}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

InstancesTemplate.defaultProps = defaultProps

InstancesTemplate.propTypes = propTypes
