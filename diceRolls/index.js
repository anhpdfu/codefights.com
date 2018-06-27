let sum = 9;
let diceArray = [
    [1, 2, 3, 4, 5, 6],
    [1, 10, 3, 4, 5, 6]
];

console.log(diceRolls(diceArray, sum))

function diceRolls2(dice, sum) {
    let calcSum = 0;

    let diceLength = dice.length;
    let x = 0;
    while(diceNo > diceIndex) {
        let valueLength = dice[x].length;
        let y = 0;
        while(valueNo > y) {
            let value = dice[x][y];



            y++;
        }
        x++;
    }
}

function calcSum()

function diceRolls(dice, sum) {
    let count = 0;
    let arr = dice[0];

    for(let y = 0; y < arr.length; y++) {
        let value = arr[y]
        if (dice.length === 1) {
            if (sum === value) {
                return 1;
            } else {
                continue;
            }
        } else {
            if (sum < value) {
                continue;
            } else {
                let tempDice = dice.slice(1, dice.length);
                count += diceRolls(tempDice, sum - value);
            }
        }
    }

    return count;
}
