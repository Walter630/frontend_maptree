import { executeMutation, executeQuery, mutationRef, queryRef, validateArgs } from 'firebase/data-connect'

export const connectorConfig = {
  connector: 'example',
  service: 'frontendmaptree',
  location: 'us-east4',
}

export function addNewTreeRef (dc) {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined)
  dcInstance._useGeneratedSdk()
  return mutationRef(dcInstance, 'AddNewTree')
}
addNewTreeRef.operationName = 'AddNewTree'

export function addNewTree (dc) {
  return executeMutation(addNewTreeRef(dc))
}

export function getPruningTasksForUserRef (dc) {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined)
  dcInstance._useGeneratedSdk()
  return queryRef(dcInstance, 'GetPruningTasksForUser')
}
getPruningTasksForUserRef.operationName = 'GetPruningTasksForUser'

export function getPruningTasksForUser (dc) {
  return executeQuery(getPruningTasksForUserRef(dc))
}

export function updateTaskStatusRef (dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars } = validateArgs(connectorConfig, dcOrVars, vars, true)
  dcInstance._useGeneratedSdk()
  return mutationRef(dcInstance, 'UpdateTaskStatus', inputVars)
}
updateTaskStatusRef.operationName = 'UpdateTaskStatus'

export function updateTaskStatus (dcOrVars, vars) {
  return executeMutation(updateTaskStatusRef(dcOrVars, vars))
}

export function listZonesRef (dc) {
  const { dc: dcInstance } = validateArgs(connectorConfig, dc, undefined)
  dcInstance._useGeneratedSdk()
  return queryRef(dcInstance, 'ListZones')
}
listZonesRef.operationName = 'ListZones'

export function listZones (dc) {
  return executeQuery(listZonesRef(dc))
}
