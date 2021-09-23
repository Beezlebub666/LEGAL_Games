 <!----------------------------------------------------------
-					  Forum-Thread						
----------------------------------------------------------->
<link rel="stylesheet" href="src/stylesheets/forum.css">                 <!-- Externe CSS zum stylen des Forums und seiner Threads-->

<div class="top-bar">
    <h1>
        LEGAL_News
    </h1>
</div>

<div class="main">
    
    <!-- header fehlt noch in php -->
    
    
    
    <?php 
    include "db_connect.php"    //Das Datenbank-Verbindungsskript wird importiert
    ?>

      
    <div class="writeCommentField">
        <div class="addCommentField">
            <form action="add_comment.php">          <!--Bei Submit öffne add_comment.php-->
            <br> <label> Enter your comment here: </label> <br> <!--Comment goes here-->
            <input type="text" name="newcontent"><br> 
        </div>
    
        <div class="addCommentAuthor">
            <br> <label> Enter your username here: </label> <br> <!-- Name of the author here -->
            <input type="text" name="author"><br> 
        </div>
        
        <div class="submitCommentButton">
            <input type="submit" value="Submit">  <!--Der Submit Button, der die Anfrage abschickt-->
            </form>
        </div>
    </div>


    <div class="comments">
        <?php
        
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $sql = "SELECT CommentID, C_content, C_author, C_date FROM thread1";
        $result = $conn->query($sql);                               
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
            echo '
                <div class="comment">
                    <div class="top-comment">
                        <p class="user">
                            '. $row["C_author"].'
                        </p>
                        <p class="comment-ts">
                            '. $row["C_date"].'
                        </p>
                    </div>
                    <div class="comment-content">
                        '. $row["C_content"].'
                    </div>
                </div>
            ';
            }
        } else {
            echo "0 results";
        }
        ?>
</div>
<?php
$conn->close();                    
?>
    

    
        
    
