import { getLocaleDateTimeString } from '@papillonbits/library/date'
import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './PipelinesTemplate.prop'
import { usePipelinesState } from './PipelinesTemplate.hook'
import styles from './PipelinesTemplate.scss'

export function PipelinesTemplate() {
  const {
    Alert: { Alert, alertVariant },
    Button: { Button, buttonVariant, iconAlignment, buttonState },
    Dropdown: { Dropdown, dropdownState },
    Form: {
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
    contentDisplay,
    contentDisplaySearch,
    contentDisplaySearchPart,
    contentDisplaySearchPartField,
    contentDisplaySearchPartFieldDropdown,
    contentDisplaySearchPartFieldInput,
    contentDisplaySearchPartFieldLabel,
    contentDisplayNavigation,
    contentDisplayNavigationContainer,
    contentDisplayGridPipelines,
    contentDisplayGridSteps,
    contentDisplayGridMappings,
    contentDisplayGridExecutions,
    contentDisplayPagination,
    contentDisplayEdit,
    contentDisplayEditField,
    contentDisplayEditFieldLabel,
    contentDisplayEditFieldDropdown,
    contentDisplayEditFieldInput,
    contentDisplayAction,
    contentDisplayActionGroup,
    contentDisplayActionGroupButton,
  } = styles

  const {
    dataTestPipelines,
    alertTextPipelines,
    navigatorHeading,
    instance,
    contextAuthorization,
    navigation,
    currentPage,
    search,
    sort,
    edit,
    state,
    selectedObjects,
    paginatedRandomPipelinesObjectsNamesValues,
    paginatedRandomPipelinesObjectStepsNamesValues,
    paginatedRandomPipelinesObjectMappingsNamesValues,
    paginatedRandomPipelinesObjectExecutionsNamesValues,
    searchPipelineDirectionOnClick,
    searchPipelineStateOnClick,
    findNameInputOnChange,
    findNameInputOnKeyUp,
    findNameInputOnFocus,
    findNameInputOnBlur,
    findPrefixInputOnChange,
    findPrefixInputOnKeyUp,
    findPrefixInputOnFocus,
    findPrefixInputOnBlur,
    editObjectPipelineDirectionOnClick,
    editObjectPipelineStateOnClick,
    editObjectNameOnChange,
    editObjectDescriptionOnChange,
    editObjectPrefixOnChange,
    editObjectFileOnChange,
    editStepDirectionOnClick,
    editStepStateOnClick,
    editStepNameOnChange,
    editStepDescriptionOnChange,
    editStepUrlOnChange,
    editStepPortNumberOnChange,
    editStepUsernameOnChange,
    editStepPasswordOnChange,
    editStepConfirmPasswordOnChange,
    editStepWikiLinkOnChange,
    editMappingNameOnChange,
    editMappingDescriptionOnChange,
    editExecutionNameOnChange,
    editExecutionDescriptionOnChange,
    paginationOnClick,
    createObjectButtonOnClick,
    updateObjectButtonOnClick,
    deleteObjectButtonOnClick,
    pipelinesObjectsFlexGridOnChange,
    pipelinesObjectsFlexGridOnClick,
    createStepButtonOnClick,
    updateStepButtonOnClick,
    deleteStepButtonOnClick,
    pipelinesObjectsStepsFlexGridOnChange,
    pipelinesObjectsStepsFlexGridOnClick,
    createMappingButtonOnClick,
    updateMappingButtonOnClick,
    deleteMappingButtonOnClick,
    pipelinesObjectsMappingsFlexGridOnChange,
    pipelinesObjectsMappingsFlexGridOnClick,
    createExecutionButtonOnClick,
    updateExecutionButtonOnClick,
    deleteExecutionButtonOnClick,
    pipelinesObjectsExecutionsFlexGridOnChange,
    pipelinesObjectsExecutionsFlexGridOnClick,
    pipelinesNavigationTabNavOnClick,
  } = usePipelinesState()

  if (contextAuthorization.isRequired && !contextAuthorization.token) {
    return (
      <Alert dataTest={{ default: dataTestPipelines.alert.div.default }} className={alert} variant={alertVariant.error}>
        {alertTextPipelines.authorize.notAuthorized}
      </Alert>
    )
  }

  return (
    <div className={container}>
      <Alert
        dataTest={{
          default: dataTestPipelines.alert.div.default,
          approve: dataTestPipelines.alert.button.approve,
          cancel: dataTestPipelines.alert.button.cancel,
        }}
        className={alert}
        variant={state.message.type}
        consent={state?.consent}
      >
        {state.message.text}
      </Alert>
      <Navigator heading={navigatorHeading} />
      <div className={content}>
        {instance.items.length === 0 && <div>No Data!</div>}
        <div className={contentDisplay}>
          <TabNav
            className={contentDisplayNavigation}
            ariaAttr={navigation.ariaAttr}
            items={navigation.items}
            onClick={pipelinesNavigationTabNavOnClick}
            state={state.isLoading ? tabNavState.inactive : tabNavState.active}
          >
            {navigation.selectedIndex === 0 && (
              <div className={contentDisplayNavigationContainer}>
                <div className={contentDisplaySearch}>
                  <div className={contentDisplaySearchPart}>
                    <div className={contentDisplaySearchPartField}>
                      <Dropdown
                        className={contentDisplaySearchPartFieldDropdown}
                        summary={search?.['pipeline-direction']?.find(({ isSelected }) => isSelected === true)?.text}
                        items={search?.['pipeline-direction']}
                        onClick={searchPipelineDirectionOnClick}
                        state={state.isLoading ? dropdownState.inactive : dropdownState.active}
                      />
                    </div>
                    <div className={contentDisplaySearchPartField}>
                      <Dropdown
                        className={contentDisplaySearchPartFieldDropdown}
                        summary={search?.['pipeline-state']?.find(({ isSelected }) => isSelected === true)?.text}
                        items={search?.['pipeline-state']}
                        onClick={searchPipelineStateOnClick}
                        state={state.isLoading ? dropdownState.inactive : dropdownState.active}
                      />
                    </div>
                  </div>
                  <div className={contentDisplaySearchPart}>
                    <div className={contentDisplaySearchPartField}>
                      <Input
                        value={search.name || ''}
                        className={contentDisplaySearchPartFieldInput}
                        placeholder="Type a name and press Enter to search. Press ESC to clear."
                        ariaAttr={{ label: 'Type in a name' }}
                        onChange={findNameInputOnChange}
                        onKeyUp={findNameInputOnKeyUp}
                        onFocus={findNameInputOnFocus}
                        onBlur={findNameInputOnBlur}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                      {search.name && <Label className={contentDisplaySearchPartFieldLabel} text={search.name || 'Type in a name'} />}
                    </div>
                    <div className={contentDisplaySearchPartField}>
                      <Input
                        value={search.prefix || ''}
                        className={contentDisplaySearchPartFieldInput}
                        placeholder="Type a prefix and press Enter to search. Press ESC to clear."
                        ariaAttr={{ label: 'Type in a prefix' }}
                        onChange={findPrefixInputOnChange}
                        onKeyUp={findPrefixInputOnKeyUp}
                        onFocus={findPrefixInputOnFocus}
                        onBlur={findPrefixInputOnBlur}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                      {search.prefix && <Label className={contentDisplaySearchPartFieldLabel} text={search.prefix || 'Type in a prefix'} />}
                    </div>
                  </div>
                </div>
                <PreviousNext
                  className={contentDisplayPagination}
                  ariaAttr={{ label: 'Pagination Top' }}
                  currentPage={currentPage}
                  onClick={paginationOnClick}
                  state={state.isLoading ? previousNextState.inactive : previousNextState.active}
                />
                <FlexGrid
                  className={contentDisplayGridPipelines}
                  items={paginatedRandomPipelinesObjectsNamesValues}
                  idIndex={0}
                  isSelectedIndex={1}
                  selection={flexGridSelection.checkbox}
                  sort={sort.object}
                  onChange={pipelinesObjectsFlexGridOnChange}
                  onClick={pipelinesObjectsFlexGridOnClick}
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
                      <Label className={contentDisplayEditFieldLabel} text="Pipeline Direction" />
                      <Dropdown
                        className={contentDisplayEditFieldDropdown}
                        summary={edit?.object?.['pipeline-direction']?.find(({ isSelected }) => isSelected === true)?.text}
                        items={edit?.object?.['pipeline-direction']}
                        onClick={editObjectPipelineDirectionOnClick}
                        state={dropdownState.inactive}
                      />
                    </div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="Pipeline State" />
                      <Dropdown
                        className={contentDisplayEditFieldDropdown}
                        summary={edit?.object?.['pipeline-state']?.find(({ isSelected }) => isSelected === true)?.text}
                        items={edit?.object?.['pipeline-state']}
                        onClick={editObjectPipelineStateOnClick}
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
                      <Label className={contentDisplayEditFieldLabel} text="Description" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        value={edit?.object?.description || ''}
                        placeholder="Edit description"
                        ariaAttr={{ label: 'Type in a description' }}
                        onChange={editObjectDescriptionOnChange}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                    </div>
                  </div>
                  <div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="Prefix" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        value={edit?.object?.prefix || ''}
                        placeholder="Edit prefix"
                        ariaAttr={{ label: 'Type in a prefix' }}
                        onChange={editObjectPrefixOnChange}
                        state={state.isLoading ? inputState.inactive : inputState.active}
                      />
                    </div>
                    <div className={contentDisplayEditField}>
                      <Label className={contentDisplayEditFieldLabel} text="File" />
                      <Input
                        className={contentDisplayEditFieldInput}
                        value={edit?.object?.file || ''}
                        placeholder="Edit file"
                        ariaAttr={{ label: 'Type in a file' }}
                        onChange={editObjectFileOnChange}
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
                      dataTest={dataTestPipelines.object.action.button.createPipeline}
                      className={contentDisplayActionGroupButton}
                      text="Create Pipeline"
                      icon={{ alignment: iconAlignment.left, name: iconName.Plus16 }}
                      variant={buttonVariant.primary}
                      onClick={createObjectButtonOnClick}
                      state={state.isLoading ? buttonState.inactive : buttonState.active}
                    />
                    <Button
                      dataTest={dataTestPipelines.object.action.button.updatePipeline}
                      className={contentDisplayActionGroupButton}
                      text="Update Pipeline"
                      icon={{ alignment: iconAlignment.left, name: iconName.Pencil16 }}
                      variant={buttonVariant.primary}
                      onClick={updateObjectButtonOnClick}
                      state={state.isLoading ? buttonState.inactive : buttonState.active}
                    />
                    <Button
                      dataTest={dataTestPipelines.object.action.button.deletePipeline}
                      className={contentDisplayActionGroupButton}
                      text="Delete Pipeline(s)"
                      icon={{ alignment: iconAlignment.left, name: iconName.Trashcan16 }}
                      variant={buttonVariant.danger}
                      onClick={deleteObjectButtonOnClick}
                      state={state.isLoading ? buttonState.inactive : buttonState.active}
                    />
                  </div>
                </div>
              </div>
            )}
            {navigation.selectedIndex === 1 && (
              <div className={contentDisplayNavigationContainer}>
                <FlexGrid
                  className={contentDisplayGridSteps}
                  items={paginatedRandomPipelinesObjectStepsNamesValues}
                  idIndex={0}
                  isSelectedIndex={1}
                  selection={flexGridSelection.checkbox}
                  sort={sort.step}
                  onChange={pipelinesObjectsStepsFlexGridOnChange}
                  onClick={pipelinesObjectsStepsFlexGridOnClick}
                  onDoubleClick={() => {}}
                  state={state.isLoading ? flexGridState.inactive : flexGridState.active}
                />
                {selectedObjects?.length === 0 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextPipelines.step.display.noParent}
                  </Alert>
                )}
                {selectedObjects?.length > 1 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextPipelines.step.display.multiParent}
                  </Alert>
                )}
                {selectedObjects?.length === 1 && selectedObjects?.[0].steps?.length === 0 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextPipelines.step.display.noChild}
                  </Alert>
                )}
                {selectedObjects?.length === 1 && (
                  <div className={contentDisplayEdit}>
                    <div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Pipeline Step Direction" />
                        <Dropdown
                          className={contentDisplayEditFieldDropdown}
                          summary={edit?.step?.['pipeline-step-direction']?.find(({ isSelected }) => isSelected === true)?.text}
                          items={edit?.step?.['pipeline-step-direction']}
                          onClick={editStepDirectionOnClick}
                          state={state.isLoading ? dropdownState.inactive : dropdownState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Pipeline Step Type" />
                        <Dropdown
                          className={contentDisplayEditFieldDropdown}
                          summary={edit?.step?.['pipeline-step-type']?.find(({ isSelected }) => isSelected === true)?.text}
                          items={edit?.step?.['pipeline-step-type']}
                          onClick={editStepStateOnClick}
                          state={state.isLoading ? dropdownState.inactive : dropdownState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Name" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.step?.name || ''}
                          placeholder="Edit name"
                          ariaAttr={{ label: 'Type in a name' }}
                          onChange={editStepNameOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Description" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.step?.description || ''}
                          placeholder="Edit description"
                          ariaAttr={{ label: 'Type in a description' }}
                          onChange={editStepDescriptionOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="URL" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.step?.url || ''}
                          placeholder="Edit URL"
                          ariaAttr={{ label: 'Type in a URL' }}
                          onChange={editStepUrlOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Port Number" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.step?.['port-number'] || ''}
                          placeholder="Edit port number"
                          ariaAttr={{ label: 'Type in a port number' }}
                          onChange={editStepPortNumberOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                    </div>
                    <div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Username" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.step?.username || ''}
                          placeholder="Edit username"
                          ariaAttr={{ label: 'Type in a username' }}
                          onChange={editStepUsernameOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Password" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          inputType={inputType.password}
                          value={edit?.step?.password || ''}
                          placeholder="Edit password"
                          ariaAttr={{ label: 'Type in password' }}
                          onChange={editStepPasswordOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Confirm Password" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          inputType={inputType.password}
                          value={edit?.step?.['confirm-password'] || ''}
                          placeholder="Edit confirm password"
                          ariaAttr={{ label: 'Confirm password' }}
                          onChange={editStepConfirmPasswordOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Wiki Link" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.step?.['wiki-link'] || ''}
                          placeholder="Edit wiki link"
                          ariaAttr={{ label: 'Type in a wiki link' }}
                          onChange={editStepWikiLinkOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Date Modified" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={getLocaleDateTimeString(edit?.step?.['date-modified']) || ''}
                          state={inputState.inactive}
                        />
                      </div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Date Created" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={getLocaleDateTimeString(edit?.step?.['date-created']) || ''}
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
                        dataTest={dataTestPipelines.step.action.button.createStep}
                        className={contentDisplayActionGroupButton}
                        text="Create Step"
                        icon={{ alignment: iconAlignment.left, name: iconName.Plus16 }}
                        variant={buttonVariant.primary}
                        onClick={createStepButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                      <Button
                        dataTest={dataTestPipelines.step.action.button.updateStep}
                        className={contentDisplayActionGroupButton}
                        text="Update Step"
                        icon={{ alignment: iconAlignment.left, name: iconName.Pencil16 }}
                        variant={buttonVariant.primary}
                        onClick={updateStepButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                      <Button
                        dataTest={dataTestPipelines.step.action.button.deleteStep}
                        className={contentDisplayActionGroupButton}
                        text="Delete Step(s)"
                        icon={{ alignment: iconAlignment.left, name: iconName.Trashcan16 }}
                        variant={buttonVariant.danger}
                        onClick={deleteStepButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            {navigation.selectedIndex === 2 && (
              <div className={contentDisplayNavigationContainer}>
                <FlexGrid
                  className={contentDisplayGridMappings}
                  items={paginatedRandomPipelinesObjectMappingsNamesValues}
                  idIndex={0}
                  isSelectedIndex={1}
                  selection={flexGridSelection.checkbox}
                  sort={sort.mapping}
                  onChange={pipelinesObjectsMappingsFlexGridOnChange}
                  onClick={pipelinesObjectsMappingsFlexGridOnClick}
                  onDoubleClick={() => {}}
                  state={state.isLoading ? flexGridState.inactive : flexGridState.active}
                />
                {selectedObjects?.length === 0 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextPipelines.mapping.display.noParent}
                  </Alert>
                )}
                {selectedObjects?.length > 1 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextPipelines.mapping.display.multiParent}
                  </Alert>
                )}
                {selectedObjects?.length === 1 && selectedObjects?.[0].mappings?.length === 0 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextPipelines.mapping.display.noChild}
                  </Alert>
                )}
                {selectedObjects?.length === 1 && (
                  <div className={contentDisplayEdit}>
                    <div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Name" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.mapping?.name || ''}
                          placeholder="Edit name"
                          ariaAttr={{ label: 'Type in a name' }}
                          onChange={editMappingNameOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                    </div>
                    <div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Description" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.mapping?.description || ''}
                          placeholder="Edit description"
                          ariaAttr={{ label: 'Type in a description' }}
                          onChange={editMappingDescriptionOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {selectedObjects?.length === 1 && (
                  <div className={contentDisplayAction}>
                    <div className={contentDisplayActionGroup}>
                      <Button
                        dataTest={dataTestPipelines.mapping.action.button.createMapping}
                        className={contentDisplayActionGroupButton}
                        text="Create Mapping"
                        icon={{ alignment: iconAlignment.left, name: iconName.Plus16 }}
                        variant={buttonVariant.primary}
                        onClick={createMappingButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                      <Button
                        dataTest={dataTestPipelines.mapping.action.button.updateMapping}
                        className={contentDisplayActionGroupButton}
                        text="Update Mapping"
                        icon={{ alignment: iconAlignment.left, name: iconName.Pencil16 }}
                        variant={buttonVariant.primary}
                        onClick={updateMappingButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                      <Button
                        dataTest={dataTestPipelines.mapping.action.button.deleteMapping}
                        className={contentDisplayActionGroupButton}
                        text="Delete Mapping(s)"
                        icon={{ alignment: iconAlignment.left, name: iconName.Trashcan16 }}
                        variant={buttonVariant.danger}
                        onClick={deleteMappingButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                    </div>
                  </div>
                )}
              </div>
            )}
            {navigation.selectedIndex === 3 && (
              <div className={contentDisplayNavigationContainer}>
                <FlexGrid
                  className={contentDisplayGridExecutions}
                  items={paginatedRandomPipelinesObjectExecutionsNamesValues}
                  idIndex={0}
                  isSelectedIndex={1}
                  selection={flexGridSelection.checkbox}
                  sort={sort.execution}
                  onChange={pipelinesObjectsExecutionsFlexGridOnChange}
                  onClick={pipelinesObjectsExecutionsFlexGridOnClick}
                  onDoubleClick={() => {}}
                  state={state.isLoading ? flexGridState.inactive : flexGridState.active}
                />
                {selectedObjects?.length === 0 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextPipelines.execution.display.noParent}
                  </Alert>
                )}
                {selectedObjects?.length > 1 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextPipelines.execution.display.multiParent}
                  </Alert>
                )}
                {selectedObjects?.length === 1 && selectedObjects?.[0].executions?.length === 0 && (
                  <Alert className={alert} variant={alertVariant.warning}>
                    {alertTextPipelines.execution.display.noChild}
                  </Alert>
                )}
                {selectedObjects?.length === 1 && (
                  <div className={contentDisplayEdit}>
                    <div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Name" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.execution?.name || ''}
                          placeholder="Edit name"
                          ariaAttr={{ label: 'Type in a name' }}
                          onChange={editExecutionNameOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                    </div>
                    <div>
                      <div className={contentDisplayEditField}>
                        <Label className={contentDisplayEditFieldLabel} text="Description" />
                        <Input
                          className={contentDisplayEditFieldInput}
                          value={edit?.execution?.description || ''}
                          placeholder="Edit description"
                          ariaAttr={{ label: 'Type in a description' }}
                          onChange={editExecutionDescriptionOnChange}
                          state={state.isLoading ? inputState.inactive : inputState.active}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {false && (
                  <div className={contentDisplayAction}>
                    <div className={contentDisplayActionGroup}>
                      <Button
                        dataTest={dataTestPipelines.execution.action.button.createExecution}
                        className={contentDisplayActionGroupButton}
                        text="Create Execution"
                        icon={{ alignment: iconAlignment.left, name: iconName.Plus16 }}
                        variant={buttonVariant.primary}
                        onClick={createExecutionButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                      <Button
                        dataTest={dataTestPipelines.execution.action.button.updateExecution}
                        className={contentDisplayActionGroupButton}
                        text="Update Execution"
                        icon={{ alignment: iconAlignment.left, name: iconName.Pencil16 }}
                        variant={buttonVariant.primary}
                        onClick={updateExecutionButtonOnClick}
                        state={state.isLoading ? buttonState.inactive : buttonState.active}
                      />
                      <Button
                        dataTest={dataTestPipelines.execution.action.button.deleteExecution}
                        className={contentDisplayActionGroupButton}
                        text="Delete Execution(s)"
                        icon={{ alignment: iconAlignment.left, name: iconName.Trashcan16 }}
                        variant={buttonVariant.danger}
                        onClick={deleteExecutionButtonOnClick}
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

PipelinesTemplate.defaultProps = defaultProps

PipelinesTemplate.propTypes = propTypes
