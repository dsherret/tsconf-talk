import Project, {SyntaxKind} from "ts-simple-ast";

// setup
const project = new Project({
    tsConfigFilePath: "tsconfig.json",
});

// get directory to analyze
const srcDirectory = project.getDirectoryOrThrow("src");

// find and log
for (const sourceFile of srcDirectory.getDescendantSourceFiles()) {
    for (const classDec of sourceFile.getDescendantsOfKind(SyntaxKind.ClassDeclaration)) {
        if (classDec.getExtends() !== undefined)
            console.log(`[${sourceFile.getFilePath()}]: ${classDec.getName()}`);
    }
}
