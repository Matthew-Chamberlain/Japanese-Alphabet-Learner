const alphabet = new Map();
var infinite = false;
var oneLife = false;
var selectedAlphabet;
var dakuon = false;
var userInput;
var currentCharacter;
var score = 0;
var maxScore;

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
    console.log(alphabet.size);
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
}

function checkAnswer()
{
    let answer = document.querySelector('input').value;
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
            document.getElementById("scoreText").innerHTML = "Streak: "+ score;
            document.getElementById("correctText").innerHTML = "";
        }
    }
    else
    {
        if(infinite){score = 0; document.getElementById("scoreText").innerHTML = "Streak: "+ score;}
        if(oneLife){loadScoreScreen();}
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

function onClick(button)
{
    if(button == "Hirigana")
    {
        selectedAlphabet = "Hirigana";
        document.getElementById(button).style.background = "#a6a6a6";
        document.getElementById("Katakana").style.background = "#c9c9c9";
    }
    else if(button == "Katakana")
    {
        selectedAlphabet = "Katakana";
        document.getElementById(button).style.background = "#a6a6a6";
        document.getElementById("Hirigana").style.background = "#c9c9c9";
    }
    else if(button == "Infinite")
    {
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
    }
    else if(button == "OneLife")
    {
        if(oneLife){oneLife = false; document.getElementById(button).style.background = "#c9c9c9";}
        else{oneLife = true; document.getElementById(button).style.background = "#a6a6a6";}
    }
    else if(button == "Dakuon")
    {
        if(dakuon){dakuon = false; document.getElementById(button).style.background = "#c9c9c9";}
        else{dakuon = true; document.getElementById(button).style.background = "#a6a6a6";}
    }
    else if(button == "StartButton")
    {
        if(selectedAlphabet != null)
        {
            startTest();
        }
        else{
            document.getElementById('infoText').innerHTML = "Please select one of the alphabets";
        }
        
    }
    else if(button == "exitButton" || button == "finishQuiz")
    {
        location.reload();
    }
}

function startTest()
{
    document.getElementById("mainScreen").style.display = "none";
    document.getElementById("title").innerHTML = selectedAlphabet+" Test";
    document.getElementById("testScreen").style.display = "block";

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
    if(infinite){document.getElementById("scoreText").innerHTML = "Streak: "+ score;}
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
        document.getElementById("title").style.display = "none";
        document.getElementById("scoreScreen").style.display = "block";
        document.getElementById("finalScore").style.display = "block";
        document.getElementById("finalScore").innerHTML = "You got a score of " + score + " out of " + maxScore;
}