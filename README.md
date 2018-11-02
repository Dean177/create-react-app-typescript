# Deprecated!

Since [Typescript](https://github.com/facebook/create-react-app/pull/4837) and [SASS](https://github.com/facebook/create-react-app/pull/4195) support is now part of mainline create-react-app, there is no reason for this package to exist anymore!

Existing users should upgrade by 
```
yarn remove @dean177/react-scripts-ts
yarn add react-scripts
```

and adjusting their `package.json` to point their `scripts` at `react-scripts` instead of `react-scripts-ts`.
