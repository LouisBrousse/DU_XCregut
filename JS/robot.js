'use strict'

function robot(x, y, direction) {
    let myrobot = {abscisse:x, ordonne:y, direction:direction};
    return myrobot;
}

function robotToString (robot) {
    return(`Robot is : ${robot.abscisse}, ${robot.ordonne}, ${robot.direction}`);
}

function robotTab (robot_origin, n_robot, delx, dely){
    delx = delx || 10;
    dely = dely || 10;
    let robot_precedent = robot_origin;
    let robot_list = [];
    for (let num = 1; num < n_robot; num++) {     
        robot_precedent = robot(robot_precedent.abscisse + delx, robot_precedent.ordonne + dely, robot_precedent.direction);
        robot_list.push(robot_precedent);
    }
    return robot_list;
}




{
let r1 = robot(3, 4, 'Est')
console.log(r1)
console.log(robotToString(r1))
robotTab(r1, 4, 6, 8)
for (let r of robot_list) {
    console.log([r]);
}


}


