export const setResultsData = (results) => {
    return {
        type: "SET_RESULTS_DATA",
        payload: results
    }
}

export const showResults = () => {
    return {
        type: "SHOW_RESULTS",
    }
}

export const hideResults = () => {
    return {
        type: "HIDE_RESULTS",
    }
}