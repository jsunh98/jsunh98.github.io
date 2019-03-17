describe('Math operations', function()  {
  test('the sum 2 and 3 should be 5', function() {
    expect(2+3).toEqual(5)
  })
  test('the product of 2 and 4 should be 8', function()  {
    expect(2*4).toEqual(8)
})
})
describe('String operations', function() {
  test('expect myString to be `hello world`', function()  {
    const myString = 'hello world'
    expect(myString).toBe('hello world')
  })
})
