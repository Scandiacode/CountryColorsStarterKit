class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}
let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let romania = new Country("Romania", "Romanian", "Salut Lume!", ["blue", "yellow", "red"])


function SwitchCountry() {
    let input = document.getElementById("CountryList").value;

    let countryNode = document.getElementById("CountryName");
    let OfficialLanguageNode = document.getElementById("OfficialLanguage");
    let HelloWorldNode = document.getElementById("HelloWorld");
    
    let ColorNode1 = document.getElementById("Color1");
    let ColorNode2 = document.getElementById("Color2");
    let ColorNode3 = document.getElementById("Color3");

    if (input === "USA") {
        countryNode.innerText = usa.name;
        OfficialLanguageNode.innerText = usa.lang;
        HelloWorldNode.innerText = usa.greeting;

        ColorNode1.style.backgroundColor = usa.colors[0];
        ColorNode2.style.backgroundColor = usa.colors[1];
        ColorNode3.style.backgroundColor = usa.colors[2];
    }
    else if (input === "Mexico") {
        countryNode.innerText = mexico.name;
        OfficialLanguageNode.innerText = mexico.lang;
        HelloWorldNode.innerText = mexico.greeting;

        ColorNode1.style.backgroundColor = mexico.colors[0];
        ColorNode2.style.backgroundColor = mexico.colors[1];
        ColorNode3.style.backgroundColor = mexico.colors[2];
    }
    else if (input === "Romania") {
        countryNode.innerText = romania.name;
        OfficialLanguageNode.innerText = romania.lang;
        HelloWorldNode.innerText = romania.greeting;

        ColorNode1.style.backgroundColor = romania.colors[0];
        ColorNode2.style.backgroundColor = romania.colors[1];
        ColorNode3.style.backgroundColor = romania.colors[2];
    }

}
