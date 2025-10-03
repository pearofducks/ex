This file contains templates for bootstrapping 'huck'.

## Rules

- All paths and files are in the `templates` folder
- Never copy `package.json` files into the users working directory. Instead, those dependencies should be added via the appropriate `pnpm` command. If the version specified is `*`, add the latest version to the project.
- Always copy the files/foldrs into the users working directory from `generic`
- If the user has asked for a 'podlet', copy the files from the `podlet` folder.
