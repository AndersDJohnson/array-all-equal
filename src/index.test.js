import arrayAllEqual from '.'

describe('arrayAllEqual', () => {
  it('should return true when empty', () => {
    expect(arrayAllEqual([])).toBe(true)
  })
  it('should return true when all equal', () => {
    expect(arrayAllEqual(['a', 'a', 'a'])).toBe(true)
  })
  it('should return false when not all equal', () => {
    expect(arrayAllEqual(['a', 'b', 'a'])).toBe(false)
  })
})
