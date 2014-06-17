function _collapseTree(tree, collapsed) {
  for(var key in tree) {
    var val = tree[key]
    if (typeof val.value !== "object") {
      collapsed[key] = val.value
    } else {
      collapsed[key] = {}
      _collapseTree(tree[key].value, collapsed[key])
    }
  }
  return
}

module.exports = function collapseTree(tree) {
  if (typeof tree !== "object") return tree
  if (tree == null) return null
  // if we only have a single node, just short circuit here
  if (tree.value && typeof tree.value !== "object") return tree.value
  var collapsed = {}
  _collapseTree(tree, collapsed)
  return collapsed
}