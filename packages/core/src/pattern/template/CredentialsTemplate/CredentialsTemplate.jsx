import { getLocaleDateTimeString } from '@papillonbits/library/date'
import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './CredentialsTemplate.prop'
import { useCredentialsState } from './CredentialsTemplate.hook'
import styles from './CredentialsTemplate.scss'

export function CredentialsTemplate() {
  const {
    Alert: { Alert, alertVariant },
    // Blankslate: { Blankslate, blankslateVariant },
    Button: { Button, buttonVariant, iconAlignment, buttonState },
    Dropdown: { Dropdown, dropdownState },
    Form: {
      Checkbox: { Checkbox, checkboxState },
      Input: { Input, inputType, inputState },
    },
    Grid: { FlexGrid, flexGridSelection, flexGridState },
    Icon: { iconName },
    Label,
    Navigation: { TabNav, tabNavState },
    Pagination: { PreviousNext, previousNextState },
  } = primer

  const {
    container,
    alert,
    content,
    // contentBoard,
    // contentBoardSlate,
    contentDisplay,
    contentDisplayNavigation,
    contentDisplayNavigationContainer,
    contentDisplayGridCredentials,
    contentDisplayGridKeys,
    contentDisplayPagination,
    contentDisplayEdit,
    contentDisplayEditField,
    contentDisplayEditFieldLabel,
    contentDisplayEditFieldDropdown,
    contentDisplayEditFieldInput,
    contentDisplayEditFieldCheckbox,
    contentDisplayAction,
    contentDisplayActionGroup,
    contentDisplayActionGroupButton,
  } = styles

  const {
    dataTestCredentials,
    alertTextCredentials,
    navigatorHeading,
    instance,
    contextAuthorization,
    navigation,
    currentPage,
    sort,
    edit,
    state,
    selectedObjects,
    paginatedRandomCredentialsObjectsNamesValues,
    paginatedRandomCredentialsObjectKeysNamesValues,
    editObjectEndpointDirectionOnClick,
    editObjectEndpointTypeOnClick,
    editObjectNameOnChange,
    editObjectUrlOnChange,
    editObjectPortNumberOnChange,
    editObjectUsernameOnChange,
    editObjectPasswordOnChange,
    editObjectConfirmPasswordOnChange,
    editObjectWikiLinkOnChange,
    editKeyNameOnChange,
    editKeyFingerprintOnChange,
    editKeyChecksumValidOnChange,
    editKeyValueOnChange,
    paginationOnClick,
    createObjectButtonOnClick,
    updateObjectButtonOnClick,
    deleteObjectButtonOnClick,
    credentialsObjectsFlexGridOnChange,
    credentialsObjectsFlexGridOnClick,
    createKeyButtonOnClick,
    updateKeyButtonOnClick,
    deleteKeyButtonOnClick,
    credentialsObjectsKeysFlexGridOnChange,
    credentialsObjectsKeysFlexGridOnClick,
    credentialsNavigationTabNavOnClick,
  } = useCredentialsState()

  if (contextAuthorization.isRequired && !contextAuthorization.token) {
    return (
      <Alert dataTest={{ default: dataTestCredentials.alert.div.default }} className={alert} variant={alertVariant.error}>
        {alertTextCredentials.authorize.notAuthorized}
      </Alert>
    )
  }

  return (
    <div className={container}>
      <Alert
        dataTest={{
          default: dataTestCredentials.alert.div.default,
          approve: dataTestCredentials.alert.button.approve,
          cancel: dataTestCredentials.alert.button.cancel,
        }}
        className={alert}
        variant={state.message.type}
        consent={state?.consent}
      >
        {state.message.text}
      </Alert>
      <Navigator heading={navigatorHeading} />
      <div className={content}>
        {/*
        <div className={contentBoard}>
          <div className={contentBoardSlate}>
            <Blankslate
              variant={blankslateVariant.default}
              heading="Getting Started..."
              text="Temporarily viewing randomly generated credentials..."
            />
          </div>
        </div>
          */}
        {instance.items.length === 0 && <div>No Data!</div>}
        <div className={contentDisplay}>
          <TabNav
            className={contentDisplayNavigation}
            ariaAttr={navigation.ariaAttr}
            items={navigation.items}
            onClick={credentialsNavigationTabNavOnClick}
            state={state.isLoading ? tabNavState.inactive : tabNavState.active}
          >
            {navigation.selectedIndex === 0 ? (
              <div className={contentDisplayNavigationContainer}>
                <PreviousNext
                  className={contentDisplayPagination}
                  ariaAttr={{ label: 'Pagination Top' }}
                  currentPage={currentPage}
                  onClick={paginationOnClick}
                  state={state.isLoading ? previousNextState.inactive : previousNextState.active}
                />
                <FlexGrid
                  className={contentDisplayGridCredentials}
                  items={paginatedRandomCredentialsObjectsNamesValues}
                  idIndex={0}
                  isSelectedIndex={1}
                  selection={flexGridSelection.checkbox}
                  sort={sort.object}
                  onChange={credentialsObjectsFlexGridOnChange}
                  onClick={credentialsObjectsFlexGridOnClick}
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
                      <Label className={contentDisplayEditFieldLabel} text="Endpoint Direction" />
                      <Dropdown
                        className={contentDisplayEditFieldDropdown}
                        summary={edit?.object?.['endpoint-direction']?.find(({ isSelected }) => isSelected === true)?.text}
                        items={edit?.object?.['endpoint-direction']}
                        onClick={editObjectEndpointDirectionOnClick}
                        state={state.isLoading ? dropdownState.inactive : dropdownState.active}
                      />
                    </div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="Endpoint Type" />
                      <Dropdown
                        className={contentDisplayEditFieldDropdown}
                        summary={edit?.object?.['endpoint-type']?.find(({ isSelected }) => isSelected === true)?.text}
                        items={edit?.object?.['endpoint-type']}
                        onClick={editObjectEndpointTypeOnClick}
                        state={state.isLoading ? dropdownState.inactive : dropdownState.active}
                      />
                    </div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="Name" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        value={edit?.object?.name || ''}
                        placeholder="Edit name"
                        ariaAttr={{ label: 'Type in a name' }}
                        onChange={editObjectNameOnChange}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                    </div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="Account Name" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        value={edit?.object?.['account-name'] || ''}
                        state={inputState.inactive}
                      />
                    </div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="URL" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        value={edit?.object?.url || ''}
                        placeholder="Edit URL"
                        ariaAttr={{ label: 'Type in a URL' }}
                        onChange={editObjectUrlOnChange}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                    </div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="Port Number" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        value={edit?.object?.['port-number'] || ''}
                        placeholder="Edit port number"
                        ariaAttr={{ label: 'Type in a port number' }}
                        onChange={editObjectPortNumberOnChange}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                    </div>
                  </div>
                  <div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="Username" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        value={edit?.object?.username || ''}
                        placeholder="Edit username"
                        ariaAttr={{ label: 'Type in a username' }}
                        onChange={editObjectUsernameOnChange}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                    </div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="Password" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        inputType={inputType.password}
                        value={edit?.object?.password || ''}
                        placeholder="Edit password"
                        ariaAttr={{ label: 'Type in password' }}
                        onChange={editObjectPasswordOnChange}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                    </div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="Confirm Password" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        inputType={inputType.password}
                        value={edit?.object?.['confirm-password'] || ''}
                        placeholder="Edit confirm password"
                        ariaAttr={{ label: 'Confirm password' }}
                        onChange={editObjectConfirmPasswordOnChange}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                    </div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="Wiki Link" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        value={edit?.object?.['wiki-link'] || ''}
                        placeholder="Edit wiki link"
                        ariaAttr={{ label: 'Type in a wiki link' }}
                        onChange={editObjectWikiLinkOnChange}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                    </div>
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
                      dataTest={dataTestCredentials.object.action.button.createCredential}
                      className={contentDisplayActionGroupButton}
                      text="Create Credential"
                      icon={{ alignment: iconAlignment.left, name: iconName.Plus16 }}
                      variant={buttonVariant.primary}
                      onClick={createObjectButtonOnClick}
                      state={state.isLoading ? buttonState.inactive : buttonState.active}
                    />
                    <Button
                      dataTest={dataTestCredentials.object.action.button.updateCredential}
                      className={contentDisplayActionGroupButton}
                      text="Update Credential"
                      icon={{ alignment: iconAlignment.left, name: iconName.Pencil16 }}
                      variant={buttonVariant.primary}
                      onClick={updateObjectButtonOnClick}
                      state={state.isLoading ? buttonState.inactive : buttonState.active}
                    />
                    <Button
                      dataTest={dataTestCredentials.object.action.button.deleteCredential}
                      className={contentDisplayActionGroupButton}
                      text="Delete Credential(s)"
                      icon={{ alignment: iconAlignment.left, name: iconName.Trashcan16 }}
                      variant={buttonVariant.danger}
                      onClick={deleteObjectButtonOnClick}
                      state={state.isLoading ? buttonState.inactive : buttonState.active}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className={contentDisplayNavigationContainer}>
                <FlexGrid
                  className={contentDisplayGridKeys}
                  items={paginatedRandomCredentialsObjectKeysNamesValues}
                  idIndex={0}
                  isSelectedIndex={1}
                  selection={flexGridSelection.checkbox}
                  sort={sort.key}
                  onChange={credentialsObjectsKeysFlexGridOnChange}
                  onClick={credentialsObjectsKeysFlexGridOnClick}
                  onDoubleClick={() => {}}
                  state={state.isLoading ? flexGridState.inactive : flexGridState.active}
                />
                {selectedObjects?.length === 0 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextCredentials.key.display.noParent}
                  </Alert>
                )}
                {selectedObjects?.length > 1 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextCredentials.key.display.multiParent}
                  </Alert>
                )}
                {selectedObjects?.length === 1 && selectedObjects?.[0].keys?.length === 0 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextCredentials.key.display.noChild}
                  </Alert>
                )}
                {selectedObjects?.length === 1 && (
                  <div className={contentDisplayEdit}>
                    <div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Name" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.key?.name || ''}
                          placeholder="Edit name"
                          ariaAttr={{ label: 'Type in a name' }}
                          onChange={editKeyNameOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Fingerprint" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.key?.fingerprint || ''}
                          placeholder="Edit fingerprint"
                          ariaAttr={{ label: 'Type in a fingerprint' }}
                          onChange={editKeyFingerprintOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Checksum Valid" />
                        <Checkbox
                          className={contentDisplayEditFieldCheckbox}
                          ariaAttr={{ describedBy: 'checksum valid' }}
                          isChecked={edit?.key?.['checksum-valid'] ?? false}
                          onChange={editKeyChecksumValidOnChange}
                          state={state.isLoading ? checkboxState.inactive : checkboxState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Value" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          inputType={inputType.password}
                          value={edit?.key?.value || ''}
                          placeholder="Edit value"
                          ariaAttr={{ label: 'Type in a value' }}
                          onChange={editKeyValueOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                    </div>
                    <div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Date Imported" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={getLocaleDateTimeString(edit?.key?.['date-imported']) || ''}
                          state={inputState.inactive}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Date Modified" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={getLocaleDateTimeString(edit?.key?.['date-modified']) || ''}
                          state={inputState.inactive}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Date Created" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={getLocaleDateTimeString(edit?.key?.['date-created']) || ''}
                          state={inputState.inactive}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {selectedObjects?.length === 1 && (
                  <div className={contentDisplayAction}>
                    <div className={contentDisplayActionGroup}>
                      <Button
                        dataTest={dataTestCredentials.key.action.button.createKey}
                        className={contentDisplayActionGroupButton}
                        text="Create Key"
                        icon={{ alignment: iconAlignment.left, name: iconName.Plus16 }}
                        variant={buttonVariant.blue}
                        onClick={createKeyButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                      <Button
                        dataTest={dataTestCredentials.key.action.button.updateKey}
                        className={contentDisplayActionGroupButton}
                        text="Update Key"
                        icon={{ alignment: iconAlignment.left, name: iconName.Pencil16 }}
                        variant={buttonVariant.blue}
                        onClick={updateKeyButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                      <Button
                        dataTest={dataTestCredentials.key.action.button.deleteKey}
                        className={contentDisplayActionGroupButton}
                        text="Delete Key(s)"
                        icon={{ alignment: iconAlignment.left, name: iconName.Trashcan16 }}
                        variant={buttonVariant.danger}
                        onClick={deleteKeyButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
          </TabNav>
        </div>
      </div>
    </div>
  )
}

CredentialsTemplate.defaultProps = defaultProps

CredentialsTemplate.propTypes = propTypes
