export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5cfe2a58a4fc31e599e72506',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-krqn3zzf',
                  apiId: 'ab559a04-aaf2-4d96-ab07-46e3f6b6d4f0'
                },
                {
                  buildHookId: '5cfe2a588382163841a98b91',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-1eo9dpsi',
                  apiId: '2077d931-39d7-4f1b-8844-b2c7097241fd'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mary-gapate/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-1eo9dpsi.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
