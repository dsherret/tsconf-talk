import Project, {SyntaxKind} from "ts-simple-ast";

// setup
const project = new Project({
    tsConfigFilePath: "tsconfig.json",
});

// find and log
for (const sourceFile of project.getSourceFiles("src/**/*.ts")) {
    for (const classDec of sourceFile.getDescendantsOfKind(SyntaxKind.ClassDeclaration)) {
        if (classDec.getExtends() !== undefined)
            console.log(`[${sourceFile.getFilePath()}]: ${classDec.getName()}`);
    }
}
