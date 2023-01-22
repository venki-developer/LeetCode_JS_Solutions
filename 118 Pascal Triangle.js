// Given an integer numRows, return the first numRows of Pascal's triangle.

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Input: numRows = 1
// Output: [[1]]

// Constraints:

// 1 <= numRows <= 30

function generate(numRows){
    let res = [];
    for (let i = 0; i < numRows; i++){
        let row =[];
        for(let j=0;j<=i;j++){
            row.push((j == 0 || j == i) ? 1 : res[i-1][j-1] + res[i-1][j]);
        }
        res.push(row);
    }
    return res;
}

console.log(generate(5));