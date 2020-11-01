export const initialState = {
	user: null,
	playlists: [],
	playing: false,
	item: null,
	// Remove after finished developing
	token:
		"BQAWdy_tf8Wr7yXRIoCElVOCkvxKU0oL4lAIWGFM1Q0WpGPIvVhDZCmj_UjTpOBSRE7tQ72SgLSWvSOOpl15xlIjNtIr62uJhJhQ6EQXGi8yCYd-dZS6E6T09HcL5bngIX7bzO17Ip75IBycoR7nPfIH1m8ziqGL",
};

const reducer = (state, action) => {
	console.log(action);

	// Action -> type, [payload]

	switch (action.type) {
		case "SET_USER":
			return {
				...state,
				user: action.user,
			};
		case "SET_TOKEN":
			return {
				...state,
				token: action.token,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.playlists,
			};
		case "SET_DISCOVER_WEEKLY":
			return {
				...state,
				discover_weekly: action.discover_weekly,
			};
		default:
			return state;
	}
};

export default reducer;
