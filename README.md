# some-publish-code

## To-dos
This example still need more exploration
- how to bundle the package (rollupjs can be included to this example)
- how to update the changelog that is generated in the md file and push those changes to the github release
- how to set the user email for the git configuration when release happens [here](https://github.com/chan-awesome-org/some-publish-code/blob/main/.github/workflows/bumpversion.yml#L17)

## Instructions

Access is base off the generated token from github
  - https://github.com/settings/tokens/new
  - Set expiration date to “No Expiration”
  - Select `write:packages` and `delete:packages`
  - Copy your github access token (save it because once you navigate away from the page it will not be shown again)


Run this command in your terminal (preferred)
  - `echo //npm.pkg.github.com/:_authToken=$GITHUB_ACCESS_TOKEN >> ~/.npmrc`
  - `nano ~/.npmrc`
  - Update the authToken with the once you just created
    ```
    //npm.pkg.github.com/:_authToken={token} //example
    //npm.pkg.github.com/:_authToken=ghp_…
    ```
  - The above setting is to let npm know that if it need to access the registry for `npm.pkg.github.com` they can use the token you have generated for it to communicate with it


This is another way to set the scope with your access token (optional)
```
npm login --scope=@OWNER --registry=https://npm.pkg.github.com
> Username: github USERNAME
> Password: github access TOKEN
> Email: PUBLIC-EMAIL-ADDRESS
```
  
In your repo
- Add a file call `.npmrc`
- The purpose of this file is to let npm to know where your project is hosted base on the scope
- `@chan-awesome-org:registry=https://npm.pkg.github.com`


Once everything is done you can just download the package from the github registry

