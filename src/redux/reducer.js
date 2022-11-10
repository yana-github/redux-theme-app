import { MAKE_LIGHT, MAKE_DARK } from "./actions";

const defaultStore = {
    themeStyles: '',
};

const reducer = (state = defaultStore, action) => {
    switch (action.type) {
        case "MAKE_LIGHT":
            return { ...state, themeStyles: MAKE_LIGHT.payload };
        case "MAKE_DARK":
            return { ...state, themeStyles: MAKE_DARK.payload };

            default:
                return state;
    }
};

export default reducer;
