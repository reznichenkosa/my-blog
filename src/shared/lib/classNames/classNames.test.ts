import { classNames } from 'shared/lib/classNames/classNames'

describe('classNames', () => {
  test('with only first param', () => {
    expect(classNames('someClass')).toBe('someClass')
  })

  test('with additional class', () => {
    expect(classNames('someClass', {}, ['otherFirstClass', 'otherSecondClass'])).toBe(
      'someClass otherFirstClass otherSecondClass',
    )
  })
})
