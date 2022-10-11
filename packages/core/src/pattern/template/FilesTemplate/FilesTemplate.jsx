import { primer } from '@papillonbits/components'
import { Navigator } from '../../molecule/Navigator'
import { defaultProps, propTypes } from './FilesTemplate.prop'
import { useFilesState } from './FilesTemplate.hook'
import styles from './FilesTemplate.scss'

export function FilesTemplate() {
  const {
    Alert: { Alert },
    Breadcrumb: { Breadcrumb, breadcrumbState },
    Button: { Button, buttonVariant, iconAlignment, buttonInputType, buttonState },
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
    contentLocation,
    contentAction,
    contentActionGroup,
    contentActionGroupButton,
    contentSearch,
    contentSearchInput,
    contentSearchLabel,
    contentDisplay,
    contentDisplayGrid,
    contentDisplayPagination,
  } = styles

  const {
    dataTestFiles,
    navigatorHeading,
    location,
    filesObjects,
    currentPage,
    search,
    sort,
    state,
    paginatedRandomFilesObjectsNamesValues,
    findKeywordInputOnChange,
    findKeywordInputOnKeyUp,
    findKeywordInputOnFocus,
    paginationOnClick,
    createFolderButtonOnClick,
    uploadFilesButtonOnClick,
    downloadFilesButtonOnClick,
    deleteButtonOnClick,
    renameButtonOnClick,
    flexGridOnChange,
    flexGridOnClick,
    flexGridOnDoubleClick,
    breadcrumbOnClick,
  } = useFilesState()

  return (
    <div className={container}>
      <Alert
        dataTest={{
          default: dataTestFiles.alert.div.default,
          approve: dataTestFiles.alert.button.approve,
          cancel: dataTestFiles.alert.button.cancel,
        }}
        className={alert}
        variant={state.message.type}
        consent={state?.consent}
      >
        {state.message.text}
      </Alert>
      <Navigator heading={navigatorHeading} />
      {filesObjects?.length !== 0 && (
        <div className={content}>
          <div className={contentLocation}>
            <Breadcrumb
              ariaAttr={location.ariaAttr}
              items={location.items}
              onClick={breadcrumbOnClick}
              state={state.isLoading ? breadcrumbState.inactive : breadcrumbState.active}
            />
          </div>
          <div className={contentAction}>
            <div className={contentActionGroup}>
              <Button
                dataTest={dataTestFiles.action.button.createFolder}
                className={contentActionGroupButton}
                text="Create folder"
                icon={{ alignment: iconAlignment.left, name: iconName.FileDirectory16 }}
                variant={buttonVariant.primary}
                onClick={createFolderButtonOnClick}
                state={state.isLoading ? buttonState.inactive : buttonState.active}
              />
            </div>
            <div className={contentActionGroup}>
              <Button
                dataTest={dataTestFiles.action.button.renameFileFolder}
                className={contentActionGroupButton}
                text="Rename"
                icon={{ alignment: iconAlignment.left, name: iconName.Pencil16 }}
                variant={buttonVariant.primary}
                onClick={renameButtonOnClick}
                state={state.isLoading ? buttonState.inactive : buttonState.active}
              />
            </div>
            <div className={contentActionGroup}>
              <Button
                dataTest={dataTestFiles.action.button.deleteFileFolder}
                className={contentActionGroupButton}
                text="Delete"
                icon={{ alignment: iconAlignment.left, name: iconName.Trashcan16 }}
                variant={buttonVariant.danger}
                onClick={deleteButtonOnClick}
                state={state.isLoading ? buttonState.inactive : buttonState.active}
              />
            </div>
            <div className={contentActionGroup}>
              <Button
                dataTest={dataTestFiles.action.button.uploadFile}
                className={contentActionGroupButton}
                text="Upload file(s)"
                icon={{ alignment: iconAlignment.left, name: iconName.Upload16 }}
                variant={buttonVariant.outline}
                onClick={uploadFilesButtonOnClick}
                inputType={buttonInputType.file}
                state={state.isLoading ? buttonState.inactive : buttonState.active}
              />
            </div>
            <div className={contentActionGroup}>
              <Button
                dataTest={dataTestFiles.action.button.downloadFile}
                className={contentActionGroupButton}
                text="Download single file"
                icon={{ alignment: iconAlignment.left, name: iconName.Download16 }}
                variant={buttonVariant.outline}
                onClick={downloadFilesButtonOnClick}
                state={state.isLoading ? buttonState.inactive : buttonState.active}
              />
            </div>
          </div>
          <div className={contentSearch}>
            <Input
              value={search.keyword || ''}
              className={contentSearchInput}
              placeholder="Type a keyword and press Enter to search. Press ESC to clear."
              ariaAttr={{ label: 'Type in a keyword' }}
              onChange={findKeywordInputOnChange}
              onKeyUp={findKeywordInputOnKeyUp}
              onFocus={findKeywordInputOnFocus}
              onBlur={() => {}}
              state={state.isLoading ? inputState.inactive : inputState.active}
            />

            {search.keyword && <Label className={contentSearchLabel} text={search.keyword || 'Type in a keyword'} />}
          </div>
          <div className={contentDisplay}>
            <PreviousNext
              className={contentDisplayPagination}
              ariaAttr={{ label: 'Pagination Top' }}
              currentPage={currentPage}
              onClick={paginationOnClick}
              state={state.isLoading ? previousNextState.inactive : previousNextState.active}
            />
            <FlexGrid
              className={contentDisplayGrid}
              items={paginatedRandomFilesObjectsNamesValues}
              idIndex={0}
              isSelectedIndex={1}
              selection={flexGridSelection.checkbox}
              sort={sort}
              onChange={flexGridOnChange}
              onClick={flexGridOnClick}
              onDoubleClick={flexGridOnDoubleClick}
              state={state.isLoading ? flexGridState.inactive : flexGridState.active}
            />
            <PreviousNext
              className={contentDisplayPagination}
              ariaAttr={{ label: 'Pagination Bottom' }}
              currentPage={currentPage}
              onClick={paginationOnClick}
              state={state.isLoading ? previousNextState.inactive : previousNextState.active}
            />
          </div>
        </div>
      )}
    </div>
  )
}

FilesTemplate.defaultProps = defaultProps

FilesTemplate.propTypes = propTypes
