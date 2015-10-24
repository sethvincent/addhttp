var test = require('tape')
var addhttp = require('./index')

test('add http', function (t) {
  var url = addhttp('example.com')
  t.equal(url, 'http://example.com')
  t.end()
})

test('ignore http if it exists', function (t) {
  var url = addhttp('http://example.com')
  t.equal(url, 'http://example.com')
  t.end()
})

test('ignore https if it exists', function (t) {
  var url = addhttp('https://example.com')
  t.equal(url, 'https://example.com')
  t.end()
})
