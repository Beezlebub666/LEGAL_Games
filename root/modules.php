<!DOCTYPE html>
<html>
	<body>

		<!----------------------------------------------------------
		-					   Navigation Bar						
		----------------------------------------------------------->

		<header>
			<a href="index.php"><img class="logo" src="src/images/logo/logo.png"></a>					<!-- LEGAL_GAMES Logo wird dargestellt und in der CSS nach obenlinks geschoben-->
		
			<div class="topnav">										
				<a href="index.php" class="active" >Home</a>
				<div class="dropdown">
					<button class="dropbtn">Games </button>
					<div class="dropdown-content">
						<a href="snake.php">Snek</a>
						<a href="tetris.php">Tetris</a>
						<a href="games.php">Other</a>
					</div>
				</div> 
				<a href="#">Videos</a>
				<a href="forum.php">Forum</a>
				<a href="search.php">search...</a>
				
				<button class="loginBtn" onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>  <!-- Log-in button --> 
		</header>
		</div>
		<link rel="stylesheet" href="src/stylesheets/style.css">                 <!-- Externe CSS für die grundlegende Stylisierung der Seite-->

		<!----------------------------------------------------------
		-					  Login-Popup					
		----------------------------------------------------------->
		<link rel="stylesheet" href="src/stylesheets/log-in.css">                 <!-- Externe CSS für die Stylisierung des Login-Popups-->



		<div id="id01" class="modal">
		<form class="modal-content animate" action="forum.php" method="post">
			<div class="imgcontainer">																								<!-- beinhaltet den Avatar und das Kreuz zum Schließen des Fensters-->
			<span onclick="document.getElementById('id01').style.display='none'" class="close" title="Close Window">&times;</span>  <!-- Kreuz zum Schließen des Popupsfensters-->
			<img src="src/images/log-in/avatar.png" alt="Avatar" class="avatar">
			</div>

			<div class="loginContainer">														
			<label for="uname"><b>Username</b></label>									<!-- Usernameschriftzug über dem Loginfeld-->
			<input type="text" placeholder="Enter Username" name="uname" required>		<!-- Usernameeintragefeld mit der grauen Schrift "Enter Username", welche vom placeholder Attribut erzeugt wird-->

			<label for="psw"><b>Password</b></label>									<!-- Passwortschriftzug üben dem Passwortfeld-->
			<input type="password" placeholder="Enter Password" name="psw" required>	<!-- Passworteintragefeld mit der grauen Schrift "Enter Password", welche vom placeholder Attribut erzeugt wird-->
				
			<button class="loginSubmit" type="submit">Login</button>										<!-- Der Loginbutton um den Loginprozess zu bestätigen-->
			<label>
				<input type="checkbox" checked="checked" name="remember"> Remember me   <!-- Die Remember-me-checkbox und der Remember me Schriftzug-->
			</label>
			</div>

			<div class="loginContainer" >													<!-- Der Container für den Cancel button und den "Forgot password?" Link-->
			<button type="button" onclick="document.getElementById('id01').style.display='none'" class="cancelbtn">Cancel</button> <!-- Der Cancelbutton bricht den Loginprozess ab und schließt somit das Fenster-->
			<span class="psw">Forgot <a href="#">password?</a></span>
			</div>
		</form>
		</div>

		<script>
		//Login Fenster wird initialisiert
		var modal = document.getElementById('id01');

		//Wenn der Benutzer irgendwo außerhalb des Loginfeldes klickt schließt es sich
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = "none";
			}
		}
		</script>
		
	</body>
</html>