import Project, {SyntaxKind} from "ts-simple-ast";
import {nameToSnakeCase} from "./utils";

const project = new Project({
    tsConfigFilePath: "tsconfig.json"
});

for (const sourceFile of project.getSourceFiles("src/**/*.ts")) {
    // rename the source file if it contains an exported class with the same name
    const classSameName = sourceFile.getClass(sourceFile.getBaseNameWithoutExtension());
    if (classSameName !== undefined && classSameName.isExported())
        sourceFile.move(nameToSnakeCase(sourceFile.getBaseNameWithoutExtension()) + sourceFile.getExtension());

    // rename all class declaration names to snake case
    for (const classDec of sourceFile.getDescendantsOfKind(SyntaxKind.ClassDeclaration)) {
        const snakeCaseName = nameToSnakeCase(classDec.getName());
        classDec.rename(snakeCaseName);
    }
}

project.save();
console.log("done");

