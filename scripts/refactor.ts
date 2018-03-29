import Project, {SyntaxKind} from "ts-simple-ast";
import {nameToSnakeCase} from "./utils";

const project = new Project({
    tsConfigFilePath: "tsconfig.json"
});

for (const sourceFile of project.getSourceFiles("src/**/*.ts")) {
    // rename all class declaration names to snake case
    for (const classDec of sourceFile.getDescendantsOfKind(SyntaxKind.ClassDeclaration)) {
        const snakeCaseName = nameToSnakeCase(classDec.getNameOrThrow());
        classDec.rename(snakeCaseName);
    }

    // rename the source file if it contains an exported class with the same name
    const baseNameAsSnakeCase = nameToSnakeCase(sourceFile.getBaseNameWithoutExtension());
    const classSameName = sourceFile.getClass(baseNameAsSnakeCase);
    if (classSameName !== undefined && classSameName.isExported())
        sourceFile.move(baseNameAsSnakeCase + sourceFile.getExtension());
}

project.save();
