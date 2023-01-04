mkdir vitepress-starter && cd vitepress-starter
sudo apt remove cmdtest
sudo apt install npm
sudo npm install -g yarn
yarn --version
yarn init
npm init
npm add --dev vitepress vue
mkdir docs && echo '# AutoDeployer.com - text to X marketplace ' > docs/index.md


npm i vitepress-plugin-simple-search

npm i vitepress-plugin-search markdown-it -D
