var recipes = new Array()
<<<<<<< HEAD

function updateObjectWithKeyAndValue(obj, key, value){
  var newObj = Object.assign({}, obj, {[key]:value})
  return newObj
}

function destructivelyUpdateObjectWithKeyAndValue(obj, key, value){
  obj[key] = value
  return obj
}

function deleteFromObjectByKey(obj, key){
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

function destructivelyDeleteFromObjectByKey(obj, key){
  delete obj[key]
  return obj
}
=======
>>>>>>> 4831b760750e05a89cb77db12a4bff301f8f5445
