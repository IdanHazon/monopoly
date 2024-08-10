class Player {
    static turn = true;

    constructor(name, img, color) {
        this.current_cell = 1;
        this.starter_cell = 1;
        this.name = name;
        this.money = 700;
        this.figure = img;
        this.figure_name = "";
        this.properties = 0;
        this.color = color;
        this.properties_arr = [];
    }

}
class cell_data {
    constructor(name, img, price,text,charge) {
        this.name = name;
        this.img = img;
        this.price = price;
        this.text = text;
        this.charge = charge;
        this.owner = "";
        this.open = () => {
            build_card(name, img, price, text, charge);
        }

    }


}

class Dilema {
    constructor(headline, text, image, optionA, optionB) {
        this.headline = headline;
        this.text = text;
        this.image = image;
        this.optionA = optionA;
        this.optionB = optionB;
    }
}
class Option {
    constructor(button, headline, text, image, effect) {
        this.button = button;
        this.headline = headline;
        this.text = text;
        this.image = image;
        this.effect = effect;
    }
}

class specials {
    constructor(headline, text, img, effect) {
        this.headline = headline;
        this.text = text;
        this.effect = effect;
    }
}

class charge {

}


let option_1 = new Option("מבליג", "ניצלת", "החלטה חכמה...", "relief.png", () => {
    edit_div_option(option_1);

});
let option_2 = new Option("מתעמת איתו", "חבל", " הערס זרק עליך כיסא, ועכשיו אתה בדרך לאסף הרופא :( <br/> שלם 50₪", "hurt.png", () => {
    edit_div_option(option_2);
    take_money(50);
});
let arsDilema = new Dilema("דילמה", "ערס עוקף אותך בתור- מה תעשה?", "cut_in_line.png", option_1, option_2);

let option_3 = new Option("מחכה- גם אני הייתי תלמיד", "אוי...", "איחרת לבוס ועכשיו הוא עושה לך כאב ראש...<br/> שלם 50₪ לרגיעון", "yelling_boss.png", () => {
    edit_div_option(option_3);
    take_money(50);
});
let option_4 = new Option("מצפצף לו עד מחר", "אוי...", "מסתבר שהתלמיד הוא בכלל שוטר! שלם 100 שח", "police.png", () => {
    edit_div_option(option_4);
    take_money(100);
});
let drivingDilema = new Dilema("דילמה", "תלמיד נהיגה תקוע מלפניך כבר שעה ואתה מאחר לעבודה- מה תעשה?...", "stuck_in_traffic.png", option_3, option_4);


let option_5 = new Option("ברור שנותן", "וואו!", "אתה בן אדם טוב! 50₪-", "angel.png", () => {
    edit_div_option(option_5);
    take_money(50);
});
let option_6 = new Option("וואלה- אני קצר בכסף", "מי חינך אותך?!", "לך 3 צעדים אחורה", "devil.png", () => {
    edit_div_option(option_6);
    steps();
});
let poorDilema = new Dilema("דילמה", "קבצן ברחוב מבקש ממך 50₪", "poor.png", option_5, option_6);


let specials1 = new specials("תיבת מזל", "חג שמח קח 50 שח, עלינו","", () => {
    take_money(-50);
});
let specials2 = new specials("הפתעה", `לך בחזרה לנתב"ג`, "", () => {

});
let specials3 = new specials("הפתעה", "אראלה התקשרה! (כדי להזכיר לך שאת/ה חייב/ת 50 שח לחידוש המנוי)", "", () => {
    take_money(50);
});
let specials4 = new specials("תיבת מזל", "נס גדול היה פה?!- קבל דמי חנוכה 20 שח","", () => {
    take_money(-20);
});
let specials5 = new specials("הפתעה", "צעקת על מוקדנית של מכבי- שלם 25 שח","", () => { });
let specials6 = new specials("תיבת מזל", "מצאת 50 שח על הרצפה!", "", () => {
    take_money(-50);
});
let specials7 = new specials("הפתעה", "נסעת מעל המהירות המותרת! שלם 20 שח", "", () => {take_money(20);});
let specials8 = new specials("הפתעה", "ביקורת מס הכנסה- שלם על כל נכס 10 שקלים", "", () => { take_money(20); });
const lucky_chest = [specials1, specials4, specials6];
const surprise = [specials2, specials3, specials5, specials7, specials8];
function steps() {
    let playerFigure = document.getElementById(current_player.name);
    current_player.current_cell -= 3;
    current_player.starter_cell -= 3;
    document.getElementById("continue").addEventListener("click", () => {
        close_dilema();
        setTimeout(() => {
            playerFigure.remove();
            document.getElementById("inner13").appendChild(playerFigure);
            manage(current_player, cell_buildings[current_player.current_cell]);
            document.getElementById("continue").addEventListener("click", () => {
                close_dilema();
            });
        }, 1500);

    });

}


function switch_players(player) {
    document.getElementById('headline_text').innerHTML = "החלף מקום";
    document.getElementById('top-image').src = 'IMAGES/switch.png';
    document.getElementById('price').innerHTML = '';
    document.getElementById('description_bottom_text').innerHTML = "יש להחליף מקום עם השחקן השני";
    open();
    document.getElementById("continue").addEventListener("click", () => {
        switch_button(player);
    });

}

function switch_button(player) {
    let player_location1 = cellsId[player.current_cell];
    let player_location2 = cellsId[other_player.current_cell];
    let current_cell_1 = player.current_cell;
    let current_cell_2 = other_player.current_cell;
    let playerFigure_1 = document.getElementById(player.name);
    let playerFigure_2 = document.getElementById(other_player.name);
    playerFigure_1.remove();
    playerFigure_2.remove();
    document.getElementById("inner" + player_location1).appendChild(playerFigure_2);
    document.getElementById("inner" + player_location2).appendChild(playerFigure_1);
    player.current_cell = current_cell_2;
    player.starter_cell = current_cell_2;
    other_player.current_cell = current_cell_1;
    other_player.current_cell = current_cell_1;

    let modal = document.getElementById("black_screen");
    modal.style.display = "none";
    document.getElementById('alert_div').style.marginTop = "-500px";
    document.getElementById('alert_div').style.opacity = "0";
    
}
const dilema_array = [arsDilema, drivingDilema, poorDilema];
function dilema_search() {
    let modal = document.getElementById("dilema_black_screen");
    modal.style.display = "block";
    document.getElementById("dilema_content").style.display = "block";

    $("#dilema_content").animate({ 'margin-top': '-20px', opacity: '1' }, 1000, "swing");
    let index = Math.floor(Math.random() * 3);
    edit_dilema_div(dilema_array[index]);
}
function edit_dilema_div(dilema) {
    document.getElementById("continue").style.display = "none";
    document.getElementById("optionA").style.display = "block";
    document.getElementById("optionB").style.display = "block";
    let option_a = dilema.optionA;
    let option_b = dilema.optionB;
    document.getElementById("img_dilema").setAttribute("src", "IMAGES/" + dilema.image)
    document.getElementById("headline_dilema").innerHTML = "דילמה";
    document.getElementById("description_dilema").innerHTML = dilema.text;
    document.getElementById("optionA").innerHTML = option_a.button;
    document.getElementById("optionB").innerHTML = option_b.button;
    document.getElementById("optionA").addEventListener("click", option_a.effect);
    document.getElementById("optionB").addEventListener("click", option_b.effect);
}
function edit_div_option(option) {
    document.getElementById("img_dilema").setAttribute("src", "IMAGES/" + option.image)
    document.getElementById("headline_dilema").innerHTML = option.headline;
    document.getElementById("description_dilema").innerHTML = option.text;
    document.getElementById("optionA").style.display = "none";
    document.getElementById("optionB").style.display = "none";
    document.getElementById("continue").style.display = "block";
}

function close_dilema() {
    $("#dilema_content").animate({ 'margin-top': '-500px', opacity: '0' }, 1000, "swing", () => {
        document.getElementById("dilema_black_screen").style.display = "none";
    });
}

function take_money(money) {
    current_player.money -= money;
    document.getElementById('character-money').innerHTML = "יתרה בחשבון: " + current_player.money + "₪";
}










let count = 0;
let miklat = false;
let player1;
let player2;
let current_player;
let sold_img_on = false;
let pais_factory = new cell_data('מפעל הפיס', 'pais_card.jpg', 200, "מפעל הפיס הוא גוף ציבורי בעל זיכיון בלעדי לעריכת הגרלות ומשחקי מזל בישראל: לוטו, צ'אנס, פיס 777, 123, חישגד ומנוי פיס.", 125);
let osem_factory = new cell_data('מפעל אוסם', 'osem_card.png', 250, "אסם-נסטלה היא קבוצת מזון ישראלית המייצרת ומשווקת מגוון רחב של מוצרים בסטנדרטים הגבוהים ביותר.", 155);
let elit_factory = new cell_data('מפעל עלית', 'elit_card.jpg', 275, "הממתקים של עלית מוכרים לכל ילד וילדה בישראל עוד משנות השלושים של המאה הקודמת, אז הוקם מפעל השוקולד הראשון של עלית ברמת גן. ", 170);
let golda = new cell_data('גולדה', 'glida_card.jpg', 300, "גולדה- רשת הגלידות העברית הראשונה, המספקת חווית מרגשת של טעמים נפלאים ונדירים בכל ביקור מחדש.", 200);
let shawarma = new cell_data('שיפודי סמי ובניו', 'shawarma_card.png', 175, "בשנת 1960 נוסדה שיפודי סמי ובניו, מסעדה משפחתית בשכונת התקווה. לאחר שלושה עשורים של הצלחה עברה המסעדה לרמת גן. ", 75);
let ovad = new cell_data('הסביח של עובד', 'ovad_card.jpg', 200, "הסביח של עובד הוא מזנון סביח שהוקם בגבעתיים בשנות ה-80 על ידי המסעדן הישראלי עובד דניאל. המזנון נמצא ברחוב סירקין 7. ", 115);
let carmel_market = new cell_data('שוק הכרמל', 'carmel_card.jpg', 125, "שוק הכרמל נחשב לשוק המרכזי והמפורסם ביותר של תל אביב והוא חלק בלתי נפרד מההיסטוריה של העיר העברית הראשונה.", 50);
let yehuda_market = new cell_data('שוק מחנה יהודה', 'yehuda_card.jpg', 200, "שוק מחנה יהודה הוא שוק מזון וביגוד, הנמצא בין הרחובות יפו ואגריפס לצד שכונת מחנה יהודה בירושלים, ומשמש כשוק מזון מרכזי בבירה.", 100);
let lunaPark = new cell_data('לונה פארק', 'lunapark_card.jfif', 350, "הלונה פארק בתל אביב, פארק השעשועים המוכר ביותר במדינה, משתרע על פני כ-50 דונם של מדשאות רחבות, ומכיל שפע של אטרקציות והרפתקאות.", 250);
let memadion = new cell_data('הממדיון', 'memadion_card.jpg', 400, "המימדיון הוא פארק מים הנמצא בפארק הירקון בצפון העיר תל אביב, ונחשב לאחד הגדולים בישראל. הוא משתרע על פני שטח של 100 דונם. ", 300);
let hermon = new cell_data('הר החרמון', 'hermon_card.jpg', 500, "הר חרמון הוא ההר הגבוה ביותר בישראל ובסוריה. ההר נמצא בגבול הצפוני-מזרחי של ישראל ומהווה את קצהו הדרומי של רכס הרי מול הלבנון.", 325);
let cotel = new cell_data('הכותל המערבי', 'cotel_card.jpg', 300, "הכותל המערבי הוא אתר מקודש עבור העם היהודי, ומשמש לתפילה ולהתכנסויות דתיות ולאומיות.", 150);
let eilat = new cell_data('טיילת אילת', 'eilat_card.jpg', 150, "טיילת אילת היא אחת האטרקציות המוכרות ביותר וידועה בשל דוכנייה המגוונים שמציעים מבחר מזכרות, מאכלים ובגדים.", 50);
let yetToBeDefined = new cell_data('', '', 0, "", 0);

const cellsId = [-999, 1, 2, 3, 4, 5, 6, 7, 9, 11, 13, 15, 17, 24, 23, 22, 21, 20, 19, 18, 16, 14, 12, 10, 8];
const board_images = ["", "natbag", "pais", "osem", "luckychest", "elit", "broadcast", "miklat", "eilat", "glida", "taxes", "surprise", "cotel", "shawarma", "hermon", "ovad", "surprise", "luckychest", "gotomiklat", "memadion", "lunapark", "switch", "yehuda", "carmel", "dilema"];
const board_images_buildings = ["pais", "osem", "elit", "eilat", "glida", "cotel", "shawarma", "hermon", "ovad", "memadion", "lunapark", "yehuda", "carmel"];
const cell_buildings = [null, null, pais_factory, osem_factory, lucky_chest, elit_factory, null, null, golda, null, shawarma, ovad, null, dilema_search, carmel_market, yehuda_market, switch_players, lunaPark, memadion, go_to_miklat, null, hermon, cotel, null, eilat];
const board_data = [build_card];
let locked_player;
let unlocked_player;
let other_player;
function BuildBoard() {
    let counter = 1;
    let tr_counter = 0;
    let table = document.createElement("table");
    table.setAttribute("class", "board");
    table.setAttribute("id", "board");

    for (let i = 0; i < 7; i++) {
        let tr = document.createElement("tr");
        tr.setAttribute("id", "tr" + tr_counter);
        for (let j = 0; j < 7; j++) {
            let td = document.createElement("td");
            if ((tr_counter == 1 || tr_counter == 2 || tr_counter == 3 || tr_counter == 4 || tr_counter == 5 ) && (j != 0 && j != 6)) {
                td.setAttribute("class", "del_cell");
            }
            else {
                let div = document.createElement('div');
                div.setAttribute("class", "center");
                div.setAttribute("id", "inner" + counter);
                td.appendChild(div);
                td.setAttribute("id", "cell" + counter);
                td.style.background = "url(IMAGES/" + board_images[counter] + ".png) no-repeat";
                td.style.backgroundSize = "100% 100%";
                td.style.backgroundPosition = "top right";
                counter++;
            }
            tr.appendChild(td);
        }
                tr_counter++;

        table.appendChild(tr);
    }
    document.body.appendChild(table);
    document.getElementById('main_image').style.display = "block";
    add_div();


    createPlayersFigures();
}

function go_to_miklat() {
    let playerFigure = document.getElementById(current_player.name);

    miklat = true;
    locked_player = current_player;
    document.getElementById('headline').innerHTML = "אזעקת צבע אדום";
    document.getElementById('img').src = 'IMAGES/iron_dome.jpg';
    document.getElementById('price').innerHTML = '(כמה מפתיע)';
    document.getElementById('description').innerHTML = "יש לחכות לפחות 3 תורות עד שאפשר לצאת מהמקלט!";
    document.getElementById('charge').innerHTML = "בהצלחה במקלט!";
    document.getElementById("dont_buy").style.display = "none";
    document.getElementById("buy_property").style.display = "none";
    let button = document.createElement("button");
    button.setAttribute("class", "pay");
    button.setAttribute("id", "button_close_your_div_");
    document.getElementById("center_buttons_div").appendChild(button);
    button.innerText = "המשך";
    button.addEventListener("click", () => {
        close_card();
        current_player.current_cell = 7;
        current_player.starter_cell = 7;
        playerFigure.remove();
        document.getElementById("inner7").appendChild(playerFigure);
        document.getElementById("dont_buy").style.display = "block";
        document.getElementById("buy_property").style.display = "block";
        document.getElementById("button_close_your_div_").remove();
    });
    openCard();
}
function add_div() {
    for (var i = 0; i < board_images_buildings.length; i++) {
        let image = document.createElement("img");
        image.setAttribute("class", "img_flex_box");
        image.setAttribute("src", "IMAGES/" + board_images_buildings[i] + ".png");
        image.setAttribute("id", board_images_buildings[i]);
        document.getElementById("propeties-flex").appendChild(image);
    }

}
function createPlayersFigures()
{
    let figure1 = document.createElement("img");//בניית שחקן 1
    figure1.setAttribute("id", player1.name);
    figure1.setAttribute("class", "circle");
    figure1.setAttribute("src", "IMAGES/" + player1.figure + ".png");
    let figure2 = document.createElement("img");//בניית שחקן 2
    figure2.setAttribute("class", "circle");
    figure2.setAttribute("id", player2.name);
    figure2.setAttribute("src", "IMAGES/" + player2.figure+".png");
    document.getElementById('inner1').appendChild(figure1);//הצמדה לדיב הפנימי של התא הראשון
    document.getElementById('inner1').appendChild(figure2);//הצמדה לדיב הפנימי של התא הראשון
}
function toggleTurn() {
        let button = document.getElementById('button');
        button.disabled = true;
        if (Player.turn) {
            roll(player1);
            Player.turn = false;
            current_player = player1;
            other_player = player2;
        }
        else {
            roll(player2);
            Player.turn = true;
            current_player = player2;
            other_player = player1;
        }
    }
function roll(player) {
    if (miklat) {
        if (player.name === locked_player.name) {
            player = current_player;
        }
        count++;
        if (count === 3) {
            miklat = false;
            count = 0;
        }
    }
    let num = Math.floor(Math.random() * 4) + 1;
    document.getElementById('steps').innerHTML = num;
    $("#steps").animate({ 'margin-bottom': "0px" }, 500, "swing", () => {
        $("#steps").animate({ 'margin-bottom': "-45px" }, 500, "swing");
    });

    let playerFigure = document.getElementById(player.name);
    edit_currency_div(player);
    $('#currency').animate({ "top": "0px" }, 1200, "swing");

        player.current_cell += num;//התא הייעודי
        if (player.current_cell > 24) {//סיים מסלול
            player.current_cell -= 24;//הורד ב-24
        }

    const move = setInterval(() => {
            if (player.starter_cell == 24) {//נמצא בתא האחרון
                player.starter_cell = 1;//מתחיל את הסיבוב מחדש
            }
            else
            player.starter_cell += 1;

            if (player.starter_cell== player.current_cell) {
                clearInterval(move);
                setTimeout(() => {
                    manage(player, cell_buildings[player.current_cell]);
                }, 500);
            }
     playerFigure.remove();
                if (player.starter_cell % 2 == 0) {
                    playerFigure.style.transform = `rotate(-30deg)`;
                }
                else
                    playerFigure.style.transform = `rotate(30deg)`;
                document.getElementById('inner' + cellsId[player.starter_cell]).appendChild(playerFigure);
           
    }, 300);
        document.getElementById('button').setAttribute("src", "IMAGES/" + player.name + ".png");
    }
function openCard() {
    let modal = document.getElementById("myModal");
    modal.style.display = "block";
    document.getElementById("modal_content").style.display = "block";
    $("#modal_content").animate({ 'margin-top': '-20px', opacity: '1' }, 1000, "swing");
}
function open() {
    let modal = document.getElementById("black_screen");
    modal.style.display = "block";
    document.getElementById("alert_div").style.display = "block";
    $("#alert_div").animate({ 'margin-top': '-20px', opacity: '1' }, 1000, "swing");
}
function open_Starter_Card() {
    let modal = document.getElementById("start_model");
    modal.style.display = "block";
    $("#modal_first").animate({ 'margin-top': '0px', opacity: '1' }, 1200, "swing", () => {
        $("#logo").animate({ 'margin-top': '0px', opacity: '1', width: '530px', height: '160px' }, 1000, "swing", () => {
            $("#game_type_headline").show(1000, () => {
                $(".choose_game_button").show(400);

            });
        });

    });

}
function close_card() {
    let modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.getElementById('modal_content').style.marginTop = "-500px";
    document.getElementById('modal_content').style.opacity = "0";


}
function build_card(name, img, price, text,charge) {
    document.getElementById('headline').innerHTML = name;
    document.getElementById('img').src = 'IMAGES/' + img;
    document.getElementById('price').innerHTML = 'מחיר ' + price + '₪';
    document.getElementById('description').innerHTML = text;
    document.getElementById('charge').innerHTML = "דמי שכירות: " + charge + "₪";;
    openCard();
}
function game_mode_text(text) {
    document.getElementById('text_mode').innerHTML = text;
}
function game_mode_choose(gamemode) {
    $('.choose_game_button').attr("disabled", "disabled");
    game_mode_text('');
    if (gamemode=== '1v1') {
        chooseFiguers();
    }
}
function chooseFiguers() {
    $("#modal_first").animate({ width: "+=100px", height: "+=40px" }, 1200, "swing", () => { });
    $(".choose_game_button").hide(1000, () => {
        $(".choose_game_button").remove();
    });
    document.getElementById('text_mode').display = 'none';
    $("#game_type_headline").hide(1000, () => {
        document.getElementById('game_type_headline').innerHTML = 'שחקן 1 בחר דמות';
    });
    $("#game_type_headline").show(1000, () => {
        create_buttons_figuers();//השמת הכפתורים על המסך
    });

}
function create_buttons_figuers() {
    let nir = document.createElement('INPUT');//יצירת לחצנים
    let sarit = document.createElement('INPUT');
    let shimrit = document.createElement('INPUT');
    let itzik = document.createElement('INPUT');


    document.getElementById("center_buttons").style.opacity = "0";//שימוש באפקט
    const figuers = [nir, shimrit, sarit, itzik];
    const text = [`בן 35 מתל אביב, <br/> אב לשלושה והייטקיסט במשרה חלקית, <br/> משפט קבוע: "אמרתי לך"`, `בת 16 מחולון, <br/> מקצוע: האשראי של אבא, <br/> משפט קבוע: "חיים שיליייי"`, 'בת 30 מתל אביב, <br/> מקצוע: משפיענית רשת ופעילה בעמותת ״תנו לחיות לחיות״, <br/> משפט קבוע: ״שמאלנית וטוב לי״', ' בן 19 מפתח תקווה , <br/> עובד בקיוסק של מושיקו , <br/> משפט קבוע: ״בשבוע דוקר שבת שומר״'];
    const names = ['יניר ביטון', 'שרית חיים','שמרית צמח', 'איציק רחמים'];
    figuers.forEach((item, index) => {
        item.setAttribute("type", "image");
        item.setAttribute("src", "IMAGES/figure" + index + ".png");
        item.setAttribute("id", "figure" + index);
        item.setAttribute("class", "figuers_button");
        document.getElementById("center_buttons").appendChild(item);
        item.addEventListener("mouseenter", () => {
            description_text(names[index], text[index]);
        });
        item.addEventListener("mouseleave", () => {
            description_text('', '');
        });
        item.addEventListener("click", () => {
            click_button_figure(index, names[index]);
        });
    })//בניית דמויות
    $("#center_buttons").animate({ opacity: "1" }, 1500, "linear");
}
function description_text(name, desc) {
    document.getElementById('name_headline').innerHTML = name;
    document.getElementById('figure_description').innerHTML = desc;

}
function click_button_figure(index, name) {
    if (document.getElementById('game_type_headline').innerHTML !== 'שחקן 2 בחר דמות') {
        player1 = new Player('Player1', 'figure' + index, '#d50505ed');
        player1.figure_name = name;
        $('#figure' + index).attr("disabled", "disabled");
        document.getElementById('figure' + index).style.opacity = '0.2';
        document.getElementById('game_type_headline').innerHTML = 'שחקן 2 בחר דמות';
    }
    else {
        player2 = new Player('Player2', 'figure' + index, '#4bb41fe0');
        player2.figure_name = name;

        $('.figuers_button').attr("disabled", "disabled");
        $('#name_headline').hide(1000);
        $('#figure_description').hide(1000);
        $('#center_buttons').hide(1000, () => {
            $("#modal_first").animate({ 'margin-top': '-900px' }, 1200, "swing", () => {
                document.getElementById("start_model").style.display = "none";
                BuildBoard();
            });
        });
    }
}

function check_availability(property) {
    if (property.owner === "") {
        return true;
    }
    else
        return false;

}

function buy_property(player, property) {
    property.owner = player;
    player.money -= property.price;
    player.properties += 1;
    document.getElementById("buy_property").removeEventListener("click", buy_property);
    let object = document.getElementById("cell" + cellsId[player.current_cell]);
    let image = board_images[cellsId[player.current_cell]];
    let house = "IMAGES/house" + player.name[player.name.length - 1] + ".png";
    object.style.background = "url('" + house + "'), url('IMAGES/" + image + ".png')";
    object.style.backgroundSize = "36%, 100%";
    object.style.backgroundRepeat = "no-repeat";
    object.style.backgroundPosition = "50% 77%, center center";
    document.getElementById('character-money').innerHTML = "יתרה בחשבון: " + player.money + "₪";
    document.getElementById('character-propeties').innerHTML = "נכסים: " + player.properties;
    player.properties_arr.push(property);
    close_card();
}
function dont_buy() {
    document.getElementById("buy_property").removeEventListener("click", buy_property);
    close_card();
}
function sold_charge(property, player) {
    document.getElementById('headline').innerHTML = property.name;
    document.getElementById('img').src = 'IMAGES/' + property.img;
    alert(player.figure_name);
    document.getElementById('price').innerHTML = 'בעלים: ' + player.figure_name;
    document.getElementById('description').innerHTML = '';
    document.getElementById('charge').innerHTML = "דמי שכירות: " + charge + "₪";
    openCard();

}
function canBuyThePropety(player, property) {
    if (player.money < property.price) {
        document.getElementById('buy_property').title = "אין מספיק כסף";
        document.getElementById('buy_property').style.backgroundColor = "grey";
        document.getElementById('buy_property').disabled = "disabled";
        return false;
    }
    else {
        document.getElementById('buy_property').title = "";
        document.getElementById('buy_property').style.backgroundColor = "#50C878";
        document.getElementById('buy_property').disabled = false;
        return true;
    }

}
function manage(player, property) {

    document.getElementById("soldImage").style.display = "none";
    document.getElementById('button').disabled = false;

    if (property != null) {

    if (property.constructor.name == "cell_data") {
        property_management(player, property);
    }
    else if (typeof property == "function") {
        if (property.name === "switch_players") {
            property(player);
        }
        else
        property();

    }
    else if (property.constructor.name == "specials") {

    }
    else if (property.constructor.name == "surprise") {

    }
    else if (property.constructor.name == "charge") {

        }
    }

}

function property_management(player, property) {
    if (check_availability(property)) {
        if (canBuyThePropety(player, property)) {
        document.getElementById("buy_property").onclick = function () {
            buy_property(player, property);
            }
        }

        property.open();
    }
    else {
        if (property.owner !== player) {
            document.getElementById("img").setAttribute("src", "IMAGES/" + property.img);
            document.getElementById("headline").innerHTML = property.name;
            document.getElementById("price").innerHTML = "בעלים: " + property.owner.figure_name;
            document.getElementById("description").innerHTML = property.text;
            document.getElementById("charge").innerHTML = "עליך לשלם: " + property.charge;
            let button_pay = document.createElement("button");
            button_pay.setAttribute("class", "pay");
            button_pay.setAttribute("id", "pay_button");
            button_pay.innerText = "שלם";
            button_pay.addEventListener("click", () => {
                player.money -= property.charge;
                property.owner.money += property.charge;
                close_card();
                document.getElementById("dont_buy").style.display = "block";
                document.getElementById("buy_property").style.display = "block";
                document.getElementById("pay_button").remove();
                document.getElementById('character-money').innerHTML = "יתרה בחשבון: " + player.money + "₪";
            });
            document.getElementById("center_buttons_div").appendChild(button_pay);
            document.getElementById("dont_buy").style.display = "none";
            document.getElementById("buy_property").style.display = "none";
            openCard();
            setTimeout(() => {
                document.getElementById("soldImage").style.display = "block";
            }, 1000);
        }
        else {
            document.getElementById("img").setAttribute("src", "IMAGES/" + property.img);
            document.getElementById("headline").innerHTML = property.name;
            document.getElementById("price").innerHTML = "בעלים: את/ה (" + property.owner.figure_name+ ")";
            document.getElementById("description").innerHTML = property.text;
            let button = document.createElement("button");
            button.setAttribute("class", "pay");
            button.setAttribute("id", "button_close_your_div");
            button.innerText = "המשך";
            button.addEventListener("click", () => {
                close_card();
                document.getElementById("dont_buy").style.display = "block";
                document.getElementById("buy_property").style.display = "block";
                document.getElementById("button_close_your_div").remove();
            });
            document.getElementById("center_buttons_div").appendChild(button);
            document.getElementById("dont_buy").style.display = "none";
            document.getElementById("buy_property").style.display = "none";
            document.getElementById('charge').innerHTML = "";
            openCard();
            setTimeout(() => {
                document.getElementById("soldImage").style.display = "block";
            }, 1000);
        }
    }
}

function flex_info_box() {
    $("#currency").stop();
    $("#inner-div-currency").stop();
        $("#currency").animate({ 'height': "710px" }, 1000, "swing");
        $("#inner-div-currency").animate({ 'height': "700px" }, 1000, "swing");
        document.getElementById("propeties-flex").style.display = "flex";
    if (Player.turn) {
        display_propeties(player2, player1);
        }
    else
        display_propeties(player1, player2);
}
function display_propeties(player, player_2) {

    for (var i = 0; i < player.properties_arr.length; i++) {
        let text = clean_text(player.properties_arr[i].img);
        document.getElementById(text).style.filter = "grayscale(0)";

    }
        for (var i = 0; i < player_2.properties_arr.length; i++) {
            let text_2 = clean_text(player_2.properties_arr[i].img);
            document.getElementById(text_2).style.filter = "grayscale(100%) blur(2px)";
        }
}




function flex_close() {
    $("#currency").stop();
    $("#inner-div-currency").stop();
    let images = document.getElementsByClassName("img_flex_box");
    $("#currency").animate({ 'height': "118px" }, 1000, "swing", () => {
        document.getElementById("propeties-flex").style.display = "none";
    });
    $("#inner-div-currency").animate({ 'height': "108px" }, 1000, "swing", () => {
        for (var i = 0; i < images.length; i++) {
            images[i].style.filter = "grayscale(100%) blur(0px)";
        }
    });
    }

function clean_text(str) {
    let text = str;
    text = text.replace("_card", "");
    text = text.replace(".jpg", "");
    text = text.replace(".png", "");
    text = text.replace(".jfif", "");
    return text;

}


function edit_currency_div(player) {
    document.getElementById('current_player').setAttribute("src", "IMAGES/" + player.figure + ".png");
    document.getElementById('character-headline').innerHTML = player.figure_name;
    document.getElementById('character-money').innerHTML = "יתרה בחשבון: " + player.money + "₪";
    document.getElementById('character-propeties').innerHTML = "נכסים: " + player.properties;
    document.getElementById('inner-div-currency').style.backgroundColor = player.color;
}