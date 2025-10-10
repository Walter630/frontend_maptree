import type { ConnectorConfig, DataConnect, MutationPromise, MutationRef, QueryPromise, QueryRef } from 'firebase/data-connect'

export const connectorConfig: ConnectorConfig

export type TimestampString = string
export type UUIDString = string
export type Int64String = string
export type DateString = string

export interface AddNewTreeData {
  tree_insert: Tree_Key
}

export interface GetPruningTasksForUserData {
  pruningTasks: ({
    id: UUIDString
    description?: string | null
    scheduledDate: DateString
    status: string
  } & PruningTask_Key)[]
}

export interface ListZonesData {
  zones: ({
    id: UUIDString
    name: string
    description: string
    polygonCoordinates?: string[] | null
  } & Zone_Key)[]
}

export interface PruningTask_Key {
  id: UUIDString
  __typename?: 'PruningTask_Key'
}

export interface Report_Key {
  id: UUIDString
  __typename?: 'Report_Key'
}

export interface Tree_Key {
  id: UUIDString
  __typename?: 'Tree_Key'
}

export interface UpdateTaskStatusData {
  pruningTask_update?: PruningTask_Key | null
}

export interface UpdateTaskStatusVariables {
  taskId: UUIDString
  newStatus: string
}

export interface User_Key {
  id: UUIDString
  __typename?: 'User_Key'
}

export interface Zone_Key {
  id: UUIDString
  __typename?: 'Zone_Key'
}

interface AddNewTreeRef {
  /* Allow users to create refs without passing in DataConnect */
  (): MutationRef<AddNewTreeData, undefined>
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): MutationRef<AddNewTreeData, undefined>
  operationName: string
}
export const addNewTreeRef: AddNewTreeRef

export function addNewTree (): MutationPromise<AddNewTreeData, undefined>
export function addNewTree (dc: DataConnect): MutationPromise<AddNewTreeData, undefined>

interface GetPruningTasksForUserRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<GetPruningTasksForUserData, undefined>
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<GetPruningTasksForUserData, undefined>
  operationName: string
}
export const getPruningTasksForUserRef: GetPruningTasksForUserRef

export function getPruningTasksForUser (): QueryPromise<GetPruningTasksForUserData, undefined>
export function getPruningTasksForUser (dc: DataConnect): QueryPromise<GetPruningTasksForUserData, undefined>

interface UpdateTaskStatusRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateTaskStatusVariables): MutationRef<UpdateTaskStatusData, UpdateTaskStatusVariables>
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateTaskStatusVariables): MutationRef<UpdateTaskStatusData, UpdateTaskStatusVariables>
  operationName: string
}
export const updateTaskStatusRef: UpdateTaskStatusRef

export function updateTaskStatus (vars: UpdateTaskStatusVariables): MutationPromise<UpdateTaskStatusData, UpdateTaskStatusVariables>
export function updateTaskStatus (dc: DataConnect, vars: UpdateTaskStatusVariables): MutationPromise<UpdateTaskStatusData, UpdateTaskStatusVariables>

interface ListZonesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListZonesData, undefined>
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListZonesData, undefined>
  operationName: string
}
export const listZonesRef: ListZonesRef

export function listZones (): QueryPromise<ListZonesData, undefined>
export function listZones (dc: DataConnect): QueryPromise<ListZonesData, undefined>
