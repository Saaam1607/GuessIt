export const setGhostData = (data) => {
    return {
        type: "SET_RESULTS_DATA",
        payload: data
    }
}

export const resetGhostData = () => {
    return {
        type: "RESET_GHOST_DATA",
    }
}

export const showGhostModal = () => {
    return {
        type: "SHOW_GHOST_MODAL",
    }
}

export const hideGhostModal = () => {
    return {
        type: "HIDE_GHOST_MODAL",
    }
}