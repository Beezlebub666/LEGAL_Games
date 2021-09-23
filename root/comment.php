<!--Ein Skript zum Kommentieren im Forum-->
<!DOCTYPE html>
<html lang="en">
<head>
</head>
<body>


<?php 
include "db_connect.php"    //Das Datenbank-Verbindungsskript wird importiert
?>
  <form action="search_keyword.php">         <!--Das Feld zur Eingabe eines Schlüsselwortes, dass beim drücken der Entertaste search_keyword.php ausführt--> 
  <br><label>Enter a Keyword to search for:</label><br>
	<input type="text" name="keyword"><br>     <!--Eingabefeld 0-->
  </form>
  <hr>

  <form action="add_comment.php">          <!--Zwei Eingabefelder; Das Erste ist für den Inhalt eines Kommentars. Das Zweite für den angezeigten Username.-->
  <br><label>Enter your comment here:</label><br>
	<input type="text" name="newcontent"><br> <!--Eingabefeld 1 Der Input newcontent wird in add_comment verwendet-->

	<br><label>Enter your username here:</label><br>
	<input type="text" name="author"><br> <!--Eingabefeld 2; Der Input author wird in add_comment verwendet-->
	
	<input type="submit" value="Submit">  <!--Der Submit Button, der die Anfrage abschickt und add_comment.php öffnen lässt-->
        <!--search_all_comments sendet eine SQL Anfrage an die Datenbank, die alle Kommentare ausgibt(siehe Z.8). -->
<?php

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }
  
  $sql = "SELECT CommentID, C_content, C_author, C_date FROM thread1"; 
  $result = $conn->query($sql);                                        
  if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
      echo "CommentID: " . $row["CommentID"]. " - Comment: " . $row["C_content"]. " " . $row["c_author"]. " ".$row["c_date"]."<br>";
    }
  } else {
    echo "0 results";
  }
  
  ?>

<?php
$conn->close();                    
?>



</body>
</html>