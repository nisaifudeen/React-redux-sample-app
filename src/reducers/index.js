
var basicState = {
    article: [
        {id: '0', title: 'How to connect react with redux', orderCount: 0},
        {id: '1', title: 'Angular basics', orderCount: 0},
        {id: '2', title: 'Complete guide to learn react', orderCount: 0},
        {id: '3', title: 'Mobile app with flutter'},
        {id: '4', title: 'Best code challange', orderCount: 0},
        {id: '5', title: 'Working with Vue and React', orderCount: 0},
        {id: '6', title: 'Js array and array methods', orderCount: 0},
        {id: '7', title: 'Js array and array methods', orderCount: 0},
        {id: '8', title: 'Js array and array methods', orderCount: 0},
        {id: '9', title: 'Js array and array methods', orderCount: 0},
        {id: '10', title: 'Js array and array methods', orderCount: 0}
    ]
}

function rootReducer(state = basicState, action){
    switch(action.type){
        default: return state
    }
}


export default rootReducer;
    