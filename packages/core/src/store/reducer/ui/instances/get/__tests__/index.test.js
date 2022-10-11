import { getSelectedInstanceId } from '../index'

describe('index', () => {
  describe('getSelectedInstanceId()', () => {
    test('must return selected instance id when there is an instance selected', () => {
      const stateMockObject = {
        context: {
          instance: {
            items: [
              { id: '1', isSelected: false },
              { id: '2', isSelected: false },
              { id: '3', isSelected: true },
            ],
          },
        },
      }

      expect(getSelectedInstanceId({ state: stateMockObject })).toEqual(stateMockObject.context.instance.items[2].id)
    })

    test('must return empty string when there is no instance selected', () => {
      const stateMockObject = {
        context: {
          instance: {
            items: [
              { id: '1', isSelected: false },
              { id: '2', isSelected: false },
              { id: '3', isSelected: false },
            ],
          },
        },
      }

      expect(getSelectedInstanceId({ state: stateMockObject })).toEqual('')
    })
  })
})
