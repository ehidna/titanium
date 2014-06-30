function Controller() {
    function tasKMakas() {
        var userChoice = null;
        "rock" == this.name ? userChoice = "rock" : "paper" == this.name ? userChoice = "paper" : "scissors" == this.name && (userChoice = "scissors");
        var computerChoice = Math.random();
        computerChoice = .34 > computerChoice ? "rock" : .67 >= computerChoice ? "paper" : "scissors";
        var compare = function(choice1, choice2) {
            if (choice1 === choice2) {
                console.log("Your choice = " + choice1);
                console.log("Computer choice = " + choice2);
                return "The result is a tie!";
            }
            if ("rock" === choice1) {
                if ("scissors" === choice2) {
                    console.log("Your choice = " + choice1);
                    console.log("Computer choice = " + choice2);
                    return "rock wins";
                }
                console.log("Your choice = " + choice1);
                console.log("Computer choice = " + choice2);
                return "paper wins";
            }
            if ("paper" === choice1) {
                if ("rock" === choice2) {
                    console.log("Your choice = " + choice1);
                    console.log("Computer choice = " + choice2);
                    return "paper wins";
                }
                console.log("Your choice = " + choice1);
                console.log("Computer choice = " + choice2);
                return "scissors wins";
            }
            if ("rock" === choice2) {
                console.log("Your choice = " + choice1);
                console.log("Computer choice = " + choice2);
                return "rock wins";
            }
            console.log("Your choice = " + choice1);
            console.log("Computer choice = " + choice2);
            return "scissors wins";
        };
        alert("Your choice = " + userChoice + "\n" + "Computer choice = " + computerChoice + "\n" + compare(userChoice, computerChoice));
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.button = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#23c",
        border: "solid",
        backgroundColor: "#ded",
        borderRadius: "15px",
        shadowColor: "#de1",
        title: "rock",
        id: "button",
        name: "rock",
        center: "",
        left: ""
    });
    $.__views.index.add($.__views.button);
    tasKMakas ? $.__views.button.addEventListener("click", tasKMakas) : __defers["$.__views.button!click!tasKMakas"] = true;
    $.__views.button1 = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#23c",
        border: "solid",
        backgroundColor: "#ded",
        borderRadius: "15px",
        shadowColor: "#de1",
        title: "paper",
        id: "button1",
        name: "paper",
        center: ""
    });
    $.__views.index.add($.__views.button1);
    tasKMakas ? $.__views.button1.addEventListener("click", tasKMakas) : __defers["$.__views.button1!click!tasKMakas"] = true;
    $.__views.button2 = Ti.UI.createButton({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#23c",
        border: "solid",
        backgroundColor: "#ded",
        borderRadius: "15px",
        shadowColor: "#de1",
        title: "scissors",
        id: "button2",
        name: "scissors",
        center: "",
        right: ""
    });
    $.__views.index.add($.__views.button2);
    tasKMakas ? $.__views.button2.addEventListener("click", tasKMakas) : __defers["$.__views.button2!click!tasKMakas"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    $.index.open();
    __defers["$.__views.button!click!tasKMakas"] && $.__views.button.addEventListener("click", tasKMakas);
    __defers["$.__views.button1!click!tasKMakas"] && $.__views.button1.addEventListener("click", tasKMakas);
    __defers["$.__views.button2!click!tasKMakas"] && $.__views.button2.addEventListener("click", tasKMakas);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;