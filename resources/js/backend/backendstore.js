import {createStore} from 'vuex';


export default createStore({
	state: {
		count: 0,
	},

	getters: {
		counterGetter(state){
			return state.count;
		}
	},
	//Mutations
	mutations: {
		increment (state) {
	      // mutate state
	      state.count++
	    }
	},


	//Actions
	actions: {

	}
})