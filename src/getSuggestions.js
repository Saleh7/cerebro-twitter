import { memoize } from 'cerebro-tools'

const getSuggestions = (query) => {
  const url = `https://twitter.com/i/search/typeahead.json?count=10&filters=true&result_type=topics&q=${query}`
  return fetch(url)
    .then(response => response.json())
    .then(items => items['topics'].map(i => i.topic))
}


export default memoize(getSuggestions, {
  length: false,
  promise: 'then',
  // Expire translation cache in 30 minutes
  maxAge: 30 * 60 * 1000,
  preFetch: true
})
