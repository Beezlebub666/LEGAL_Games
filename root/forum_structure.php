<!--Die Variable html definiert die Threads im allgemeinen Html Format. Anschließend werde die spezifischen Daten des jeweiligen Threads aus Data.js entnommen und eingefügt(siehe Z.29, Z.31, Z.35, Z.38)
. Die Variablen dafür fangen mit einem $ Zeichen an.-->
<!----------------------------------------------------------
-					  Forum-Header					
----------------------------------------------------------->

<link rel="stylesheet" href="src/stylesheets/forum.css">                 <!-- Externe CSS -->
<div class="top-bar">
    <h1>
        LEGAL_News
    </h1>
</div>

<!----------------------------------------------------------
-					  Forum-Threads				
----------------------------------------------------------->
<div class="main">
    <ol>
        <!-- Hier kommt die Template Seite von unten mit den zugehörigen Variablen rein-->
    </ol>
</div>

<script src="src/scripts/forum/data.js"></script>       <!-- data.js speichert den Content der Threads wie eine primitive Datenbank im JSON Format-->
<script>												
    console.log(threads);						
    var container = document.querySelector('ol');		// Ein Template wird gecoded, welches mit Variablen aus Data.js gefüttert wird um den jeweiligen Thread mit seinen Kommentaren zu laden
    for (let thread of threads) {                      //Die ${thread.x} Werte werden dafür aus data.js entnommen. thread.id ist eine eindeutige Bezeichung in Form einer Nummer des jewiligen Threads.
                                                        // Jeder Thread hat einen eigenen Title, Autoren, Kommentaranzahl unter dem Thread und ein erstell Datum.
        var html =  `                                   
        <li class="forumRow">
            <a href="thread.php?${thread.id}">          
                <h4 class="title">
                    ${thread.title}
                </h4>
                <div class ="bottom">
                    <p class="timestamp">
                        ${new Date(thread.date).toLocaleString()}
                    </p>
                    <p class="comment-count">
                        ${thread.comments.length} comments
                    </p>
                </div>
            </a>
        </li>
        `

        container.insertAdjacentHTML('beforeend', html);
    }
</script>