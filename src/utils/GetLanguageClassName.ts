function GetLanguageClassName(language: string): string {
    switch (language) {
        case "TypeScript":
            return "typescript-color";
        case "JavaScript":
            return "javascript-color";
        case "Python":
            return "python-color";
        case "C++":
            return "cpp";
        default:
            return "";
    }
}

export default GetLanguageClassName