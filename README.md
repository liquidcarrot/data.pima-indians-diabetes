# Data Template

This repository is a template repository for creating other packages that consist of datasets published as `@liquid-carrot/data.[DATASET_NAME]`.

**Supports:**
* [x] `.json`
* [x] `.csv`
* [ ] `.xml`

## Introduction

When using this library as your template, the following steps are recommended:

1) Import/upload your original dataset into the `src/` directory as `raw.[EXTENSION]` (e.g. `raw.csv`, `raw.json`, `raw.xml`, etc.)

2) Transform or copy your raw dataset into a `index.json` file within the `src/` directory - _there should be a `build.js` file in the directory's root that you can use to transform you `raw.[EXTENSION]` dataset into `src/index.json`. To edit `build.js` and see live changes, run `npm start` before beginning to edit your file._

3) Add your changes to your git repository with `git add . && git commit -m "[COMMIT_MESSAGE]"` and push them to `origin/master`.

4) Publish the dataset to NPM with `npm publish`


If you've succeeded in creating a good "data" repository, your file structure should look similar to the following:

```
.
|__ src/
|  |__ raw.csv
|  |__ index.csv
|  |__ index.json
|  |__ index.xml
|__ ,gitignore
|__ LICENSE
|__ README.md
|__ build.js
|__ package-lock.json
|__ package.json
```