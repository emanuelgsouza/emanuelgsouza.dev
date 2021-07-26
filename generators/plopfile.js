module.exports = function plopFileOptions(plop) {
  // component generator
  plop.setGenerator('component', {
    description: 'component boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'component name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../_includes/partials/{{kebabCase name}}.liquid',
        templateFile: 'templates/liquid-component.hbs',
      },
      {
        type: 'add',
        path: '../sass/components/_{{kebabCase name}}.scss',
        templateFile: 'templates/scss-component.hbs',
      },
      {
        type: 'append',
        path: '../sass/components/_all.scss',
        template: '@import "./{{ kebabCase name }}";',
      },
    ],
  });

  // post generator
  plop.setGenerator('post', {
    description: 'post boilerplate',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'post name please',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../posts/{{ kebabCase name }}.md',
        templateFile: 'templates/post-example.hbs',
      },
    ],
  });
};
