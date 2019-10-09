import claimInPatientColumns from './claimInPatientColumns.json'
import claimOutPatientColumns from './claimOutPatientColumns.json'
import beneficiaryColumns from './beneficiaryColumns.json'

const t = claimOutPatientColumns.concat(claimInPatientColumns)
export default {
    claimInPatientColumns: t,
    claimOutPatientColumns: claimOutPatientColumns,
    beneficiaryColumns: beneficiaryColumns
}

