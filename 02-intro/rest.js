// rest 

function num(a, b, c, d, e, f, g, h, i, j) {
    const total = a + b + c + d + e + f + g + h + i + j;

    console.log(total);

}

num(2, 4, 6, 8, 10, 12, 14, 16, 18, 20)



function total(...num) {
    console.log(...num);
}

total(2, 4, 6, 8, 10, 12, 14, 16, 18, 20);