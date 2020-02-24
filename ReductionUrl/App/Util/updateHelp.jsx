export default {
    isUpdate: () => {        
        return sessionStorage.getItem(constants.updateStatus);
        console.log("1" + constants.updateState);
    },

    setUpdate: (set) => {
        if (set) {
            sessionStorage.setItem(constants.updateStatus, true);
            console.log("2" + constants.updateState);
        } else {
            sessionStorage.setItem(constants.updateStatus, false);
            console.log("3" + constants.updateState);
        }
    }
}