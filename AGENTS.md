This file contains templates for bootstrapping 'huck'.

## Rules

- All paths and files are in the `templates` folder
- Never copy `package.json` files into the users working directory.
    - Dependencies should be added via the appropriate `pnpm` command. If the version specified is `*`, add the latest version to the project.
    - `scripts` should be copied into the bootstrapped project's `package.json`
    - Extra dependencies found in config and client files should be installed with their latest versions
- Always copy the files/foldrs into the users working directory from `generic`
- If the user has asked for a 'podlet', copy the files from the `podlet` folder.
- Do not do extra work, only focus on the tasks listed here
