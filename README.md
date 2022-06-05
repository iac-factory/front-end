## Release Tagging ##

**Example**

```bash
git tag --annotate "0.1.117" --message "Basic Form + Proof of Concept Example"
```

### Pushing Tags to VCS ###

```bash
git push --follow-tags
```

## Conventional Commit Messages ##

**Justification**

- Automatic generation of `CHANGELOG.md`s
- Consistent, deterministic semantic version bumps
- Communication of changes to teammates, the public, and other stakeholders
- Triggering build and publish processes
- Facilitates contributions (internal and external) by allowing developers to explore a more structured commit history

### Usage ###

### Additional Note(s) ###

> *Doesn't Standardized-Commits Discourage Rapid Development & AGILE?*

- It discourages moving fast *in a disorganized way*. Semantic commits helps development teams to move fast **and** long term across
  multiple projects with varied contributors.

#### References ####

- [Specification](https://www.conventionalcommits.org/en/v1.0.0/#specification)
- [FAQ](https://www.conventionalcommits.org/en/v1.0.0/#faq)

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the web-application in the development mode.

### `npm test`

Launches the test runner in the interactive watch mode.

See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the web-application for production to the `build` folder.

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
