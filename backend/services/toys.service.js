const fs = require('fs');

var gToys = _createToys();

function query(filterBy) {
    // const filter = JSON.parse(filterBy);
    console.log(filterBy)
        // console.log('service of the back!', filter)
    var filteredToys = gToys;

    if (filterBy) {
        console.log('u got?:', filterBy)
        filteredToys = _filterToys(filter, filteredToys);
        console.log('i recive:', filteredToys)
    }
    // if (sort) {
    //     _sortToys(sort, filteredToys);
    // }

    return Promise.resolve(gToys);
}

function remove(toyId) {
    const toyIdx = gToys.findIndex(toy => toy._id === toyId)
    gToys.splice(toyIdx, 1);
    _saveToysToFile()
    return Promise.resolve()
}

function save(toy) {

    if (toy._id) {
        toy.updatedAt = Date.now()

        const toyIdx = gToys.findIndex(currToy => currToy._id === toy._id)
        if (toyIdx === -1) throw new Error('toy not found')
        gToys.splice(toyIdx, 1, toy);
    } else {
        bug._id = _makeId()
        bug.title = bug.title
        bug.description = bug.description
        bug.severity = bug.severity
        bug.createdAt = Date.now()
        bug.creator = { nickname: 'rotem' }
        gToys.push(bug)
    }
    _saveBagsToFile()
    return Promise.resolve(bug)
}


module.exports = {
    query,
    // getById,
    save,
    remove
}

function _filterToys(filterBy, filteredToys) {
    if (filterBy.name) {
        filteredToys = filteredToys.filter(toy => toy.name.includes(filterBy.name));
    }
    if (filterBy.inStock === false) {
        filteredToys = filteredToys.filter(toy => toy.inStock === false);
    }

    if (filterBy.inStock === true) {
        filteredToys = filteredToys.filter(toy => toy.inStock);
    }

    if (filter.type) {
        filteredToys = filteredToys.filter(toy => toy.type === filterBy.type);
    }

    return filteredToys;
}

function _makeId(length = 3) {
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return txt;
}

function _createToys() {
    var toys = require('./data/toys.json')
    if (toys && toys.length) return toys;
    toys = ['Cannot update a toy', 'Cannot save a toy'].map(_createToy)
    gToys = toys;
    _saveToysToFile();
    return toys;
}

function _createToy(title) {
    return {
        _id: _makeId(),
        title: '',
        description: '',
        severity: 3,
        createdAt: new Date(),

    }
}

function _saveToysToFile() {
    fs.writeFileSync('./data/toys.json', JSON.stringify(gToys, null, 2));
}