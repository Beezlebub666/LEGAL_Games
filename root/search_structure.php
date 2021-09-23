<!----------------------------------------------------------
-			       Forum-Thread-Look						
----------------------------------------------------------->
<link rel="stylesheet" href="src/stylesheets/forum.css">                 <!-- Externe CSS zum stylen des Forums und seiner Threads-->

<div class="top-bar">
    <h1>
        LEGAL_Data
    </h1>
</div>

<div class="main">
    
    <!-- header fehlt noch in php -->

      
    <form action="search_structure.php">         <!--Das Feld zur Eingabe eines Schlüsselwortes, dass beim drücken der Entertaste search_keyword.php ausführt--> 
        <br><label>Enter a Keyword to search for:</label><br>
            <input type="text" name="keyword"><br>     <!--Eingabefeld 0-->
    </form>

    <br>
    <hr> <!-- a horizontal black line -->
    <br>

    <?php

    include "db_connect.php";
    $keywordfromform = $_GET["keyword"]; //Das keyword wird comment.php aus dem Eingabefeld zur Suchbegriffeingabe entnommen und einer Variable zugewiesen.
                                        //$keywordfromform wird unten zum Durchsuchen der Datenbanksuchanfrage-Ergebnisse genutzt

    // Sucht in der Datenbank nach dem Wort chicken
        echo "<h2>Show all comments with the word: $keywordfromform </h2>";

    $sql = "SELECT CommentID, C_content, C_author, C_date FROM thread1 WHERE C_content LIKE '%$keywordfromform%' "; //Es werden alle Attribute von Kommentaren ausgewählt und nur die
    $result = $conn->query($sql);                                                                                   // Kommentare ausgegeben die irgendwo in ihrem C_content das 
                                                                                                                    // gesuchte Keyword beinhalten.


    // Falls es passende Daten in der Datenbank gibt gebe diese wie folgt nacheinander aus
    //Die while Schleife läuft solange bis result keine Treffer mehr hat, anders gesagt es gibt jede Spalte an Kommentaren aus bis es keine Spalte mehr gibt.
    //Falls Es vom Start aus keine Ergebnisse gibt, gibt das Programm den Schriftzug "0 results" aus.
    if ($result->num_rows > 0) {
        while($row = $result->fetch_assoc()) {
        echo "CommentID: " . $row["CommentID"]. " - Comment: " . $row["C_content"]. "_____Written by: " . $row["C_author"]. "_______on the: ".$row["C_date"]."<br><br>"; //CommentID, C_content, c_author, c_date, werden
        }                                                                                                                                //alle in einer Zeile von jeweils einem Kommentar
    } else {                                                                                                                         //ausgegeben
        echo "0 results";
    }
    ?>

</div>
<?php
$conn->close();                    
?>
    