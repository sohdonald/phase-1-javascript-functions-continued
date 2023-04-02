// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
}

//3 down

function mondayWork(work = 'go to the office') {
    return `This Monday, I will ${work}.`;
}

// 6 down

function wrapAdjective(wrapper = '*') {
    return function (adj = 'special') {
        return `You are ${wrapper}${adj}${wrapper}!`;
    } 
}

const encouragingPromptFunction = wrapAdjective("!!!");