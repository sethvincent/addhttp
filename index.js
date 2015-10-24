module.exports = function addhttp (url) {
  if (!/^https?\:\/\//.test(url)) {
    url = 'http://' + url
  }
  return url
}
