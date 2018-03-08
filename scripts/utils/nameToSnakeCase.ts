/**
 * Takes a name and converts it to snake case (ex. SomeNameOfSomething -> some_name_of_something).
 * @param name - Name to convert to snake case.
 */
export function nameToSnakeCase(name: string) {
    let snakeCaseName = "";
    let canNextBeUnderscore = false;

    for (const char of name) {
        const isSeparatorChar = /[A-Z]/.test(char);
        if (isSeparatorChar && canNextBeUnderscore)
            snakeCaseName += "_";

        snakeCaseName += char.toLowerCase();
        canNextBeUnderscore = !isSeparatorChar && char !== "_";
    }

    return snakeCaseName;
}

