function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
};
function mondayWork(activity = 'go to the office'){
    return `This Monday, I will ${activity}.`;
};
function wrapAdjective(adj = 'special'){
    return function(symb = '*'){
        return `You are ${adj}${symb}${adj}!`;
    };
};





// function wrapAdjective(adj = 'special'){
//     return function(symb = '*'){
//         return `You are ${symb}${adj}${symb}!`;
//     };
// };



// function wrapAdjective(adj = 'special'){
//     return function(){
//         let symb = '*';
//     return `You are ${symb}${adj}${symb}!`;
//     };
// };