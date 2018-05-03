# TSConf Talk - Static Analysis and Source Code Manipulation

This was the code for my talk at [tsconf 2018](https://tsconf.io/).

* [slides.pptx](slides.pptx) - My slides.
* `npm run analyze` - Analyze the code. Finds all the classes with extends expressions ([scripts/analyze.ts](scripts/analyze.ts)).
* `npm run refactor` - Changes all the class declarations from `PascalCase` to `snake_case` ([scripts/refactor.ts](scripts/refactor.ts)).

## Directory Structure

* [`~/src`](src) - Contains a sample application.
* [`~/scripts`](scripts) - Contains the scripts that analyze and manipulate the sample application.

## More Information

* [ts-ast-viewer](https://ts-ast-viewer.com/) - View the TypeScript AST including types, symbols, and more.
* [ts-simple-ast](https://github.com/dsherret/ts-simple-ast) - Library for analyzing and manipulating typescript code.

## Additional Use Cases

Other libraries I should have mentioned in the talk:

* [Type Doc](http://typedoc.org/) - TypeScript documentation generator.
* [barrel-maintainer](https://github.com/dsherret/barrel-maintainer) - Automated real-time [barrel](https://angular.io/guide/glossary#barrel) maintenance.
* More?

## Video

[![Static Analysis and Source Code Manipulation in TypeScript](https://img.youtube.com/vi/CTpKZgy0dpo/0.jpg)](https://www.youtube.com/watch?v=CTpKZgy0dpo)