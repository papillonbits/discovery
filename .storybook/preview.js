import { MemoryRouter } from 'react-router-dom'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'

export const parameters = {
  a11y: {
    // optional selector which element to inspect
    // element: '#root',
    // axe-core configurationOptions (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#parameters-1)
    config: {},
    // axe-core optionsParameter (https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter)
    options: {},
    // optional flag to prevent the automatic check
    // manual: true,
  },
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
  docs: { container: DocsContainer, page: DocsPage },
}

localStorage.clear()
