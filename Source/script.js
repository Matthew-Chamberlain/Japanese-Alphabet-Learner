const hirigana = new Map();
const katakana = new Map();
var infinite = false;
var oneLife = false;
var selectedAlphabet;
var dakuon = false;

function mapLoader()
{
    console.log("Maps Loaded");

    hirigana.set("あ","a");
    hirigana.set("い","i");
    hirigana.set("う","u");
    hirigana.set("え","e");
    hirigana.set("お","o");

    hirigana.set("か","ka");
    hirigana.set("き","ki");
    hirigana.set("く","ku");
    hirigana.set("け","ke");
    hirigana.set("こ","ko");

    hirigana.set("さ","sa");
    hirigana.set("し","shi");
    hirigana.set("す","su");
    hirigana.set("せ","se");
    hirigana.set("そ","so");

    hirigana.set("た","ta");
    hirigana.set("ち","chi");
    hirigana.set("つ","tsu");
    hirigana.set("て","te");
    hirigana.set("と","to");

    hirigana.set("な","na");
    hirigana.set("に","ni");
    hirigana.set("ぬ","nu");
    hirigana.set("ね","ne");
    hirigana.set("の","no");

    hirigana.set("は","ha");
    hirigana.set("ひ","hi");
    hirigana.set("ふ","fu");
    hirigana.set("へ","he");
    hirigana.set("ほ","ho");

    hirigana.set("ま","ma");
    hirigana.set("み","mi");
    hirigana.set("む","mu");
    hirigana.set("め","me");
    hirigana.set("も","mo");

    hirigana.set("ら","ra");
    hirigana.set("り","ri");
    hirigana.set("る","ru");
    hirigana.set("れ","re");
    hirigana.set("ろ","ro");

    hirigana.set("や","ya");
    hirigana.set("ゆ","yu");
    hirigana.set("よ","yo");

    hirigana.set("わ","wa");
    hirigana.set("を","wo");

    hirigana.set("ん","n");

    katakana.set("ア","a");
    katakana.set("イ","i");
    katakana.set("ウ","u");
    katakana.set("エ","e");
    katakana.set("オ","o");

    katakana.set("カ","ka");
    katakana.set("キ","ki");
    katakana.set("ク","ku");
    katakana.set("ケ","ke");
    katakana.set("コ","ko");

    katakana.set("サ","sa");
    katakana.set("シ","shi");
    katakana.set("ス","su");
    katakana.set("セ","se");
    katakana.set("ソ","so");

    katakana.set("タ","ta");
    katakana.set("チ","chi");
    katakana.set("ツ","tsu");
    katakana.set("テ","te");
    katakana.set("ト","to");

    katakana.set("ナ","na");
    katakana.set("ニ","ni");
    katakana.set("ヌ","nu");
    katakana.set("ネ","ne");
    katakana.set("ノ","no");

    katakana.set("ハ","ha");
    katakana.set("ヒ","hi");
    katakana.set("フ","fu");
    katakana.set("ヘ","he");
    katakana.set("ホ","ho");

    katakana.set("マ","ma");
    katakana.set("ミ","mi");
    katakana.set("ム","mu");
    katakana.set("メ","me");
    katakana.set("モ","mo");
    
    katakana.set("ラ","ra");
    katakana.set("リ","ri");
    katakana.set("ル","ru");
    katakana.set("レ","re");
    katakana.set("ロ","ro");

    katakana.set("ヤ","ya");
    katakana.set("ユ","yu");
    katakana.set("ヨ","yo");

    katakana.set("ワ","wa");
    katakana.set("ヲ","wo");

    katakana.set("ン","n");
}

function buttonManager(button)
{
    if(button == "Hirigana")
    {
        selectedAlphabet = "Hirigana";
        document.getElementById(button).style.background = "#ff00ff";
        document.getElementById("Katakana").style.background = "#c9c9c9";
    }
    else if(button == "Katakana")
    {
        selectedAlphabet = "Katakana";
        document.getElementById(button).style.background = "#ff00ff";
        document.getElementById("Hirigana").style.background = "#c9c9c9";
    }
    else if(button == "Infinite")
    {
        if(infinite)
        {
            infinite = false; document.getElementById(button).style.background = "#c9c9c9";
        }
        else
        {
            infinite = true; document.getElementById(button).style.background = "#ff00ff";
        }
    }
    else if(button == "OneLife")
    {
        if(oneLife){oneLife = false; document.getElementById(button).style.background = "#c9c9c9";}
        else{oneLife = true; document.getElementById(button).style.background = "#ff00ff";}
    }
    else if(button == "Dakuon")
    {
        if(dakuon){dakuon = false; document.getElementById(button).style.background = "#c9c9c9";}
        else{dakuon = true; document.getElementById(button).style.background = "#ff00ff";}
        toggleDakuon();
    }
    else if(button == "StartButton")
    {
        startTest();
    }
}

function toggleDakuon()
{

}

function startTest()
{
    document.getElementById("mainTitle").style.display = "none";
    document.getElementById("mainScreen").style.display = "none";

    document.getElementById("testTitle").innerHTML = selectedAlphabet+" Test";
    document.getElementById("testTitle").style.display = "block";
    document.getElementById("testScreen").style.display = "block";

    if(selectedAlphabet)
    {

    }
    else
    {

    }
}

