# AI Flashcard

the ai flashcard is a local flashcard generator powered by OpenAI gpt-3.5-turbo. Upon generate a topic, it will create a flashcard set at your local storage, allowing you to loop through and carry out revision

## motivation

-   Short ans: it is a homework.
-   Long ans: this is the first project I start working with openai. as more and more requirement requires partially integration with gpt-type AI, this will be a good practice for me to carry out prompt engineering and AI(API) related project

# Objective

follow the demo and create a ai interfacing frontend application for generate flashcards for revision

-   CRUD of flashcard in local storage
-   homepage only display few of the cardsset
-   able to delete cardset
-   able to flip flashcard
-   able to generate flashcard based on prompt from openai api

# demo

[https://vocal-blancmange-1a64dd.netlify.app/](https://vocal-blancmange-1a64dd.netlify.app/)

# project features

-   uses plenty of hooks
    -   I have abstract many logic into reuseable react hooks
-   tailwind CSS + MUI
-   no backend
-   only need API key for self-hosted

---

## no use stuff?

<details>

<summary> React + TypeScript + Vite </summary>

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

-   Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

-   Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
-   Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
-   Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

<details>
