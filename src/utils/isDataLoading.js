const isDataLoading = (loadingRequests) => {
    for (let [requestName, { isLoading }] of Object.entries(loadingRequests)) {
        if(isLoading) {
            return {
                isLoading,
                requestName
            }
        }
    }

    return { isLoading: false, requestName: '' };
}

export default isDataLoading;