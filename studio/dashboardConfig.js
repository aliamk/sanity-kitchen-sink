export default {
  widgets: [
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
                  buildHookId: '6191159bec13b71c14316a89',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-rcj2s6dd',
                  apiId: '03194b22-3179-423a-b465-8f427262befd'
                },
                {
                  buildHookId: '6191159b944d5f21d3c986e1',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kic4sjes',
                  apiId: '746bcf7f-1136-4c71-a216-5ba059f65ce7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aliamk/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kic4sjes.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
