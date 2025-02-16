export const generateReduxReducers = (key) => {
    const nameKey = key?.charAt(0)?.toUpperCase() + key?.substring(1);

    return {
        [`set${nameKey}`]: (state, action) => {
            state[key] = action.payload;
        },
        [`clear${nameKey}`]: (state) => {
            state[key] = null;
        },
    };
};

export const generateReduxSelectors = (key) => {
    const nameKey = key?.charAt(0)?.toUpperCase() + key?.substring(1);

    return {
        [`is${nameKey}ValidSelector`]: (state) => {
            return !!state[key];
        },
        [`get${nameKey}Selector`]: (state) => {
            return state[key];
        },
        [`get${nameKey}ByIDSelector`]: (state, keyToCheck, id) => {
            if (!!id && !!keyToCheck) {
                return (
                    state[key]?.find((item) => item[keyToCheck] === id) || []
                );
            }
            return state[key];
        },
    };
};

// PAGINATION

export const generatePaginationStates = ({ limit = 10 }) => {
    return {
        current_page: 1,
        limit,
        total_pages: null,
        total_items: null,
        hasNextPage: false,
        hasPrevPage: false,
    };
};

export const generatePaginationReducers = (key = "pagination") => {
    const nameKey = key?.charAt(0)?.toUpperCase() + key?.substring(1);

    return {
        [`set${nameKey}`]: (state, action) => {
            const { current_page, limit, total_pages, total_items } =
                action.payload;

            console.log(current_page < total_pages, current_page, total_pages);

            state[key] = {
                limit: limit || 10,
                current_page: current_page || 1,
                total_items: total_items || null,
                total_pages: total_pages || null,

                hasNextPage: current_page < total_pages ? true : false,
                hasPrevPage: current_page > 1 ? true : false,
            };
        },
        [`clear${nameKey}`]: (state, action) => {
            state[key] = {
                current_page: 1,
                limit: action?.payload?.limit || 10,
                total_pages: null,
                total_items: null,
                hasNextPage: false,
                hasPrevPage: false,
            };
        },
        // [`nextPage`]
    };
};

export const generatePaginationSelectors = (key = "pagination") => {
    const nameKey = key?.charAt(0)?.toUpperCase() + key?.substring(1);

    return {
        [`get${nameKey}Selector`]: (state) => {
            return state[key];
        },
    };
};
