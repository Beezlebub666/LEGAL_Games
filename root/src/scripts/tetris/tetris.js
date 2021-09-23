document.addEventListener('DOMContentLoaded', () => {       //Wird aktiviert wenn die HTML Datei fertig geladen hat
    const grid = document.querySelector('.grid')
    let squares = Array.from(document.querySelectorAll('.grid div')) //Erstellt ein Array aus allen Squares
    const scoreDisplay = document.querySelector('#score')
    const startBtn = document.querySelector('#start-button')
    const width = 10
    let gameSpeed = 500
    let nextRandom = 0
    let timerId
    let score = 0
    let scoreGrowthRate = 10
    const colors = [
        '#cd01ff',
        '#66cbff',
        '#feff01',
        'green',
        '#ff6600'
    ]

    //Die Tetrominos
    const lTetromino = [
        [1,width+1,width*2+1, 2],
        [width,width+1,width+2,width*2+2],
        [1,width+1,width*2+1,width*2],
        [width,width*2,width*2+1,width*2+2]
    ]

    const zTetromino = [
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1],
        [0,width,width+1,width*2+1],
        [width+1,width+2,width*2,width*2+1]
    ]

    const tTetromino = [
        [1,width,width+1,width+2],
        [1,width+1,width+2,width*2+1],
        [width,width+1,width+2,width*2+1],
        [1,width,width+1,width*2+1]
    ]

    const oTetromino = [
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1],
        [0,1,width,width+1]
    ]

    const iTetromino = [
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3],
        [1,width+1,width*2+1,width*3+1],
        [width,width+1,width+2,width+3]
    ]

    const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

     // currentPosition gibt die Position des Tetrominos auf dem Spielfeld an
    let currentPosition = 4       
    let currentRotation = 0     

    //Wählt zufällig Form und Rotation des Tetrominos
    let random = Math.floor(Math.random()*theTetrominoes.length)
    let current = theTetrominoes [random][currentRotation]      // [Form des Tetrominos][Rotation des Tetrominos]

    //Zeichne das Tetromino
    function draw() {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino')
      squares[currentPosition + index].style.backgroundColor = colors[random]
    })
  }

    //entferne das Tetromino
    function undraw() {
        current.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino')
            squares[currentPosition + index].style.backgroundColor = ''        //entfernt die Farbe des ehemaligen Tetrominos
        })
    }


    // Controls mit KeyCodes
    function control(e) {
        if(e.keyCode ===37 || e.keyCode === 65) {  //37(ArrowLeft) || 65(A)
            moveLeft()
        } else if (e.keyCode ===38 || e.keyCode === 87) { // 38(ArrowUp) || 87(W)
            rotate()
        } else if (e.keyCode ===39 || e.keyCode === 68) { // 38(ArrowRight) || 68(D)
            moveRight()
        } else if (e.keyCode ===40 || e.keyCode === 83) { // 40(ArrowDown) || 83(S)
            moveDown()
        }
        


        
    }
    document.addEventListener('keyup', control)     //Führt die Control Funktion aus wenn das keyup event eingetreten ist

    //moveDown Funktion
    function moveDown() {
        undraw()
        currentPosition += width
        draw()
        freeze() //trifft es die worldBorder oder einen anderen Tetromino?
    }

    //freeze Funktion
    function freeze() {
        if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
            current.forEach(index => squares[currentPosition + index].classList.add('taken'))
            //starte einen neuen fallenden Tetromino (wenn ein Tetromino einen taken Square erreicht hat und somit freezed i.e. sich verankert)
            random = nextRandom
            nextRandom = Math.floor(Math.random()*theTetrominoes.length)
            current = theTetrominoes [random][currentRotation]
            currentPosition = 4
            draw()
            displayShape()
            addScore()
            gameOver()
        }
    }

    //bewege das Tetromino nach links, solang nichts im Weg ist
    function moveLeft() {
        undraw()
        const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

        if(!isAtLeftEdge) currentPosition -=1

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition +=1
        }

        draw()
    }

    //bewege das Tetromino nach rechts, solang nichts im Weg ist
    function moveRight() {
        undraw()
        const isAtRightEdge = current.some(index => (currentPosition + index) % width === width -1)

        if(!isAtRightEdge) currentPosition +=1

        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            currentPosition -=1
        }

        draw()
    }

    //rotiere das Tetramino
    function rotate() {
        undraw()
        currentRotation ++
        if(currentRotation === current.length) { //if the current rotation gets to 4, make it go to 0
            currentRotation = 0
        }
        current = theTetrominoes[random][currentRotation]
        draw()
    }

    //zeige die nächste Form in der Vorschau
    const displaySquares = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    let displayIndex = 0

    //Tetrominos ohne Rotationen
    const upNextTetrominoes = [
        [1,displayWidth+1,displayWidth*2+1, 2],                         //lTetromino
        [0, displayWidth,displayWidth+1,displayWidth*2+1],              //zTetromino
        [1,displayWidth,displayWidth+1,displayWidth+2],                 //tTetromino
        [0,1,displayWidth,displayWidth+1],                              //oTetromino
        [1,displayWidth+1,displayWidth*2+1,displayWidth*3+1]            //iTetromino
    ]


    //Zeigt das nächste Tetromino in der mini-grid Vorschau
    function displayShape() {
        //entfernt jedgliche Spur eines Tetrominos aus dem mini-grid
        displaySquares.forEach(square => {
            square.classList.remove('tetromino')
            square.style.backgroundColor = ''
        })
        upNextTetrominoes[nextRandom].forEach( index => {
            displaySquares[displayIndex + index].classList.add('tetromino')
            displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]        //Weist dem Tetromino seine jeweilige Farbe zu
        })
    }

    //bringt den Button zum laufen
    startBtn.addEventListener('click', () => {
        if (timerId) {
           clearInterval(timerId)
           timerId = null 
        } else {
            draw()
            timerId = setInterval(moveDown, gameSpeed)
            nextRandom = Math.floor(Math.random()*theTetrominoes.length)
            displayShape()
        }
    })

    //zählt Punkte
    function addScore() {
        for (let i=0; i < 199; i+=width) {                          
            const row = [i, i+1, i+2, i+3, i+4, i+5, i+6, i+7, i+8, i+9]    //Eine Zeile im Spielfeld

            if(row.every(index => squares[index].classList.contains('taken'))) {    //Falls in einer Zeile jedes Feld ausgefüllt ist entferne dies und schreibe dem Spieler Punkte zu
                score += scoreGrowthRate
                scoreDisplay.innerHTML = score
                row.forEach(index => {
                    squares[index].classList.remove('taken')
                    squares[index].classList.remove('tetromino')
                    squares[index].style.backgroundColor = ''                       //entfärbt die Reihe
                })
                const squaresRemoved = squares.splice(i, width)
                squares = squaresRemoved.concat(squares)
                squares.forEach(cell => grid.appendChild(cell))
            }
        }
    }

    //game over
    function gameOver() {
        if(current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
            scoreDisplay.innerHTML = 'end'
            clearInterval(timerId)
            alert('Game Over biatch')
        }
    }

    diffBtn0.addEventListener('click', () => {                  //Easy
        gameSpeed = 500                                         // 500ms pro Tetromino move
        scoreGrowthRate = 10
      })
      
      diffBtn1.addEventListener('click', () => {                  //Medium
        gameSpeed = 300                                         // 300ms pro Tetromino move
        scoreGrowthRate = 30
      })
      
      diffBtn2.addEventListener('click', () => {                  //Hard
        gameSpeed = 100                                         // 100ms pro Tetromino move
        scoreGrowthRate = 50
      })
})