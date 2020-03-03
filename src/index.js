
// You should implement your task here.

module.exports = function towelSort (matrix) {
    
    if(!matrix == true) return [];
    let sort_out=[];
    let x =0;
    for (let i=0; i<matrix.length;i++){
        if (i%2==0){
            for(let j=0; j<matrix[i].length; j++){
                sort_out[x] = matrix[i][j];
                x++;
                }
        } else {
            for(let j=0; j<matrix[i].length; j++){
                sort_out[x] = matrix[i][(matrix[i].length-1-j)];
                x++;
                } 
        }
    }

    
    return (sort_out);

}
