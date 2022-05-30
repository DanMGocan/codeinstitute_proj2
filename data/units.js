/* As this is more of a proof of concept, we will only
add a handful of units, for testing and prototyping purposes.
Elite variants of Castle units have been excluded */

/* Certain specific cases, like Polish Obuch have been excluded from the
test prototype due to the specificity of their cases */

/* A webscraper to collect data from the aoe2 wiki is being built here: 

*/

/* Template: 

    {
        name: "", 
        introducedIn: "", 
        type: "", 
        civilization: null, 
        ageAvailable: " Age", 
        trainedAt: [""],
        trainingTime: [] ,
        resources: {
            "Food": ,
            "Wood": ,
            "Gold": 
        },
        hitPoints: ,
        attack: ,
        attackType: "",
        attackBonuses: {
            "Infantry": ,
            "Condottiero": ,
            "Eagle Warrior": ,
            "Standard building": 
        },
        rateOfFire: , 
        attackDelay: ,
        frameDelay: ,
        meleeArmour: ,
        pierceArmour: ,
        armourClasses: ,
        speed: ,
        lineOfSight: 
    },

    */

const Units = [

    /********************************************************/
    /******************** Unique units **********************/
    /* Jaguar Warrior */
    {
        name: "Jaguar Warrior", 
        introducedIn: "The Conquerors", 
        type: "Infantry",
        civilization: "Aztecs", 
        ageAvailable: "Castle Age", 
        trainedAt: ["Castle"],
        trainingTime: [10.8],
        resources: {
            "Food": 60,
            "Wood": 0,
            "Gold": 30
        },
        hitPoints: 65,
        attack: 10,
        attackType: "Melee",
        attackBonuses: {
            "Infantry": 10,
            "Condottiero": 10,
            "Eagle Warrior": 2,
            "Standard building": 2
        },
        rateOfFire: 2, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 1,
        pierceArmour: 1,
        armourClasses: ["Infantry", "Unique unit"],
        speed: 1,
        lineOfSight: 3
    },

    /* Longbowman */
    {
        name: "Longbowman", 
        introducedIn: "The Age of Kings", 
        type: "Archer", 
        civilization: "Britons", 
        ageAvailable: "Castle Age", 
        trainedAt: ["Castle"],
        trainingTime: [18],
        resources: {
            "Food": 0,
            "Wood": 35,
            "Gold": 40
        },
        hitPoints: 35,
        attack: 6,
        attackType: "Pierce",
        attackBonuses: {
            "Spearman": 2
        },
        rateOfFire: 2, 
        attackDelay: 0.5,
        frameDelay: 10,
        meleeArmour: 0,
        pierceArmour: 0,
        armourClasses: ["Archer", "Unique unit"],
        speed: 0.96,
        lineOfSight: 7 
    },

    /* Huskarl */
    /* Different resources costs for Huskarls are ignored as we don't take into consideration the Elite version of units */
    {
        name: "Huskarl", 
        introducedIn: "The Age of Kings", 
        type: "Infantry", 
        civilization: "Goths", 
        ageAvailable: "Castle Age", 
        trainedAt: ["Castle", "Barracks"],
        trainingTime: [16, 13],
        resources: {
            "Food": 56,
            "Wood": 0,
            "Gold": 28
        },
        hitPoints: 60,
        attack: 10,
        attackType: "Melee",
        attackBonuses: {
            "Archer": 6,
            "Eagle Warrior": 2,
            "Standard building": 2 
        },
        rateOfFire: 2, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 0,
        pierceArmour: 6,
        armourClasses: ["Infantry", "Unique unit"],
        speed: 1.05,
        lineOfSight: 3 
    },

    /* Tarkan */
    {
        name: "Tarkan", 
        introducedIn: "The Conquerors", 
        type: "Cavalry", 
        civilization: "Huns", 
        ageAvailable: "Castle Age", 
        trainedAt: ["Castle", "Stable"],
        trainingTime: [14, 21],
        resources: {
            "Food": 60,
            "Wood": 0,
            "Gold": 60
        },
        hitPoints: 100,
        attack: 8,
        attackType: "Melee",
        attackBonuses: {
            "Stone defense": 12,
            "Castle": 10,
            "Building": 8,
            "Wall and Gate": 8
        },
        rateOfFire: 2.1, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 1,
        pierceArmour: 3,
        armourClasses: ["Cavalry", "Unique unit"],
        speed: 1.35,
        lineOfSight: 5 
    },

    /* Kipchak */
        {
        name: "Kipchak", 
        introducedIn: "The Last Khans", 
        type: ["Cavalry", "Archer"], 
        civilization: "Cumans", 
        ageAvailable: "Castle Age", 
        trainedAt: ["Castle"],
        trainingTime: [20] ,
        resources: {
            "Food": 0,
            "Wood": 60,
            "Gold": 35
        },
        hitPoints: 40,
        attack: 10, /* For the non-elite version, the first arrow caused 4 damage and the subsequent 2, will cause 3 damage each for a total of 10*/
        attackType: "Pierce",
        attackBonuses: {
            "Spearman": 1
        },
        rateOfFire: 2.2, 
        attackDelay: 0.5,
        frameDelay: 2.1,
        meleeArmour: 0,
        pierceArmour: 0,
        armourClasses: ["Archer", "Cavalry archer", "Cavalry", "Unique unit"],
        speed: 1.4,
        lineOfSight: 6 
    },

    /********************************************************/
    /******************** Barracks **************************/
    /* Man at Arms */
    {
        name: "Man-at-Arms", 
        introducedIn: "The Age of Kings", 
        type: "Infantry", 
        civilization: null, 
        ageAvailable: "Feudal Age", 
        trainedAt: ["Barracks"],
        trainingTime: [21] ,
        resources: {
            "Food": 60,
            "Wood": 0,
            "Gold": 20
        },
        hitPoints: 65,
        attack: 6,
        attackType: "Melee",
        attackBonuses: {
            "Eagle Warrior": 2,
            "Standard building": 2
        },
        rateOfFire: 2, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 0,
        pierceArmour: 1,
        armourClasses: ["Infantry"],
        speed: 0.9,
        lineOfSight: 4 
    },

    /* Long Swordsman */
    {
        name: "Long Swordsman", 
        introducedIn: "The Age of Kings", 
        type: "Infantry", 
        civilization: null, 
        ageAvailable: " Castle Age", 
        trainedAt: ["Barracks"],
        trainingTime: [21] ,
        resources: {
            "Food": 60,
            "Wood": 0,
            "Gold": 20
        },
        hitPoints: 60,
        attack: 9,
        attackType: "Melee",
        attackBonuses: {
            "Eagle Warrior": 6,
            "Standard building": 3 
        },
        rateOfFire: 2, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 1,
        pierceArmour: 1,
        armourClasses: ["Infantry"],
        speed: 0.9,
        lineOfSight: 4 
    },

    /* Two-handed Swordsman */
    {
        name: "Two-Handed Swordsman", 
        introducedIn: "The Age of Kings", 
        type: "Infantry", 
        civilization: null, 
        ageAvailable: "Imperial Age", 
        trainedAt: ["Barracks"],
        trainingTime: [21] ,
        resources: {
            "Food": 60,
            "Wood": 0,
            "Gold": 20
        },
        hitPoints: 60,
        attack: 12,
        attackType: "Melee",
        attackBonuses: {
            "Eagle Warrior": 8,
            "Standard building": 4
        },
        rateOfFire: 2, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 1,
        pierceArmour: 1,
        armourClasses: ["Infantry"],
        speed: 0.9,
        lineOfSight: 5 
    },

    /* Champion */
    {
        name: "Champion", 
        introducedIn: "The Age of Kings", 
        type: "Infantry", 
        civilization: null, 
        ageAvailable: "Imperial Age", 
        trainedAt: ["Barracks"],
        trainingTime: [21] ,
        resources: {
            "Food": 60,
            "Wood": 0,
            "Gold": 20
        },
        hitPoints: 70,
        attack: 13,
        attackType: "Melee",
        attackBonuses: {
            "Eagle Warrior": 8,
            "Standard building": 4 
        },
        rateOfFire: 2, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 1,
        pierceArmour: 1,
        armourClasses: ["Infantry"],
        speed: 0.9,
        lineOfSight: 5 
    },

    /* Spearman */
    {
        name: "Spearman", 
        introducedIn: "The Age of Kings", 
        type: "Infantry", 
        civilization: null, 
        ageAvailable: "Feudal Age", 
        trainedAt: ["Barracks"],
        trainingTime: [22] ,
        resources: {
            "Food": 35,
            "Wood": 25,
            "Gold": 0
        },
        hitPoints: 45,
        attack: 3,
        attackType: "Melee",
        attackBonuses: {
            "Cavalry": 15,
            "War elephant": 15,
            "Camel": 12,
            "Ship": 9,
            "Fishing ship": 9,
            "Mameluke": 4,
            "Eagle Warrior": 1,
            "Standard building": 1
        },
        rateOfFire: 3.0, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 0,
        pierceArmour: 0,
        armourClasses: ["Infantry", "Spearman"],
        speed: 1,
        lineOfSight: 4 
    },

    /* Pikeman */
    {
        name: "Pikeman", 
        introducedIn: "The Age of Kings", 
        type: "Infantry", 
        civilization: null, 
        ageAvailable: "Castle Age", 
        trainedAt: ["Barracks"],
        trainingTime: [22] ,
        resources: {
            "Food": 35,
            "Wood": 25,
            "Gold": 0
        },
        hitPoints: 55,
        attack: 4,
        attackType: "Melee",
        attackBonuses: {
            "Cavalry": 22,
            "War elephant": 25,
            "Camel": 18,
            "Ship": 16,
            "Fishing ship": 16,
            "Mameluke": 11,
            "Eagle Warrior": 1,
            "Standard building": 1
        },
        rateOfFire: 3, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 0,
        pierceArmour: 0,
        armourClasses: ["Infantry", "Spearman"],
        speed: 1,
        lineOfSight: 4 
    },

    /* Halberdier */
    {
        name: "Halberdier", 
        introducedIn: "The Conquerors", 
        type: "Infantry", 
        civilization: null, 
        ageAvailable: "Imperial Age", 
        trainedAt: ["Barracks"],
        trainingTime: [22] ,
        resources: {
            "Food": 35,
            "Wood": 25,
            "Gold": 0
        },
        hitPoints: 60,
        attack: 6,
        attackType: "Melee",
        attackBonuses: {
            "Cavalry": 32,
            "War elephant": 28,
            "Camel": 26,
            "Ship": 17,
            "Fishing ship": 17,
            "Mameluke": 11,
            "Eagle Warrior": 1,
            "Standard building": 1
        },
        rateOfFire: 3, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 0,
        pierceArmour: 0,
        armourClasses: ["Infantry", "Spearman"],
        speed: 1,
        lineOfSight: 4 
    }

    /********************************************************/
    /******************** Stable ****************************/
    /* Light Cavalry */
    {
        name: "Light Cavalry", 
        introducedIn: "The Age of Kings", 
        type: "Cavalry", 
        civilization: null, 
        ageAvailable: "Castle Age", 
        trainedAt: ["Stable"],
        trainingTime: [30],
        resources: {
            "Food": 80,
            "Wood": 0,
            "Gold": 0
        },
        hitPoints: 60,
        attack: 7,
        attackType: "Melee",
        attackBonuses: {
            "Monk": 10
        },
        rateOfFire: 2, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 0,
        pierceArmour: 0,
        armourClasses: ["Cavalry"],
        speed: 1.5,
        lineOfSight: 8 
    },

    /* Hussar */
    {
        name: "Hussar", 
        introducedIn: "The Conquerors", 
        type: "Cavalry", 
        civilization: null, 
        ageAvailable: "Imperial Age", 
        trainedAt: ["Stable"],
        trainingTime: [30],
        resources: {
            "Food": 80,
            "Wood": 0,
            "Gold": 0
        },
        hitPoints: 75,
        attack: 7,
        attackType: "Melee",
        attackBonuses: {
            "Monk": 12
        },
        rateOfFire: 1.9, 
        attackDelay: null,
        frameDelay: null,
        meleeArmour: 0,
        pierceArmour: 2,
        armourClasses: ["Cavalry"],
        speed: 1.5,
        lineOfSight: 10 
    },

    /* Knight */
    {
        name: "Knight", 
        introducedIn: "The Age of Kings", 
        type: "Cavalry", 
        civilization: null, 
        ageAvailable: "Castle Age", 
        trainedAt: ["Stable"],
        trainingTime: [30] ,
        resources: {
            "Food": ,
            "Wood": ,
            "Gold": 
        },
        hitPoints: ,
        attack: ,
        attackType: "",
        attackBonuses: {
            "Infantry": ,
            "Condottiero": ,
            "Eagle Warrior": ,
            "Standard building": 
        },
        rateOfFire: , 
        attackDelay: ,
        frameDelay: ,
        meleeArmour: ,
        pierceArmour: ,
        armourClasses: ,
        speed: ,
        lineOfSight: 
    },

    /* Cavalier */
    {
        name: "", 
        introducedIn: "", 
        type: "", 
        civilization: null, 
        ageAvailable: " Age", 
        trainedAt: [""],
        trainingTime: [] ,
        resources: {
            "Food": ,
            "Wood": ,
            "Gold": 
        },
        hitPoints: ,
        attack: ,
        attackType: "",
        attackBonuses: {
            "Infantry": ,
            "Condottiero": ,
            "Eagle Warrior": ,
            "Standard building": 
        },
        rateOfFire: , 
        attackDelay: ,
        frameDelay: ,
        meleeArmour: ,
        pierceArmour: ,
        armourClasses: ,
        speed: ,
        lineOfSight: 
    },

    /* Paladin */
    {
        name: "", 
        introducedIn: "", 
        type: "", 
        civilization: null, 
        ageAvailable: " Age", 
        trainedAt: [""],
        trainingTime: [] ,
        resources: {
            "Food": ,
            "Wood": ,
            "Gold": 
        },
        hitPoints: ,
        attack: ,
        attackType: "",
        attackBonuses: {
            "Infantry": ,
            "Condottiero": ,
            "Eagle Warrior": ,
            "Standard building": 
        },
        rateOfFire: , 
        attackDelay: ,
        frameDelay: ,
        meleeArmour: ,
        pierceArmour: ,
        armourClasses: ,
        speed: ,
        lineOfSight: 
    },

];

export { Units };