
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
  component: ComponentCreator('/','f5c'),
  
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
  component: ComponentCreator('/defi','d45'),
  exact: true,
},
{
  path: '/defi/dex',
  component: ComponentCreator('/defi/dex','65f'),
  exact: true,
},
{
  path: '/defi/exam',
  component: ComponentCreator('/defi/exam','a30'),
  exact: true,
},
{
  path: '/defi/flash_loans',
  component: ComponentCreator('/defi/flash_loans','17b'),
  exact: true,
},
{
  path: '/defi/lending',
  component: ComponentCreator('/defi/lending','9c4'),
  exact: true,
},
{
  path: '/defi/stable_coins',
  component: ComponentCreator('/defi/stable_coins','36a'),
  exact: true,
},
{
  path: '/defi/synthetics',
  component: ComponentCreator('/defi/synthetics','750'),
  exact: true,
},
{
  path: '/defi/tokens',
  component: ComponentCreator('/defi/tokens','291'),
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
  component: ComponentCreator('/formal-verification','c07'),
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
{
  path: '/tezos-basics/transactions',
  component: ComponentCreator('/tezos-basics/transactions','49c'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
