export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e14b51cf69efaac64a95e0f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-7zy2jsw7',
                  apiId: '0c361d74-c49a-496c-9dc3-35633a5e788d'
                },
                {
                  buildHookId: '5e14b51c60c955c654f34dfd',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-74uanhui',
                  apiId: '3dcf36a7-c3d9-4610-b8a4-4ad21fe93def'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/tommyyau/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-74uanhui.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
