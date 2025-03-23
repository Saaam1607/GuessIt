export const setBonusData = (bonusData) => {

    console.log("setBonusData", bonusData);
    console.log("bonusData");
    return {
        type: "SET_BONUS_DATA",
        payload: bonusData
    }
}

export const resetLastBonusIndex = () => {
    console.log("resetLastBonusIndex");
    return {
        type: "RESET_LAST_BONUS_INDEX",
    }
}