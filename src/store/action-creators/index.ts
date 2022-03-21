import * as componentsActionCreators from  "store/action-creators/components"
import * as  tableActionCreators from  "store/action-creators/table"
export const ActionCreators = {
    ...componentsActionCreators,
    ...tableActionCreators,
}