class Qcm
{
    constructor() {
        this._all = [];
    }

    get all() {
        return this._all;
    }

    add(qcm)
    {
        this._all.push(qcm);
    }
}

class data_qcm
{
    static id = 0;
    constructor(title, desc, answers, correct) {
        this._title = title;
        this._desc = desc;
        this._answers = answers;
        this._correct = correct;
        this._q_id = data_qcm.id;
        data_qcm.id += 1;
    }


    get q_id() {
        return this._q_id;
    }

    get title() {
        return this._title;
    }

    get desc() {
        return this._desc;
    }

    get answers() {
        return this._answers;
    }

    get correct() {
        return this._correct;
    }

    get id() {
        return this._id;
    }
}

var all_qcms = new Qcm(); //on initiialise la variable globale "all_qcms" contenant tout les qcms
var active = 0; //marque du qcm actif

function verify()
{
    var user_input = 0;
    if (document.querySelector("#butt1:checked") !== null)
        user_input += 1;
    if (document.querySelector("#butt2:checked") !== null)
        user_input += 2;
    if (document.querySelector("#butt3:checked") !== null)
        user_input += 4;
    var element = document.getElementById("reponse");
    element.innerHTML = "";
    var tag = document.createElement("p");
    if (user_input != all_qcms.all[active].correct) {
        var text = document.createTextNode("aye, c faux, essaie encore");
    }
    else {
        var text = document.createTextNode("c'est gagné!");
        var button = document.createElement("button");
        button.innerHTML = "Next";
        button.setAttribute("onclick", "next_page();");
        element.appendChild(button);
    }
    tag.appendChild(text);
    element.appendChild(tag);
}

function next_page()
{
    active += 1;
    if (active >= all_qcms)
    {
        //qcm se termine
        var elem = document.querySelector("main");
        elem.innerHTML = "";
        elem.innerHTML = "le qcm est termine";
        return;
    }
    var element = document.getElementById("reponse");
    element.innerHTML = "";
    gen_page();
}

function reset()
{
    active = 0;
    gen_page();
}

function gen_page()
{
    //on recupere les elements a modifier
    var qcm_content = all_qcms.all[active];
    var title = document.getElementById("question_title");
    var desc = document.getElementById("question");
    var q1 = document.getElementById("buttx");
    var q2 = document.getElementById("butty");
    var q3 = document.getElementById("buttz");
    //on leurs attribue leurs valeur a l'indice "active"
    title.innerHTML ="Q."+ qcm_content.q_id + ": " + qcm_content.title;
    desc.innerHTML = qcm_content.desc;
    var reps = qcm_content.answers;
    q1.innerHTML = reps[0];
    q2.innerHTML = reps[1];
    q3.innerHTML = reps[2];
    //document.getElementById("tests").innerHTML = "works";
}

window.onload = function ()
{

    //on initialise les qcms ici, on pourrait parse un fichier ou utiliser une bdd mais c hors du contexte de l'exercice
    var qcm1 = new data_qcm("jaune", "Qu'est ce qui est jaune et qui attend?", ["jean", "olivier", "jonhattan"], 4);
    var qcm2 = new data_qcm("Qui suis-je", "Je suis ni grand ni petit, qui suis-je?", ["jean jaures", "kirikou", "42"], 2);
    var qcm3 = new data_qcm("le plus beau", "Qui est le plus beau?", ["le mec qui a cree ce qcm", "maximilien", "les blonds"], 7);
    all_qcms.add(qcm1);
    all_qcms.add(qcm2);
    all_qcms.add(qcm3);
    //on genere la premiere feuille de qcm
    gen_page();
}