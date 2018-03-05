import Ast, {SyntaxKind} from "ts-simple-ast";
import {nameToSnakeCase} from "./utils";

const ast = new Ast({
    tsConfigFilePath: "../src/tsconfig.json"
});

const srcDirectory = ast.getDirectoryOrThrow("../src"); // todo: update to include all root directories

for (const sourceFile of srcDirectory.getDescendantSourceFiles()) {
    // rename the source file if it contains a class by the same name
    const classSameName = sourceFile.getClass(sourceFile.getBaseNameWithoutExtension());
    if (classSameName != null && classSameName.isExported())
        sourceFile.move(nameToSnakeCase(sourceFile.getBaseNameWithoutExtension()) + sourceFile.getExtension());

    // rename all class declaration names to snake case
    for (const classDec of sourceFile.getDescendantsOfKind(SyntaxKind.ClassDeclaration)) {
        const snakeCaseName = nameToSnakeCase(classDec.getName());
        classDec.rename(snakeCaseName);
    }
}

//ast.save();
console.log("done");

