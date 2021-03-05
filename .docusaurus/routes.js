
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','e30'),
  
  routes: [
{
  path: '/',
  component: ComponentCreator('/','9e2'),
  exact: true,
},
{
  path: '/baker',
  component: ComponentCreator('/baker','cfc'),
  exact: true,
},
{
  path: '/baking',
  component: ComponentCreator('/baking','4fe'),
  exact: true,
},
{
  path: '/blockchain-basics',
  component: ComponentCreator('/blockchain-basics','9d6'),
  exact: true,
},
{
  path: '/contribute',
  component: ComponentCreator('/contribute','f86'),
  exact: true,
},
{
  path: '/dapp',
  component: ComponentCreator('/dapp','e2a'),
  exact: true,
},
{
  path: '/defi',
  component: ComponentCreator('/defi','746'),
  exact: true,
},
{
  path: '/deploy-a-node',
  component: ComponentCreator('/deploy-a-node','9a7'),
  exact: true,
},
{
  path: '/explorer',
  component: ComponentCreator('/explorer','95a'),
  exact: true,
},
{
  path: '/formal-verification',
  component: ComponentCreator('/formal-verification','2e7'),
  exact: true,
},
{
  path: '/ligo',
  component: ComponentCreator('/ligo','aec'),
  exact: true,
},
{
  path: '/michelson',
  component: ComponentCreator('/michelson','e49'),
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
  path: '/michelson/fundamentals',
  component: ComponentCreator('/michelson/fundamentals','de5'),
  exact: true,
},
{
  path: '/michelson/instructions',
  component: ComponentCreator('/michelson/instructions','e1c'),
  exact: true,
},
{
  path: '/michelson/smart_contracts',
  component: ComponentCreator('/michelson/smart_contracts','24d'),
  exact: true,
},
{
  path: '/paths',
  component: ComponentCreator('/paths','7a5'),
  exact: true,
},
{
  path: '/private',
  component: ComponentCreator('/private','279'),
  exact: true,
},
{
  path: '/smartpy',
  component: ComponentCreator('/smartpy','6dd'),
  exact: true,
},
{
  path: '/tezos-basics',
  component: ComponentCreator('/tezos-basics','0e5'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
