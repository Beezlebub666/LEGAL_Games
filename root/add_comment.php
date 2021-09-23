<?php
  include "db_content.php";
  //Soll ausgeführt werden, wenn auf Submit gedrückt wurde
  $comment_content = $_GET["newcontent"]; //Holt sich aus comment.php die eingetragenen Werte aus Eingabefeld 1 und 2.
  $comment_author = $_GET["author"];      //

  echo "<h2>Trying to add a new Comment: $comment_content by $comment_author </h2>";  //Schreibt im HTML Format eine h2 mit dem comment_content und -author.

  $sql = "INSERT INTO thread1 (CommentID, C_content, C_author, C_date) VALUES ('NULL', '$comment_content', '$comment_author', 'NULL')"; //Pusht das geschriebene Kommentar in die Tabelle thread1 aus der forum Datenbank, vorübergehend nur mit dem comment_content und -author.
                                                                                                                                          //Die CommentID ist auto incrementing(Das heißt, dass sie sich die letze ID nimmt und sich für ihre Eigene eins addiert) braucht also 
                                                                                                                                          //keine Wertzuweisung. Das c_date wird erstmal nur mit NULL bestückt.
  $result = $conn->query($sql) or die(mysqli_error());  //Die Antwort der Datenbank wird hier initialisiert, falls es eine Antwort gibt, sonst speichert es NULL.

  include "search_all_comments.php"; //Nach dem Hinzufügen eines Kommentars werden alle Kommentare angezeigt, was in search_all_comments.php gecodet wurde.
?>

<a href="forum.php">Return to LEGAL_News</a>  <!--kreiert einen Link der zurück zum Forum führt-->
