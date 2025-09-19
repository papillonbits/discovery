import { getStorybookPreviewSetup } from '@papillonbits/setup/storybook/previewSetup'

const storybookPreviewSetup = getStorybookPreviewSetup({ parameters: { a11y: true, decorators: true, docs: true } })

export const parameters = storybookPreviewSetup.parameters
export const tags = ['autodocs']

localStorage.clear()
