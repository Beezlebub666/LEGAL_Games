	<!----------------------------------------------------------
	-					    Snake					
	----------------------------------------------------------->
<link rel="stylesheet" href="src/stylesheets/snake.css">                 <!-- Styleänderungen für das Snakespiel -->
<script src="src/scripts/snake/game.js" defer type="module"></script>	<!-- Verlinkt das Script für das Spiel "Snake"-->
	
<div class=snakeGameArea>
	<div class="startAndScore">
		<h3>Score:<span id="score">0</span> </h3>
		<button id="diffBtn0">Easy</button>                                <!--Drei Buttons zum Ändern der Spielschwierigkeit-->
		<button id="diffBtn1">Medium</button>
		<button id="diffBtn2">Hard</button>
	</div>
	<div id="game-board"></div>												<!-- Spielfläche wird initialisiert und in der CSS definiert-->
</div>
        