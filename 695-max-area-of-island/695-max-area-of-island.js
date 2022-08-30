/**
 * @param {number[][]} grid
 * @return {number}
 */

/**
- get the edges by checking the array length horizontally and vertically.
- create a variable to keep the max_land_count and max_island_area
- create a explore_island_DFS function that iterates top, bottom, left, right of the grid and it does this by calling itself and turning any 1 to zero to prevent repeatition, if any 0 is found it stops the iteration for that side

*/
var maxAreaOfIsland = function(grid) {
    const max_row_length = grid[0].length-1
    const max_col_length = grid.length-1
    
    let max_island_area = 0
    let max_land_count = 0
    
    const explore_island = (rowIndex, colIndex)=>{
        // check if it within bounds
        if(rowIndex > max_col_length || colIndex > max_row_length || rowIndex < 0 || colIndex < 0 ){
            return 0
        }
        
        if(grid[rowIndex][colIndex] === 0){
            return 0
        }
        
        grid[rowIndex][colIndex] = 0
      
        max_land_count += 1
        
        explore_island(rowIndex-1, colIndex)
        explore_island(rowIndex+1, colIndex)
        explore_island(rowIndex, colIndex-1)
        explore_island(rowIndex, colIndex+1)
        

        max_island_area = Math.max(max_island_area, max_land_count)
    }
    
    
    grid.forEach((row, rowIndex)=>{
        row.forEach((col, colIndex)=>{
            if(col === 1){
                max_land_count = 0
                explore_island(rowIndex, colIndex)
            }
        })
    })
    
    return max_island_area
};