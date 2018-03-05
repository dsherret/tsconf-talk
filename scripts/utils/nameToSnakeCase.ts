/**
 * Takes a name and converts it to snake case (ex. SomeNameOfSomething -> some_name_of_something).
 * @param name - Name to convert to snake case.
 */
export function nameToSnakeCase(name: string) {
    let snakeCaseName = "";
    let wasLastUnderscore = false;

    for (const char of name) {
        const isSeparatorChar = /[A-Z]/.test(char);
        if (snakeCaseName.length > 0 && isSeparatorChar && !wasLastUnderscore)
            snakeCaseName += "_";

        snakeCaseName += char.toLowerCase();
        wasLastUnderscore = isSeparatorChar || char === "_";
    }

    return snakeCaseName;
}
