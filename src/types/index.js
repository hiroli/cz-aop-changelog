var enumValues = {
    feature: {
        // 新功能
        description: "A new feature.",
        title: "Feature"
    },
    fixBug: {
        // 修复bug
        description: "Fix the bug.",
        title: "fixBug"
    },
    codeStyle: {
        // 代码风格
        description: "Make the code more normative.",
        title: "CodeStyle"
    },
    docs: {
        // 文档
        description: "Update the documentations",
        title: "Documentations"
    },
    test: {
        // 单测
        description: "Add test or make a test.",
        title: "Test"
    },
    revert: {
        // 代码回滚
        description: "Revert the previous code.",
        title: "Revert"
    },
    refactor: {
        // 重构（即不是新增功能，也不是修改bug的代码变动）
        description: "Refactor the problematic code.",
        title: "Refactor"
    },
    chore: {
        // 辅助工具变动
        description: "Changes in development tools",
        title: "Chore"
    },
    compile: {
        // 编译过程修改
        description: "Changes in compile process.",
        title: "Compile"
    },
    perf: {
        // 性能提升
        description: "Improves the performances of code.",
        title: "Performances"
    },
    merge: {
        // 代码合并
        description: "Merge code from other branch.",
        title: "Merge"
    },
    // mocks: {
    //     description: "Change the mocked data.",
    //     title: "Mocks"
    // }
}

module.exports.enumValues = enumValues;

module.exports.maxCharacters = Math.max.apply(Math, Object.keys(enumValues).map(function (vaulue) {
    return vaulue.length
}));
