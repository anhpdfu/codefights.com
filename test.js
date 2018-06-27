let q = new Array(6);
let p = new Array(6);
let c = new Array(6);

for (let i = 0; i < 6; i++) {
    q[i] = new Array(6);
    p[i] = new Array(6);
    c[i] = new Array(6);
    for (let j = 0; j < 6; j++) {
        q[i][j] = 10001;
        p[i][j] = 0;
        c[i][j] = -1;
    }
}

let a = [
    [10001, 10001, 10001, 10001, 10001, 10001, 10001],
    [10001, 7, 7, 4, 1, 8, 10001],
    [10001, 7, 6, 1, 1, 4, 10001],
    [10001, 3, 5, 7, 8, 2, 10001],
    [10001, 2, 6, 7, 0, 2, 10001],
    [10001, 7, 3, 5, 6, 1, 10001],
    [10001, 10001, 10001, 10001, 10001, 10001, 10001]
];
let n = 5;

computeShortestPath();

function cc(y, x) {
    return a[y][x];
}

function computeShortestPath() {

    computeShortestPathArrays()

    let kkkkk = c;

    let minIndex = 1;
    let min = q[n][1];

    for (let i = 2; i <= n; i++) {
        if (q[n][i] < min) {
            minIndex = i;
            min = q[n][i];
        }
    }

    printPath(n, minIndex);
}

function printPath(y, x) {
    console.log(x);
    console.log("<-");

    if (y === 2) {
        console.log(x + p[y][x]);
    } else {
        printPath(y-1, x + p[y][x]);
    }
}

function computeShortestPathArrays() {
    for (let x = 1; x <= n; x++) {
        q[1][x] = cc(1, x);
    }

    for (let y = 1; y <= n; y++) {
        q[y][0] = 10001;
        q[y][n + 1] = 10001;
    }

    for (let y = 2; y <= n; y++) {
        for (let x = 1; x <= n; x++) {
            let number1 = q[y-1][x-1];
            let number2 = q[y-1][x];
            let number3 = q[y-1][x+1];
            let m = Math.min(number1, number2, number3)
            q[y][x] = m + cc(y, x);
            c[y][x] = q[y][x];

            if (m === q[y-1][x-1]) {
                p[y][x] = -1;
            } else if (m === q[y-1][x]) {
                p[y][x] =  0;
            } else {
                p[y][x] = 1;
            }
        }
    }

    for (let y = 2; y <= n; y++) {
        for (let x = 1; x <= n; x++) {
            let number1 = q[y-1][x-1];
            let number2 = q[y-1][x];
            let number3 = q[y-1][x+1];
            let m = Math.min(number1, number2, number3)
            q[y][x] = m + cc(y, x);
            c[y][x] = q[y][x];

            if (m === q[y-1][x-1]) {
                p[y][x] = -1;
            } else if (m === q[y-1][x]) {
                p[y][x] =  0;
            } else {
                p[y][x] = 1;
            }
        }
    }
}