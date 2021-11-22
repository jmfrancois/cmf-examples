function withError() {
    throw new Error('can t dispatch it');
}

function withThunk() {
    return dispatch => {
        setTimeout(() => {
            throw new Error('can t dispatch in thunk');
        }, 1000);
    }
}

export default {
    withError,
    withThunk,
};
