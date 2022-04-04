class chats {
    static id = 0;
    constructor() {
        this.allchats = [];
    }
    append(elem)
    {
        this.allchats.push(elem);
    }
    get_chats()
    {
        return this.allchats;
    }
    find_element(element)
    {
        for (var elem in this.allchats)
        {
            if (elem.get_id() == element)
            {
                return elem;
            }
        }
        return null;
    }

}

class chat {
    constructor(id, element) {
        this.id = id;
        this.element = element;
        this.messages = [];
    }
    get_element()
    {
        return this.element;
    }
    get_id()
    {
        return this.id;
    }
    get_msgs()
    {
        return this.messages;
    }
    add_msg(message)
    {
        this.messages.push(message);
    }
}

var everychat = new chats();

function disp(everychat)
{
    document.getElementById("nbchats").innerHTML = "nb of chats: " + everychat.get_chats().length;
}
function add_chat()
{

    var tag = document.createElement("p");
    tag.classList.add('chats');
    tag.setAttribute("id", chats.id);
    document.getElementById("nbchats").innerHTML = "nb of chats: test";
    tag.setAttribute("onclick","what_clicked(this.id);");

    tag.dataset.id = chats.id;
    var text = document.createTextNode(chats.id);
    tag.appendChild(text);
    var element = document.getElementById("chats");
    element.appendChild(tag);

    var new_chat = new chat(chats.id, tag);
    chats.id += 1;
    everychat.append(new_chat);
    disp(everychat);
}
function what_clicked(id)
{
    document.getElementById("clicked").innerHTML = "error";
    document.getElementById("clicked").innerHTML = "last clicked: " + id;
    var elem = everychat.find_element(id);
}

window.onload = function l()
{
    var tag = document.createElement("p");
    var text = document.createTextNode("did this work?");
    tag.appendChild(text);
    var element = document.getElementById("load");
    element.appendChild(tag);
    disp(everychat);
}