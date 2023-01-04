import {defineConfig} from 'vitepress'

export default defineConfig({
    title: 'AutoDeployer.com',
    description: 'AutoDeployer.com - text to X marketplace',
    themeConfig: {
        // Assumes GitHub. Can also be a full GitLab url.
        repo: 'autodeployer/www',
        // Customising the header label
        // Defaults to "GitHub"/"GitLab"/"Bitbucket" depending on `themeConfig.repo`
        repoLabel: 'Contribute!',
        // if your docs are not at the root of the repo:
        docsDir: './md/',
        // if your docs are in a specific branch (defaults to 'master'):
        docsBranch: 'main',
        // defaults to false, set to true to enable
        editLinks: true,
        // custom text for edit link. Defaults to "Edit this page"
        editLinkText: 'Help us improve this page!',
       // lastUpdated: 'Date: ',
        smoothScroll: true,
        displayAllHeaders: true, // Default: false
        activeHeaderLinks: true,
        lang: 'en-US',
        title: 'DIALOGWARE',
        description: 'Text to Software solution to build a web application in minutes',
        logo: 'https://img.autodeployer.com/autodeployer-2lines.png',
        siteTitle: 'AUTODEPLOYER', // When adding a logo, it gets displayed along with the site title. If your logo is all you need and if you would like to hide the site title text, set false to the siteTitle option.
        nav: [
            //{text: 'Home', link: '/'},
            //{text: 'Start', link: '/app/start'},
            {text: 'Early Access', link: '/app/access'},
            {text: 'Desktop Application', link: '/app/desktop'},
            {text: 'Status', link: '/about/status'},
            //{text: 'Our Story', link: '/about/story'},
            //{text: 'Team & Partners', link: '/about/team'},
            //{text: 'Contact', link: 'https://www.linkedin.com/in/tom-sapletta-com/'},
            //{text: 'Start', link: '/user/registration'},
            {text: 'Contact', link: '/user/contact'},
            {
                text: 'Documentation',
                items: [
                    //{text: 'Video', link: '/about/video'},
                    {text: 'text2software.com', link: 'https://www.text2software.com/'},
                    {text: 'docs.autodeployer.com', link: 'https://docs.autodeployer.com/'},
                    {text: 'Roadmap on github', link: 'https://github.com/orgs/autodeployer/projects/2/views/1'},
                    {text: 'Tasks on github', link: 'https://github.com/orgs/autodeployer/projects/1/views/1'}
                ]
            },

        ],
        markdown: {
            theme: 'material-palenight',
            lineNumbers: true
        },
        editLink: {
            pattern: 'https://github.com/autodeployer/www/md/:path',
            text: 'Edit this page on GitHub'
        },
        footer: {
            copyright: '© 2023  <a href="https://softreck.com" >Softreck</a>. All rights reserved.'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/autodeployer/www' },
            { icon: 'linkedin', link: 'https://www.linkedin.com/showcase/autodeployer/' },
        ]
    }
})
