
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
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
