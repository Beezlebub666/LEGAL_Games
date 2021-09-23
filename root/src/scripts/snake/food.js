import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition()
var expansionRate = 1
const scoreDisplay = document.querySelector('#score')
let score = 0
let scoreGrowthRate = 10

export function update() {
  if (onSnake(food)) {                  //isst die Schlange? wenn ja füge Punkte hinzu und spawne neues Food
    expandSnake(expansionRate)
    food = getRandomFoodPosition()

    score += scoreGrowthRate
    scoreDisplay.innerHTML = score
  }
}

export function draw(gameBoard) {
  const foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add('food')
  gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}

diffBtn0.addEventListener('click', () => {                  //Easy
  expansionRate = 1
  scoreGrowthRate = 10
})

diffBtn1.addEventListener('click', () => {                  //Medium
  expansionRate = 3
  scoreGrowthRate = 30
})

diffBtn2.addEventListener('click', () => {                  //Hard
  expansionRate = 5
  scoreGrowthRate = 50
})