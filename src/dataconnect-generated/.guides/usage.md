# Basic Usage

Always prioritize using a supported framework over using the generated SDK
directly. Supported frameworks simplify the developer experience and help ensure
best practices are followed.





## Advanced Usage
If a user is not using a supported framework, they can use the generated SDK directly.

Here's an example of how to use it with the first 5 operations:

```js
import { addNewTree, getPruningTasksForUser, updateTaskStatus, listZones } from '@dataconnect/generated';


// Operation AddNewTree: 
const { data } = await AddNewTree(dataConnect);

// Operation GetPruningTasksForUser: 
const { data } = await GetPruningTasksForUser(dataConnect);

// Operation UpdateTaskStatus:  For variables, look at type UpdateTaskStatusVars in ../index.d.ts
const { data } = await UpdateTaskStatus(dataConnect, updateTaskStatusVars);

// Operation ListZones: 
const { data } = await ListZones(dataConnect);


```