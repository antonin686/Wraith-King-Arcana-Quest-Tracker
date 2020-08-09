var updated = localStorage.getItem("updated");

if (localStorage.getItem("heroDisplayMode") == null) {
  localStorage.setItem("heroDisplayMode", "all");
} else if (localStorage.getItem("heroDisplayMode") == "less") {
  document.querySelector('#heroDisplaySwitch').checked = true;
}

if (updated == null) {
  var heroes = [
    //Strength Heroes
    {
      attribute: "str",
      name: "Abadon",
      short: "Aba",
      status: "0",
    },

    {
      attribute: "str",
      name: "Alchemist",
      short: "Alche",
      status: "0",
    },

    {
      attribute: "str",
      name: "Axe",
      short: "Axe",
      status: "0",
    },

    {
      attribute: "str",
      name: "Beast Master",
      short: "Beast",
      status: "0",
    },

    {
      attribute: "str",
      name: "Brew Master",
      short: "Brew",
      status: "0",
    },

    {
      attribute: "str",
      name: "Bristleback",
      short: "BB",
      status: "0",
    },

    {
      attribute: "str",
      name: "Centaur Warrunner",
      short: "Centaur",
      status: "0",
    },

    {
      attribute: "str",
      name: "Chaos Knight",
      short: "CK",
      status: "0",
    },

    {
      attribute: "str",
      name: "Clockwerk",
      short: "Clock",
      status: "0",
    },

    {
      attribute: "str",
      name: "Doom",
      short: "Doom",
      status: "0",
    },

    {
      attribute: "str",
      name: "Dragon Knight",
      short: "DK",
      status: "0",
    },

    {
      attribute: "str",
      name: "Earth Sprite",
      short: "Earth Sprite",
      status: "0",
    },

    {
      attribute: "str",
      name: "Earthshaker",
      short: "Earthshaker",
      status: "0",
    },

    {
      attribute: "str",
      name: "Elder Titan",
      short: "ET",
      status: "0",
    },

    {
      attribute: "str",
      name: "Husker",
      short: "Husker",
      status: "0",
    },

    {
      attribute: "str",
      name: "IO",
      short: "IO",
      status: "0",
    },

    {
      attribute: "str",
      name: "Kunka",
      short: "Kunka",
      status: "0",
    },

    {
      attribute: "str",
      name: "Legion Commander",
      short: "LC",
      status: "0",
    },

    {
      attribute: "str",
      name: "Lifestealer",
      short: "LS",
      status: "0",
    },

    {
      attribute: "str",
      name: "Lycan",
      short: "Lycan",
      status: "0",
    },

    {
      attribute: "str",
      name: "Magnus",
      short: "Magnus",
      status: "0",
    },

    {
      attribute: "str",
      name: "Mars",
      short: "Mars",
      status: "0",
    },

    {
      attribute: "str",
      name: "Night Stalker",
      short: "NS",
      status: "0",
    },

    {
      attribute: "str",
      name: "Omniknight",
      short: "Omni",
      status: "0",
    },

    {
      attribute: "str",
      name: "Pheonix",
      short: "Pheonix",
      status: "0",
    },

    {
      attribute: "str",
      name: "Pudge",
      short: "Pudge",
      status: "0",
    },

    {
      attribute: "str",
      name: "Sand King",
      short: "SK",
      status: "0",
    },

    {
      attribute: "str",
      name: "Slardar",
      short: "Slardar",
      status: "0",
    },

    {
      attribute: "str",
      name: "Snapfire",
      short: "snap",
      status: "0",
    },

    {
      attribute: "str",
      name: "Sprite Breaker",
      short: "Bara",
      status: "0",
    },

    {
      attribute: "str",
      name: "Sven",
      short: "Sven",
      status: "0",
    },

    {
      attribute: "str",
      name: "Tidehunter",
      short: "Tide",
      status: "0",
    },

    {
      attribute: "str",
      name: "Timbersaw",
      short: "Timber",
      status: "0",
    },

    {
      attribute: "str",
      name: "Tiny",
      short: "Tiny",
      status: "0",
    },

    {
      attribute: "str",
      name: "Treant Protector",
      short: "Omni",
      status: "0",
    },

    {
      attribute: "str",
      name: "Tusk",
      short: "Tusk",
      status: "0",
    },

    {
      attribute: "str",
      name: "Underlord",
      short: "Underlord",
      status: "0",
    },

    {
      attribute: "str",
      name: "Undying",
      short: "Undying",
      status: "0",
    },

    //Agility Heroes

    {
      attribute: "agi",
      name: "Anti Mage",
      short: "AM",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Arc Warden",
      short: "arc",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Bloodseeker",
      short: "BS",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Bounty Hunter",
      short: "BH",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Broodmother",
      short: "Brood",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Clinks",
      short: "Clinks",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Drow Ranger",
      short: "Drow",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Ember Sprit",
      short: "Ember",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Faceless Void",
      short: "FV",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Gyrocopter",
      short: "Gyro",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Juggernaut",
      short: "Jug",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Lone Druid",
      short: "LD",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Luna",
      short: "Luna",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Medusa",
      short: "Medu",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Meepo",
      short: "Meepo",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Mirana",
      short: "Mirana",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Monkey King",
      short: "MK",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Morphling",
      short: "Morph",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Naga Siren",
      short: "Naga",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Nyx Assassin",
      short: "Nyx",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Pangolier",
      short: "Pango",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Phantom Assasin",
      short: "PA",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Phantom Lancer",
      short: "PL",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Razor",
      short: "Razor",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Riki",
      short: "Riki",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Shadow Fiend",
      short: "SF",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Slark",
      short: "Slark",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Sniper",
      short: "Sniper",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Spectre",
      short: "Spec",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Templar Assassin",
      short: "TA",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Terroblade",
      short: "TB",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Troll Warlord",
      short: "Troll",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Ursa",
      short: "Ursa",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Vengeful Sprite",
      short: "VS",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Venomancer",
      short: "Veno",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Viper",
      short: "Viper",
      status: "0",
    },

    {
      attribute: "agi",
      name: "Weaver",
      short: "Weaver",
      status: "0",
    },

    //Intiligence Heroes

    {
      attribute: "int",
      name: "Antient Apparition",
      short: "AA",
      status: "0",
    },

    {
      attribute: "int",
      name: "Bane",
      short: "Bane",
      status: "0",
    },

    {
      attribute: "int",
      name: "Batrider",
      short: "Bat",
      status: "0",
    },

    {
      attribute: "int",
      name: "Chen",
      short: "Chen",
      status: "0",
    },

    {
      attribute: "int",
      name: "Crystal Maiden",
      short: "CM",
      status: "0",
    },

    {
      attribute: "int",
      name: "Dark Seer",
      short: "Seer",
      status: "0",
    },

    {
      attribute: "int",
      name: "Dark Willow",
      short: "Willow",
      status: "0",
    },

    {
      attribute: "int",
      name: "Dazzle",
      short: "Dazzle",
      status: "0",
    },

    {
      attribute: "int",
      name: "Death Prophet",
      short: "DP",
      status: "0",
    },

    {
      attribute: "int",
      name: "Disruptor",
      short: "Disrup",
      status: "0",
    },

    {
      attribute: "int",
      name: "Enchantress",
      short: "Enchant",
      status: "0",
    },

    {
      attribute: "int",
      name: "Enigma",
      short: "Enigma",
      status: "0",
    },

    {
      attribute: "int",
      name: "Grimstroke",
      short: "Grim",
      status: "0",
    },

    {
      attribute: "int",
      name: "Invoker",
      short: "Voker",
      status: "0",
    },

    {
      attribute: "int",
      name: "Jakiro",
      short: "Jakiro",
      status: "0",
    },

    {
      attribute: "int",
      name: "Keeper of the Light",
      short: "KOTL",
      status: "0",
    },

    {
      attribute: "int",
      name: "Leshrac",
      short: "Lesh",
      status: "0",
    },

    {
      attribute: "int",
      name: "Lich",
      short: "Lich",
      status: "0",
    },

    {
      attribute: "int",
      name: "Lina",
      short: "Lina",
      status: "0",
    },

    {
      attribute: "int",
      name: "Lion",
      short: "Lion",
      status: "0",
    },

    {
      attribute: "int",
      name: "Nature's Prophet",
      short: "NP",
      status: "0",
    },

    {
      attribute: "int",
      name: "Necrophos",
      short: "Necro",
      status: "0",
    },

    {
      attribute: "int",
      name: "Ogre Magi",
      short: "Ogre",
      status: "0",
    },

    {
      attribute: "int",
      name: "Oracle",
      short: "Oracle",
      status: "0",
    },

    {
      attribute: "int",
      name: "Outworld Devourer",
      short: "OD",
      status: "0",
    },

    {
      attribute: "int",
      name: "Puck",
      short: "Puck",
      status: "0",
    },

    {
      attribute: "int",
      name: "Pugna",
      short: "Pugna",
      status: "0",
    },

    {
      attribute: "int",
      name: "Queen of Pain",
      short: "QOP",
      status: "0",
    },

    {
      attribute: "int",
      name: "Rubick",
      short: "Rubick",
      status: "0",
    },

    {
      attribute: "int",
      name: "Shadow Demon",
      short: "SD",
      status: "0",
    },

    {
      attribute: "int",
      name: "Shadow Shaman",
      short: "Shaman",
      status: "0",
    },

    {
      attribute: "int",
      name: "Silencer",
      short: "Silencer",
      status: "0",
    },

    {
      attribute: "int",
      name: "Skywrath Mage",
      short: "Sky",
      status: "0",
    },

    {
      attribute: "int",
      name: "Strom Sprite",
      short: "Strom",
      status: "0",
    },

    {
      attribute: "int",
      name: "Techies",
      short: "Techies",
      status: "0",
    },

    {
      attribute: "int",
      name: "Tinker",
      short: "Tinker",
      status: "0",
    },

    {
      attribute: "int",
      name: "Visage",
      short: "Visage",
      status: "0",
    },

    {
      attribute: "int",
      name: "Void Spirit",
      short: "Void Spirit",
      status: "0",
    },

    {
      attribute: "int",
      name: "Warlock",
      short: "Warlock",
      status: "0",
    },

    {
      attribute: "int",
      name: "Windranger",
      short: "WR",
      status: "0",
    },

    {
      attribute: "int",
      name: "Winter Wyvern",
      short: "WW",
      status: "0",
    },

    {
      attribute: "int",
      name: "Witch Doctor",
      short: "WD",
      status: "0",
    },

    {
      attribute: "int",
      name: "Zeus",
      short: "Zeus",
      status: "0",
    },

  ];

  localStorage.setItem("heroes", JSON.stringify(heroes));
}

var storedHeroes = JSON.parse(localStorage.getItem("heroes"));

displayHeroes();

function displayHeroes() {

  var htmlStr = "<h3 class='mb-3'><u>Strength</u></h3>"; 
  var htmlAgi = "<h3 class='mb-3'><u>Agility</u></h3>";
  var htmlInt = "<h3 class='mb-3'><u>Inteligence</u></h3>";
  var heroCount = 0;
  var checked = "";
  
  storedHeroes.forEach((e) => {

    if (e.status == 1) {
      heroCount++;
    }

    if (localStorage.getItem("heroDisplayMode") != 'all' && e.status == 1) {
      return;
    }

    checked = (e.status == "1") ? "checked" : "";

    var html = `
        <input class="hero-checkboxes" type="checkbox" name="checkbox[]" value="${e.name}" ${checked}>
        <label> ${e.name} </label><br>`;

    if (e.attribute == "str") {
      htmlStr += html;
    } else if (e.attribute == "agi") {
      htmlAgi += html;
    } else {
      htmlInt += html;
    }
  });

  document.getElementById("select-heroes-str").innerHTML = htmlStr;

  document.getElementById("select-heroes-agi").innerHTML = htmlAgi;

  document.getElementById("select-heroes-int").innerHTML = htmlInt;

  console.log(heroCount)

  document.querySelector('#completion').innerHTML = `(${heroCount}/118)`;
}

//console.log(storedHeroes)

function updateNames() {
  var element = document.getElementById("btn-done");
  element.classList.add("btn-active");

  var checkboxes = document.querySelectorAll(".hero-checkboxes");

  localStorage.setItem("updated", true);

  checkboxes.forEach((e) => {
    if (e.checked) {
      updateHeroes(e.value, 1);
    } else {
      updateHeroes(e.value, 0);
    }
  });

  //console.log(storedHeroes);

  localStorage.setItem("heroes", JSON.stringify(storedHeroes));

  setTimeout(() => {
    element.classList.add("btn-custom-success");
  }, 1500);

  setTimeout(() => {
    element.classList.remove("btn-custom-success");
    element.classList.remove("btn-active");
    document.getElementById("btn-getBoneList").innerHTML = "Get Bone List";
    displayHeroes();
  }, 3000);
}

function getBoneList() {

  var element = document.getElementById("btn-getBoneList");
  element.classList.add("btn-active");

  if (element.innerHTML == "Get Bone List") {

    var list = [];
    var index = 0;

    while (index < storedHeroes.length && list.length < 9) {
      if (storedHeroes[index].status == 0) {
        list.push(storedHeroes[index].short)
      }
      index++;
    }

    setTimeout(() => {
      element.classList.remove("btn-active");
      document.getElementById("input-boneList").value = list.join(' | ');
      element.innerHTML = "Copy";
    }, 1500);

  } else if (element.innerHTML == "Copy") {

    var copyText = document.getElementById("input-boneList");
    copyText.select();
    document.execCommand("copy");
    window.getSelection().removeAllRanges()

    setTimeout(() => {
      element.classList.remove("btn-active");
    }, 1500);
  }
}

function updateHeroes(name, status) {
  // console.log(name);
  storedHeroes.forEach((e) => {
    if (e.name == name) {
      e.status = status;
      return true;
    }
  });
}

function heroDisplaySwitch() {
  if (document.querySelector('#heroDisplaySwitch').checked) {
    localStorage.setItem("heroDisplayMode", 'less')
  } else {
    localStorage.setItem("heroDisplayMode", "all")
  }
  displayHeroes();
}