const GRID_SIZE_X = 32
const GRID_SIZE_Y = 18

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * GRID_SIZE_X) + 1,
        y: Math.floor(Math.random() * GRID_SIZE_Y) + 1
    }
}

export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > GRID_SIZE_X ||
        position.y < 1 || position.y > GRID_SIZE_Y
    )

}