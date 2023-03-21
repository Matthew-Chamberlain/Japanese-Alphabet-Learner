const alphabet = new Map();
var infinite = false;
var oneLife = false;
var dakuon = false;
var youon = false;
var selectedAlphabet;
var userInput;
var currentCharacter;
var score = 0;
var maxScore;
var highestStreak = 0;

function loadHirigana()
{
    alphabet.set("あ","a");
    alphabet.set("い","i");
    alphabet.set("う","u");
    alphabet.set("え","e");
    alphabet.set("お","o");

    alphabet.set("か","ka");
    alphabet.set("き","ki");
    alphabet.set("く","ku");
    alphabet.set("け","ke");
    alphabet.set("こ","ko");

    alphabet.set("さ","sa");
    alphabet.set("し","shi");
    alphabet.set("す","su");
    alphabet.set("せ","se");
    alphabet.set("そ","so");

    alphabet.set("た","ta");
    alphabet.set("ち","chi");
    alphabet.set("つ","tsu");
    alphabet.set("て","te");
    alphabet.set("と","to");

    alphabet.set("な","na");
    alphabet.set("に","ni");
    alphabet.set("ぬ","nu");
    alphabet.set("ね","ne");
    alphabet.set("の","no");

    alphabet.set("は","ha");
    alphabet.set("ひ","hi");
    alphabet.set("ふ","fu");
    alphabet.set("へ","he");
    alphabet.set("ほ","ho");

    alphabet.set("ま","ma");
    alphabet.set("み","mi");
    alphabet.set("む","mu");
    alphabet.set("め","me");
    alphabet.set("も","mo");

    alphabet.set("ら","ra");
    alphabet.set("り","ri");
    alphabet.set("る","ru");
    alphabet.set("れ","re");
    alphabet.set("ろ","ro");

    alphabet.set("や","ya");
    alphabet.set("ゆ","yu");
    alphabet.set("よ","yo");

    alphabet.set("わ","wa");
    alphabet.set("を","wo");

    alphabet.set("ん","n");

    if(dakuon)
    {
        alphabet.set("が","ga");
        alphabet.set("ぎ","gi");
        alphabet.set("ぐ","gu");
        alphabet.set("げ","ge");
        alphabet.set("ご","go");

        alphabet.set("ざ","za");
        alphabet.set("じ","ji");
        alphabet.set("ず","zu");
        alphabet.set("ぜ","ze");
        alphabet.set("ぞ","zo");

        alphabet.set("だ","da");
        alphabet.set("ぢ","ji");
        alphabet.set("づ","zu");
        alphabet.set("で","de");
        alphabet.set("ど","do");

        alphabet.set("ば","ba");
        alphabet.set("び","bi");
        alphabet.set("ぶ","bu");
        alphabet.set("べ","be");
        alphabet.set("ぼ","bo");

        alphabet.set("ぱ","pa");
        alphabet.set("ぴ","pi");
        alphabet.set("ぷ","pu");
        alphabet.set("ぺ","pe");
        alphabet.set("ぽ","po");
    }

    if(youon)
    {
        alphabet.set("きゃ","kya");
        alphabet.set("きゅ","kyu");
        alphabet.set("きょ","kyo");

        alphabet.set("しゃ","sha");
        alphabet.set("しゅ","shu");
        alphabet.set("しょ","sho");

        alphabet.set("ちゃ","cha");
        alphabet.set("ちゅ","chu");
        alphabet.set("ちょ","cho");

        alphabet.set("にゃ","nya");
        alphabet.set("にゅ","nyu");
        alphabet.set("にょ","nyo");

        alphabet.set("ひゃ","hya");
        alphabet.set("ひゅ","hyu");
        alphabet.set("ひょ","hyo");

        alphabet.set("みゃ","mya");
        alphabet.set("みゅ","myu");
        alphabet.set("みょ","myo");

        alphabet.set("りゃ","rya");
        alphabet.set("りゅ","ryu");
        alphabet.set("りょ","ryo");
    }

    if(dakuon && youon)
    {
        alphabet.set("ぎゃ","gya");
        alphabet.set("ぎゅ","gyu");
        alphabet.set("ぎょ","gyo");

        alphabet.set("じゃ","ja");
        alphabet.set("じゅ","ju");
        alphabet.set("じょ","jo");

        alphabet.set("びゃ","bya");
        alphabet.set("びゅ","byu");
        alphabet.set("びょ","byo");

        alphabet.set("ぴゃ","pya");
        alphabet.set("ぴゅ","pyu");
        alphabet.set("ぴょ","pyo");
    }
}

function loadKatakana()
{
    alphabet.set("ア","a");
    alphabet.set("イ","i");
    alphabet.set("ウ","u");
    alphabet.set("エ","e");
    alphabet.set("オ","o");

    alphabet.set("カ","ka");
    alphabet.set("キ","ki");
    alphabet.set("ク","ku");
    alphabet.set("ケ","ke");
    alphabet.set("コ","ko");

    alphabet.set("サ","sa");
    alphabet.set("シ","shi");
    alphabet.set("ス","su");
    alphabet.set("セ","se");
    alphabet.set("ソ","so");

    alphabet.set("タ","ta");
    alphabet.set("チ","chi");
    alphabet.set("ツ","tsu");
    alphabet.set("テ","te");
    alphabet.set("ト","to");

    alphabet.set("ナ","na");
    alphabet.set("ニ","ni");
    alphabet.set("ヌ","nu");
    alphabet.set("ネ","ne");
    alphabet.set("ノ","no");

    alphabet.set("ハ","ha");
    alphabet.set("ヒ","hi");
    alphabet.set("フ","fu");
    alphabet.set("ヘ","he");
    alphabet.set("ホ","ho");

    alphabet.set("マ","ma");
    alphabet.set("ミ","mi");
    alphabet.set("ム","mu");
    alphabet.set("メ","me");
    alphabet.set("モ","mo");
    
    alphabet.set("ラ","ra");
    alphabet.set("リ","ri");
    alphabet.set("ル","ru");
    alphabet.set("レ","re");
    alphabet.set("ロ","ro");

    alphabet.set("ヤ","ya");
    alphabet.set("ユ","yu");
    alphabet.set("ヨ","yo");

    alphabet.set("ワ","wa");
    alphabet.set("ヲ","wo");

    alphabet.set("ン","n");

    if(dakuon)
    {
        alphabet.set("ガ","ga");
        alphabet.set("ギ","gi");
        alphabet.set("グ","gu");
        alphabet.set("ゲ","ge");
        alphabet.set("ゴ","go");

        alphabet.set("ザ","za");
        alphabet.set("ジ","ji");
        alphabet.set("ズ","zu");
        alphabet.set("ゼ","ze");
        alphabet.set("ゾ","zo");

        alphabet.set("ダ","da");
        alphabet.set("ヂ","ji");
        alphabet.set("ヅ","zu");  
        alphabet.set("デ","de");
        alphabet.set("ド","do");

        alphabet.set("バ","ba");
        alphabet.set("ビ","bi");
        alphabet.set("ブ","bu");
        alphabet.set("ベ","be");
        alphabet.set("ボ","bo");

        alphabet.set("パ","pa");
        alphabet.set("ピ","pi");
        alphabet.set("プ","pu");
        alphabet.set("ペ","pe");
        alphabet.set("ポ","po");
    }

    if(youon)
    {
        alphabet.set("キャ","kya");
        alphabet.set("キュ","kyu");
        alphabet.set("キョ","kyo");

        alphabet.set("シャ","sha");
        alphabet.set("シュ","shu");
        alphabet.set("ショ","sho");

        alphabet.set("チャ","cha");
        alphabet.set("チュ","chu");
        alphabet.set("チョ","cho");
        
        alphabet.set("ニャ","nya");
        alphabet.set("ニュ","nyu");
        alphabet.set("ニョ","nyo");

        alphabet.set("ヒャ","hya");
        alphabet.set("ヒュ","hyu");
        alphabet.set("ヒョ","hyo");

        alphabet.set("ミャ","mya");
        alphabet.set("ミュ","myu");
        alphabet.set("ミョ","myo");

        alphabet.set("リャ","rya");
        alphabet.set("リュ","ryu");
        alphabet.set("リョ","ryo");
    }

    if(dakuon && youon)
    {
        alphabet.set("ギャ","gya");
        alphabet.set("ギュ","gyu");
        alphabet.set("ギョ","gyo");

        alphabet.set("ジャ","ja");
        alphabet.set("ジュ","ju");
        alphabet.set("ジョ","jo");

        alphabet.set("ビャ","bya");
        alphabet.set("ビュ","byu");
        alphabet.set("ビョ","byo");

        alphabet.set("ピャ","pya");
        alphabet.set("ピュ","pyu");
        alphabet.set("ピョ","pyo");
    }
}

function checkAnswer()
{
    let answer = document.querySelector('input').value;
    answer = answer.toLowerCase();
    if(answer == ""){return false;}
    if(answer == alphabet.get(currentCharacter))
    {
        score++;
        if(!infinite)
        {
            document.getElementById("scoreText").innerHTML = "Score: "+ score +"/" + maxScore;
            document.getElementById("correctText").innerHTML = "";
        }
        else
        {
            if(score > highestStreak){highestStreak = score;}
            document.getElementById("scoreText").innerHTML = "Streak: "+ score + ", Highest Streak: " + highestStreak;
            document.getElementById("correctText").innerHTML = "";
        }
    }
    else
    {
        if(oneLife){loadScoreScreen();}
        if(infinite)
        {
            score = 0; 
            document.getElementById("scoreText").innerHTML = "Streak: "+ score + ", Highest Streak: " + highestStreak;
        }
        
        document.getElementById("correctText").innerHTML = "The correct answer was " + alphabet.get(currentCharacter);
    }
    alphabet.delete(currentCharacter);

    if(alphabet.size == 0 && infinite)
    {
        if(selectedAlphabet == "Hirigana")
        {
            loadHirigana();
        }
        else
        {
            loadKatakana();
        }
    }
    else if(alphabet.size == 0 && !infinite)
    {
        loadScoreScreen();
    }
    else
    {
        getRandomCharacter();
        document.getElementById("characterText").innerHTML = currentCharacter;
        document.getElementById("userInput").reset();
    }

    
}

function onHover(button)
{
    let colour = document.getElementById(button).style.background;
    if(colour != "rgb(166, 166, 166)")
    {
        document.getElementById(button).style.background = "#bababa";
    }
}

function onLeave(button)
{
    let colour = document.getElementById(button).style.background;
    if(colour != "rgb(166, 166, 166)")
    {
        document.getElementById(button).style.background = "#c9c9c9";
    }
    
}

function onClick(button)
{
    switch(button)
    {
        case "Hirigana":
            selectedAlphabet = "Hirigana";
            document.getElementById(button).style.background = "#a6a6a6";
            console.log(document.getElementById(button).style.background);
            document.getElementById("Katakana").style.background = "#c9c9c9";
            break;
        
        case "Katakana":
            selectedAlphabet = "Katakana";
            document.getElementById(button).style.background = "#a6a6a6";
            document.getElementById("Hirigana").style.background = "#c9c9c9";
            break;
        
        case "Infinite":
            if(infinite)
            {
                infinite = false; 
                document.getElementById(button).style.background = "#c9c9c9";
            }
            else
            {
                infinite = true; 
                document.getElementById(button).style.background = "#a6a6a6";
            }
            break;

        case "OneLife":
            if(oneLife){oneLife = false; document.getElementById(button).style.background = "#c9c9c9";}
            else{oneLife = true; document.getElementById(button).style.background = "#a6a6a6";}
            break;

        case "Dakuon":
            if(dakuon){dakuon = false; document.getElementById(button).style.background = "#c9c9c9";}
            else{dakuon = true; document.getElementById(button).style.background = "#a6a6a6";}
            break;

        case "Youon":
            if(youon){youon = false; document.getElementById(button).style.background = "#c9c9c9";}
            else{youon = true; document.getElementById(button).style.background = "#a6a6a6";}
            break;
        
        case "StartButton":
            if(selectedAlphabet != null)
            {
                startTest();
            }
            else{
                document.getElementById('infoText').innerHTML = "Please select one of the alphabets";
            }
            break;

        case "exitButton":
            location.reload();
            break;
        
        case "finishQuiz":
            location.reload();
            break;

        case "HiriganaCharacters":
            selectedAlphabet = "Hirigana";
            document.getElementById(button).style.background = "#a6a6a6";
            document.getElementById("KatakanaCharacters").style.background = "#c9c9c9";
            if(dakuon)
            {
                document.getElementById("KatakanaDakuonTable").style.display = "none";
                document.getElementById("HiriganaDakuonTable").style.display = "block";
            }
            else if(youon)
            {
                document.getElementById("KatakanaYouonTable").style.display = "none";
                document.getElementById("HiriganaYouonTable").style.display = "block";
            }
            else if(!dakuon && !youon)
            {
                document.getElementById("BasicKatakanaTable").style.display = "none";
                document.getElementById("BasicHiriganaTable").style.display = "block";
            }
            break;

        case "KatakanaCharacters":
            selectedAlphabet = "Katakana";
            document.getElementById(button).style.background = "#a6a6a6";
            document.getElementById("HiriganaCharacters").style.background = "#c9c9c9";
            if(dakuon)
            {
                document.getElementById("KatakanaDakuonTable").style.display = "block";
                document.getElementById("HiriganaDakuonTable").style.display = "none";
            }
            else if(youon)
            {
                document.getElementById("KatakanaYouonTable").style.display = "block";
                document.getElementById("HiriganaYouonTable").style.display = "none";
            }
            else if(!dakuon && !youon)
            {
                document.getElementById("BasicKatakanaTable").style.display = "block";
                document.getElementById("BasicHiriganaTable").style.display = "none";
            }
            break;

        case "BasicCharacters":
            dakuon = false;
            youon = false;
            document.getElementById(button).style.background = "#a6a6a6";
            document.getElementById("DakuonCharacters").style.background = "#c9c9c9";
            document.getElementById("YouonCharacters").style.background = "#c9c9c9";
            if(selectedAlphabet == "Hirigana")
            {
                document.getElementById("BasicHiriganaTable").style.display = "block";
                document.getElementById("HiriganaDakuonTable").style.display = "none";
                document.getElementById("HiriganaYouonTable").style.display = "none";
            }
            else if(selectedAlphabet == "Katakana")
            {
                document.getElementById("BasicKatakanaTable").style.display = "block";
                document.getElementById("KatakanaDakuonTable").style.display = "none";
                document.getElementById("KatakanaYouonTable").style.display = "none";
            }
            break;

        case "DakuonCharacters":
            dakuon = true;
            youon = false;
            document.getElementById(button).style.background = "#a6a6a6";
            document.getElementById("BasicCharacters").style.background = "#c9c9c9";
            document.getElementById("YouonCharacters").style.background = "#c9c9c9";
            if(selectedAlphabet == "Hirigana")
            {
                document.getElementById("BasicHiriganaTable").style.display = "none";
                document.getElementById("HiriganaDakuonTable").style.display = "block";
                document.getElementById("HiriganaYouonTable").style.display = "none";
            }
            else if(selectedAlphabet == "Katakana")
            {
                document.getElementById("BasicKatakanaTable").style.display = "none";
                document.getElementById("KatakanaDakuonTable").style.display = "block";
                document.getElementById("KatakanaYouonTable").style.display = "none";
            }
            
            break;

        case "YouonCharacters":
            youon = true;
            dakuon = false;
            document.getElementById(button).style.background = "#a6a6a6";
            document.getElementById("BasicCharacters").style.background = "#c9c9c9";
            document.getElementById("DakuonCharacters").style.background = "#c9c9c9";
            if(selectedAlphabet == "Hirigana")
            {
                document.getElementById("BasicHiriganaTable").style.display = "none";
                document.getElementById("HiriganaDakuonTable").style.display = "none";
                document.getElementById("HiriganaYouonTable").style.display = "block";
            }
            else if(selectedAlphabet == "Katakana")
            {
                document.getElementById("BasicKatakanaTable").style.display = "none";
                document.getElementById("KatakanaDakuonTable").style.display = "none";
                document.getElementById("KatakanaYouonTable").style.display = "block";
            }
            break;
    }   
}

function startTest()
{
    document.getElementById("mainScreen").style.display = "none";
    //document.getElementById("title").innerHTML = selectedAlphabet+" Test";
    document.getElementById("testScreen").style.display = "flex";

    if(selectedAlphabet == "Hirigana")
    {
        loadHirigana();
    }
    else
    {
        loadKatakana();
    }
    if(infinite)
    {
        maxScore = "∞";
    }
    else
    {
        maxScore = alphabet.size;   
    }
    if(infinite){document.getElementById("scoreText").innerHTML = "Streak: "+ score + ", Highest Streak: " + highestStreak;}
    else{document.getElementById("scoreText").innerHTML = "Score: "+ score +"/" + maxScore;}
    getRandomCharacter();
    document.getElementById("characterText").innerHTML = currentCharacter;
}

function getRandomCharacter() {
    let keys = Array.from(alphabet.keys());
    currentCharacter = keys[Math.floor(Math.random() * keys.length)];
}

function loadScoreScreen()
{
        document.getElementById("testScreen").style.display = "none";
        //document.getElementById("title").style.display = "none";
        document.getElementById("scoreScreen").style.display = "flex";
        document.getElementById("finalScore").style.display = "flex";
        if(infinite){document.getElementById("finalScore").innerHTML = "You achieved a streak of " + score + " correct answers";}
        else{document.getElementById("finalScore").innerHTML = "You got a score of " + score + " out of " + maxScore;}
        if(oneLife){document.getElementById("oneLifeCorrectAnswer").innerHTML = "The correct answer was " + alphabet.get(currentCharacter);}
        
}

function loadAlphabetChart()
{
    document.getElementById("HiriganaCharacters").style.background = "#a6a6a6";
    document.getElementById("BasicCharacters").style.background = "#a6a6a6";
    selectedAlphabet = "Hirigana";
}

