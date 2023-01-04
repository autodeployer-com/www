#!/usr/bin/env bash
# chmod +x push.sh
#GITHUB_TOKEN
[ -z $GITHUB_TOKEN ] && GITHUB_TOKEN=$(cat .github.token)
[ -z $GITHUB_PROJECT ] && GITHUB_PROJECT=$(cat .github.project)
#flatedit
#cp -fv README.md md/index.md
yarn build || exit
cp -f -r md/.vitepress/dist/* .
cp -f -r md/img/* ./img
cp -f -r md/data/* ./data
#rm README.md

MESSAGE=$1
MESSAGE="update docs"
[ -z "$MESSAGE" ] && read -p "Enter message for commit: " MESSAGE
git status # To check the status of working tree
git add . # To add the changes in local repository

if [ -n "$(git status - porcelain)" ];
then
 echo "IT IS CLEAN"
else
 git commit -m "${MESSAGE}" # To commit the changes and prepare it for remote repository
 git status # To check the status of working tree
fi

#git add . # To add the changes in local repository
git commit -a -m "${MESSAGE}" # To commit the changes and prepare it for remote repository
git remote add origin "${GITHUB_PROJECT}"
echo "Pushing data to remote server: ${GITHUB_PROJECT}"
git push -u origin master # To push the changes in remote repository

