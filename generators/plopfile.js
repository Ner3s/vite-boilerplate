const STYLES = [
  {
    type: 'add',
    path: '../src/{{folderName}}/{{pascalCase name}}/styles.module.scss',
    templateFile: 'templates/components/styles.hbs'
  }
];

const handleComponents = {
  pages: [
    {
      type: 'add',
      path: '../src/{{folderName}}/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/components/index-page.hbs'
    }
  ],
  components: [
    {
      type: 'add',
      path: '../src/{{folderName}}/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/components/index.hbs'
    },
    {
      type: 'add',
      path: '../src/{{folderName}}/{{pascalCase name}}/test.tsx',
      templateFile: 'templates/components/test.hbs'
    },
    ...STYLES
  ],
  templates: [
    {
      type: 'add',
      path: '../src/{{folderName}}/{{pascalCase name}}/index.tsx',
      templateFile: 'templates/components/index-template.hbs'
    },
    {
      type: 'add',
      path: '../src/{{folderName}}/{{pascalCase name}}/test.tsx',
      templateFile: 'templates/components/test-template.hbs'
    },
    ...STYLES
  ]
};

export default function (plop) {
  plop.setWelcomeMessage(`
    Welcome to CLI, What do you need?
  `),
    plop.setGenerator('Create a component', {
      description: 'React component',
      prompts: [
        {
          type: 'list',
          name: 'folderName',
          message: 'select the folder or path',
          choices: ['components', 'pages', 'templates']
        },
        {
          type: 'input',
          name: 'name',
          message: 'enter the component name:'
        }
      ],
      actions: (data) => handleComponents[data.folderName]
    });

  // plop.setGenerator('Create a service', {
  //   description: 'Create API service consumer',
  //   prompts: [
  //     {
  //       type: 'input',
  //       name: 'name',
  //       message: 'enter the service name:'
  //     }
  //   ],
  //   actions: [
  //     {
  //       type: 'add',
  //       path: '../src/services/{{name}}-service.ts',
  //       templateFile: 'templates/service.ts.hbs'
  //     }
  //   ]
  // });

  plop.setGenerator('Create a contextAPI', {
    description: 'Create a contextAPI',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'enter the context name:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/contexts/use-{{lowerCase name}}/index.tsx',
        templateFile: 'templates/context/index.hbs'
      }
    ]
  });
  plop.setGenerator('Create a hook', {
    description: 'Create a hook',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'enter the hook name:'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/hooks/use-{{dashCase name}}/index.tsx',
        templateFile: 'templates/hook/index.hbs'
      }
    ]
  });
}
