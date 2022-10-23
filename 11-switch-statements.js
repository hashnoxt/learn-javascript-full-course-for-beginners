function caseInSwitch(val) {
    var answer = "";
    switch (val) {
        case 1:
            answer = 'alpha';
            break;
        case 2:
            answer = 'beta';
            break;
        default:
            answer = 'theta';
            break
    }
    return answer;
}

console.log(caseInSwitch(11));

