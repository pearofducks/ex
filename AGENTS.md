This file contains templates for bootstrapping 'huck'.

## Rules

- All paths and files are in the `templates` folder
- Always copy the files/folders into the users working directory from `generic`
- Never copy `package.json` files into the users working directory.
    - Use the current directory's name for the `name` field in `package.json`
    - Dependencies should be added via the appropriate `pnpm` command. If the version specified is `*`, add the latest version to the project.
    - `scripts` and extra fields should be copied into the bootstrapped project's `package.json`
    - Extra dependencies found in config and client files should be installed with their latest versions as `devDependencies`
- If the user has asked for a 'podlet', copy the files from the `podlet` folder.
- Set the `packageManager` field in `package.json` to the latest version of `pnpm`
- Do not do extra work, only focus on the tasks listed here
