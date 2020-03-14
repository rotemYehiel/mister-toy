import { toysService } from '../services/toys.service.js'
// Vue.use(Vuex)

export const toyStore = {
    strict: true,
    state: {
        toys: [],
        currToy: null,
        filterBy: null,
        sortBy: ''
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys

        },
        currToy(state, { toy }) {
            state.currToy = toy
        },
        remove(state, { _id }) {
            var toys = state.toys
            var idx = toys.findIndex(toy => toy._id === _id)
            state.toys.splice(idx, 1)
        },
        editToy(state, { toyToSave }) {
            var toys = state.toys;
            if (toyToSave._id) {
                var idx = toys.findIndex(toy => {
                    return toy._id === toyToSave._id
                })
                state.toys.splice(idx, 1, toyToSave)
            } else {
                state.toys.unshift(toyToSave)
            }
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
        setSort(state, { sortBy }) {
            state.sortBy = sortBy
        }

    },
    getters: {
        toys(state) {

            var toysToChange = JSON.parse(JSON.stringify(state.toys))
            if (state.sortBy) {
                console.log(state.sortBy)
                const sortByKey = state.sortBy
                toysToChange.sort(function(toyA, toyB) {
                    if (toyA[sortByKey] < toyB[sortByKey]) { return -1; }
                    if (toyA[sortByKey] > toyB[sortByKey]) { return 1; }
                    return 0;
                })
            } else {
                return toysToChange
            }
            return toysToChange
        }
    },
    actions: {
        loadToys(context) {
            return toysService.query(context.state.filterBy)
                .then(toys => {
                    context.commit({ type: 'setToys', toys })
                })
        },
        getToy(context, { _id }) {
            return toysService.getById(+_id)
                .then(toy => {
                    context.commit({ type: 'currToy', toy })
                    return toy
                })

        },
        removeToy(context, { _id }) {
            return toysService.remove(_id)
                .then(() => {
                    context.commit({ type: 'remove', _id });
                })
        },
        saveToy(context, { toy }) {
            console.log('on store:', toy)
            return toysService.save(toy)
                .then(toyToSave => {
                    context.commit({ type: 'editToy', toyToSave })
                })
        },
    },
    modules: {

    }
}