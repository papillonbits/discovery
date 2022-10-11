/* eslint-disable no-loss-of-precision */
import { getReadableFileSize } from '../index'

describe('index', () => {
  describe('getReadableFileSize()', () => {
    test('must return readable file size for B', () => {
      expect(getReadableFileSize({ size: 999 })).toEqual('999.0 B')
    })

    test('must return readable file size for KB', () => {
      expect(getReadableFileSize({ size: 999999 })).toEqual('976.6 KB')
    })

    test('must return readable file size for MB', () => {
      expect(getReadableFileSize({ size: 999999999 })).toEqual('953.7 MB')
    })

    test('must return readable file size for GB', () => {
      expect(getReadableFileSize({ size: 999999999999 })).toEqual('931.3 GB')
    })

    test('must return readable file size for TB', () => {
      expect(getReadableFileSize({ size: 999999999999999 })).toEqual('909.5 TB')
    })

    test('must return readable file size for PB', () => {
      expect(getReadableFileSize({ size: 999999999999999999 })).toEqual('888.2 PB')
    })

    test('must return readable file size for EB', () => {
      expect(getReadableFileSize({ size: 999999999999999999999 })).toEqual('867.4 EB')
    })

    test('must return readable file size for ZB', () => {
      expect(getReadableFileSize({ size: 999999999999999999999999 })).toEqual('847.0 ZB')
    })

    test('must return readable file size for YB', () => {
      expect(getReadableFileSize({ size: 999999999999999999999999999 })).toEqual('827.2 YB')
    })
  })
})
