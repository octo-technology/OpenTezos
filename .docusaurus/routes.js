
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','e9c'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','328'),
  exact: true,
},
{
  path: '/michelson/exam',
  component: ComponentCreator('/michelson/exam','e33'),
  exact: true,
},
{
  path: '/michelson/examples',
  component: ComponentCreator('/michelson/examples','d19'),
  exact: true,
},
{
  path: '/michelson/instructions',
  component: ComponentCreator('/michelson/instructions','e1c'),
  exact: true,
},
{
  path: '/michelson/introduction',
  component: ComponentCreator('/michelson/introduction','742'),
  exact: true,
},
{
  path: '/michelson/language_fundamentals',
  component: ComponentCreator('/michelson/language_fundamentals','739'),
  exact: true,
},
{
  path: '/michelson/smart_contracts',
  component: ComponentCreator('/michelson/smart_contracts','24d'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
