/**
 * any question, please contact lixiao12
 */
var enumValues = {
    instruments: {
        description: "Changes in [Instruments Access Layer].",
        title: "Instruments"
    },
    orders: {
        description: "Changes in [Orders Access Layer].",
        title: "Orders"
    },
    ucenter: {
        description: "Changes in [Ucenter Access Layer].",
        title: "Ucenter"
    },
    tools: {
        description: "Changes in [Tools Access Layer].",
        title: "Tools"
    },
    settings: {
        description: "Changes in [Settings Access Layer].",
        title: "Settings"
    },
    server: {
        description: "Changes in [Server Access Layer].",
        title: "Server"
    },
    pages: {
        description: "Changes in [Server Access Layer].",
        title: "Pages"
    },
    components: {
        description: "Changes in [Server Access Layer].",
        title: "Components"
    },
    bin: {
        description: "Changes about command in ./bin",
        title: "Bin"
    },
    fis: {
        description: "Changes in the config of fis.",
        title: "Fis"
    },
    compile: {
        description: "Affect compiled code.",
        title: "Compile"
    },
    ians: {
        description: "I am not sure the scope!",
        title: "I am not sure."
    },
    // custom: {
    //     description: "Fill in scope yourself!",
    //     title: "Custom"
    // },
};

module.exports.enumValues = enumValues;

module.exports.maxCharacters = Math.max.apply(Math, Object.keys(enumValues).map(function (value) {
    return value.length
}));
