import * as componentsActionCreators from  "store/action-creators/components"
import * as  tableActionCreators from  "store/action-creators/table"
import * as  formActionCreators from  "store/action-creators/form"
export const ActionCreators = {
    ...componentsActionCreators,
    ...tableActionCreators,
    ...formActionCreators,
}