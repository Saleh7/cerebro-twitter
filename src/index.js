import React from 'react'

import Preview from './Preview'
import icon from './icon.png'

const id = 'twitter'
const order = 11
const twitterPlugin = ({ term, actions, display }) => {
  var search = (searchTerm) => {
    const q = encodeURIComponent(searchTerm)
    actions.open(`https://twitter.com/search?q=${q}&src=tyah`)
    actions.hideWindow()
  }
  display({
    id,
    icon,
    order,
    title: `Search twitter for ${term}`,
    onSelect: () => search(term),
    getPreview: () => <Preview query={term} key={term} search={search} />
  })
}

export default {
  fn: twitterPlugin,
}
