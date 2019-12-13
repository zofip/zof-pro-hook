import moment from 'moment'

import { REMOVE, ADD } from "../../../utils/constants";

const addedIndicatorsReducer = (addedIndicators, action) => {
    switch (action.type) {
        case ADD:
            return [
                ...addedIndicators,
                {
                    event: action.indicator.metric.name,
                    date: moment(new Date()).format('YYYY/MM/DD HH:mm:ss'),
                    value: action.value,
                    kpi: action.indicator.kpi
                }
            ];
        case REMOVE:
            return addedIndicators.filter(newIndicator => newIndicator.event !== action.event);
        default:
            return addedIndicators;
    }
};

export default addedIndicatorsReducer;