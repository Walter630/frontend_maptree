const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect')

const connectorConfig = {
  connector: 'example',
  service: 'frontendmaptree',
  location: 'us-east4',
}
exports.connectorConfig = connectorConfig

function addNewTreeRef (dc) {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined)
  dcInstance._useGeneratedSdk()
  return mutationRef(dcInstance, 'AddNewTree')
}
addNewTreeRef.operationName = 'AddNewTree'
exports.addNewTreeRef = addNewTreeRef

exports.addNewTree = function addNewTree (dc) {
  return executeMutation(addNewTreeRef(dc))
}

function getPruningTasksForUserRef (dc) {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined)
  dcInstance._useGeneratedSdk()
  return queryRef(dcInstance, 'GetPruningTasksForUser')
}
getPruningTasksForUserRef.operationName = 'GetPruningTasksForUser'
exports.getPruningTasksForUserRef = getPruningTasksForUserRef

exports.getPruningTasksForUser = function getPruningTasksForUser (dc) {
  return executeQuery(getPruningTasksForUserRef(dc))
}

function updateTaskStatusRef (dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true)
  dcInstance._useGeneratedSdk()
  return mutationRef(dcInstance, 'UpdateTaskStatus', inputVars)
}
updateTaskStatusRef.operationName = 'UpdateTaskStatus'
exports.updateTaskStatusRef = updateTaskStatusRef

exports.updateTaskStatus = function updateTaskStatus (dcOrVars, vars) {
  return executeMutation(updateTaskStatusRef(dcOrVars, vars))
}

function listZonesRef (dc) {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined)
  dcInstance._useGeneratedSdk()
  return queryRef(dcInstance, 'ListZones')
}
listZonesRef.operationName = 'ListZones'
exports.listZonesRef = listZonesRef

exports.listZones = function listZones (dc) {
  return executeQuery(listZonesRef(dc))
}
