//Data.js speichert die Threads mit ihren Kommentaren im JSON Format (Arrays in Arryas oder so) im LocalStorage, später würde diese Datei durch die Datenbank ersetz werden.
//Durch das speichern der Threads und Kommentare im LocalStorage kann die Website refreshed, geschlossen und wieder geöffnet werden ohne dass die neu geschriebenen Kommentare und Threads verschwinden.
// Dies funktioniert aber nur lokal, wie der Name localStorage schon vermuten lässt. Zudem ist localStorage sehr unsicher und sollte nie bei einer wirklichen Website verwendet werden(Deshalb die Datenbank).

var defaultThreads = [                  // Ein Array aus den ganzen Threads und deren Kommentaren
    {
       id: 1,                           // ID des Threads
       title:  "Epicness of the day",   //Der angezeigte Titel des Threads
       author: "Tilonator",             // Der Author des Threads
       date: Date.now(),                //Das Datum wird von der jetzigen bestimmt 
       content: "This day is epic",     // Content des Threads
       comments: [                      // Kommentare des Threads im Array
           {
               author: "Mirex_X",       //Kommentar Author
               date: Date.now(),        //Kommentar Date wird auch von der jetzigen Zeit generiert
               content: "This is so big brain holy f*ck"  //Das eigentliche Kommentar
           },
           {
            author: "Gamecat_xD",
            date: Date.now(),
            content: "not impressed"
           }
       ]
    },
    {
        id: 2,
        title:  "Play of the fray",
        author: "Tilonator",
        date: Date.now(),
        content: "Blue eyed yo meowy a**",
        comments: [
            {
                author: "Mirex_X",
                date: Date.now(),
                content: "strung"
            },
            {
             author: "Gamecat_xD",
             date: Date.now(),
             content: "chad chat cat"
            }
        ]
     },
     {
        id: 3,
        title:  "How does it work?",
        author: "Tilonator",
        date: Date.now(),
        content: "it just",
        comments: [
            {
                author: "Spiff",
                date: Date.now(),
                content: "It just works!"
            },
            {
             author: "Gamecat_xD",
             date: Date.now(),
             content: "indeed"
            }
        ]
     },
     {
        id: 4,
        title:  "Are you dumb, smart or god?",
        author: "C3",
        date: Date.now(),
        content: "it just",
        comments: [
            {
                author: "Gamecat_xD",
                date: Date.now(),
                content: "God of Math"
            },
            {
             author: "Yuna",
             date: Date.now(),
             content: "powerful!"
            },
            {
                author: "Tilonator",
                date: Date.now(),
                content: "Please send me your homework, god"
            },
            {
                author: "Mirex_X",
                date: Date.now(),
                content: "pathetic"
            }
        ]
     },
     {
        id: 5,
        title:  "What'cha beating on?",
        author: "Gamecat_xD",
        date: Date.now(),
        content: "Dubstep",
        comments: [
            {
                author: "Gamecat_xD",
                date: Date.now(),
                content: "My Waifu"
            },
            {
             author: "Yuna",
             date: Date.now(),
             content: "Linkin Park"
            },
            {
                author: "Tilonator",
                date: Date.now(),
                content: "Dubstip"
            },
            {
                author: "Mirex_X",
                date: Date.now(),
                content: "COUNTRY ROOADS"
            }
        ]
     },
     {
        id: 6,
        title:  "Wanna duck people in your surrounding?",
        author: "Quack",
        date: Date.now(),
        content: "it just",
        comments: [
            {
                author: "xXGuardianOfTheSwampXx",
                date: Date.now(),
                content: "Your body is 70 percent swamp… and I’m thirsty."
            },
            {
             author: "Gamecat_xD",
             date: Date.now(),
             content: "Duck the duck off!"
            },
            {
                author: "Tilonator",
                date: Date.now(),
                content: "What do ducks say when people throw things at them? Time to duck!"
                
            },
            {
                author: "Mirex_X",
                date: Date.now(),
                content: "What is a chick’s favorite drink? Peepsi."
            },
            {
                author: "Yuna",
                date: Date.now(),
                content: "Where did the duck go when he was sick? To the ducktor."
            },
            {
                author: "C3",
                date: Date.now(),
                content: "How do ducks talk? They don’t; they quack."
            },
            {
                author: "._Sc4ryM0m69_.",
                date: Date.now(),
                content: "Mind who you are ducking with!"
            }
                 ]
     },
     {
        id: 7,
        title:  "We got a Discord!",
        author: "LEGAL Owner",
        date: Date.now(),
        content: "it just",
        comments: [
            {
                author: "LEGAL_Owner",
                date: Date.now(),
                content: "https://discord.gg/RVXWEAEtNc"
            }
                 ]
     }
]

var threads = defaultThreads;
localStorage.setItem('threads', JSON.stringify(defaultThreads));
if (localStorage && localStorage.getItem('threads')) {
    threads = JSON.parse(localStorage.getItem('threads'));
} else {
    threads = defaultThreads;
    
}