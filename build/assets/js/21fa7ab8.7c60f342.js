(self.webpackChunkopentezos=self.webpackChunkopentezos||[]).push([[2969],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1456:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i={id:"front_user_experience",disable_pagination:!0,title:"Build a dapp - User Experience"},s={unversionedId:"dapp/front_user_experience",id:"dapp/front_user_experience",isDocsHomePage:!1,title:"Build a dapp - User Experience",description:"In the previous chapter, the basic usages of the Temple Wallet were covered. The React app that was developed is functional.",source:"@site/docs/dapp/front-user-experience.md",sourceDirName:"dapp",slug:"/dapp/front_user_experience",permalink:"/dapp/front_user_experience",editUrl:"https://github.com/octo-technology/OpenTezos/tree/main/docs/dapp/front-user-experience.md",version:"current",lastUpdatedBy:"Theotime-Akeare",lastUpdatedAt:1623251032,formattedLastUpdatedAt:"6/9/2021",frontMatter:{id:"front_user_experience",disable_pagination:!0,title:"Build a dapp - User Experience"},sidebar:"docs",previous:{title:"Build a dapp - basics",permalink:"/dapp/basics"},next:{title:"Exam",permalink:"/dapp/exam"}},c=[{value:"Page component refactoring",id:"page-component-refactoring",children:[]}],l={toc:c};function p(e){var t=e.components,i=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In the previous chapter, the basic usages of the ",(0,r.kt)("em",{parentName:"p"},"Temple Wallet")," were covered. The React app that was developed is functional.\nThe app displays the storage information and enables the user to make two contract calls: the first to open a raffle and the second to buy a ticket."),(0,r.kt)("p",null,"However, the user experience could be improved for these aspects of the application:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"transactions: if the user wants to send two transactions in a row, he needs to wait for the first transaction to be confirmed before sending the second one. Thus, the application should prevent the user from sending several transactions and should keep the user informed about the confirmed transactions."),(0,r.kt)("li",{parentName:"ol"},"storage information: everyone should be able to read the storage information. However, our app requires you to connect your temple wallet, before. This method has to be improved."),(0,r.kt)("li",{parentName:"ol"},"Some parts of the application should not be reachable to everyone: only the contract administrator should be able to fill the form and open the raffle, and an address having already bought a ticket should not be able to try to buy, another one.")),(0,r.kt)("p",null,"In this chapter, we will refactor the react app to fix these three points."),(0,r.kt)("h1",{id:"adding-notifications"},"Adding notifications"),(0,r.kt)("p",null,"The project can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bepi-octo/raffle-react-app"},"https://github.com/bepi-octo/raffle-react-app")),(0,r.kt)("p",null,"To install the project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn install\n")),(0,r.kt)("p",null,"To run the application:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ yarn start\n")),(0,r.kt)("p",null,"First, we will integrate alert notifications into our app. A notification should pop up when a transaction is sent, and when a transaction succeeds or fails."),(0,r.kt)("p",null,"We will use two node modules for the notifications: ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-alert"},"react-alert")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/react-alert-template-basic"},"react-alert-template-basic")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"react-alert")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"react-alert-template-basic")," to create a context provider."),(0,r.kt)("p",null,"Let's import the two modules and set a configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'import { positions, Provider as AlertProvider, types, useAlert } from "react-alert";\n//@ts-ignore\nimport AlertTemplate from "react-alert-template-basic";\n\n\nconst alertOptions = {\n  timeout: 5000,\n  position: positions.TOP_RIGHT,\n  type: types.ERROR,\n};\n\n')),(0,r.kt)("p",null,"We can add the provider and configure it:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"function App() {\n  return (\n    <AlertProvider template={AlertTemplate} {...alertOptions}> // alert provider\n    <DAppProvider appName={APP_NAME}>\n      <React.Suspense fallback={null}>\n        <Page>\n          <ConnectionSection></ConnectionSection>\n          <RaffleInformation></RaffleInformation>\n          <LaunchRaffleSection></LaunchRaffleSection>\n          <BuyTicketButton></BuyTicketButton>\n        </Page>\n      </React.Suspense>\n    </DAppProvider>\n    </AlertProvider>\n  );\n}\n\nexport default App;\n")),(0,r.kt)("p",null,"Let's test it: we will display a notification when connecting a new account. There are three types of alert:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"info"),": display some information"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"success"),": display the success of an operation"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"error"),": display the failure of an operation")),(0,r.kt)("p",null,"We will use an ",(0,r.kt)("inlineCode",{parentName:"p"},"info")," alert:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'function ConnectionSection() {\n  const alert = useAlert();\n  const connect = useConnect()\n  const accountPkh = useAccountPkh()\n  const tezos = useTezos()\n  const [balance, setBalance] = React.useState(null)\n  const handleConnect = React.useCallback(async () => {\n    try {\n      await connect(NETWORK, { forcePermission: true })\n      alert.info("Account connected"); // will display an alert after connection\n    } catch (err) {\n      console.error(err.message)\n    }\n  }, [connect, alert])\n\n  ...\n}\n')),(0,r.kt)("p",null,"Let's try our app and connect a new account:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(1672).Z})),(0,r.kt)("p",null,"An alert appears in the top-right corner and disappears after five seconds."),(0,r.kt)("h1",{id:"adding-transaction-notifications"},"Adding transaction notifications"),(0,r.kt)("p",null,"Now that we know how to add notifications, we can use them to notify the user of contracts if a call is a success or failure."),(0,r.kt)("p",null,"Let's take the example of the call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"openRaffle")," entrypoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"  const launchRaffleCallback = React.useCallback(\n    ({ reward, description, closingDate, winningTicketHash }: launchRaffleParameters) => {\n      return (contract as any).methods\n        .openRaffle(reward, closingDate, description, web3.utils.asciiToHex(winningTicketHash).slice(2))\n        .send({ amount: reward });\n    },\n    [contract]\n  );\n")),(0,r.kt)("p",null,"Every contract call is unsynchronized and returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"Promise<TransactionWalletOperation>"),". The ",(0,r.kt)("a",{parentName:"p",href:"https://tezostaquito.io/typedoc/classes/_taquito_taquito.transactionwalletoperation.html#confirmation"},(0,r.kt)("inlineCode",{parentName:"a"},"TransactionWalletOperation"))," class contains the information of transactions sent by the wallet. The ",(0,r.kt)("inlineCode",{parentName:"p"},"confirmation")," method waits for the transaction confirmation and returns a promise. If it is ",(0,r.kt)("em",{parentName:"p"},"fulfilled"),", the transaction is confirmed; the user should be notified with ",(0,r.kt)("inlineCode",{parentName:"p"},"alert.success"),". On the other hand, if it is ",(0,r.kt)("em",{parentName:"p"},"rejected"),", the transaction has failed. A ",(0,r.kt)("a",{parentName:"p",href:"https://tezostaquito.io/typedoc/classes/_taquito_taquito.tezosoperationerror.html"},(0,r.kt)("inlineCode",{parentName:"a"},"TezosOperationError"))," is raised, containing information about the tezos context (rpc, address used...) and the error message; the user should be notified with ",(0,r.kt)("inlineCode",{parentName:"p"},"alert.error"),", displaying the error message."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'return <button onClick={() => {\n    launchRaffleCallback({\n      reward: raffleReward,\n      description: raffleDescription,\n      closingDate: raffleClosingDate,\n      winningTicketHash: raffleWinningHashNumber\n    }).then((e: TransactionWalletOperation) => {\n      alert.info("Launching new raffle ...");\n      e.confirmation().then((e: any) => {\n        alert.success("New raffle launch", {\n        });\n        return e;\n      });\n      return e;\n    })\n    .catch((e: any) => {\n      alert.error(e.message);\n      console.error(e.message);\n    });\n')),(0,r.kt)("p",null,"The same thing can be done with the call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"buyTicket")," entrypoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'  return <button onClick={() => {\n    buyTicketCallback().then((e: any) => {\n      debugger\n      alert.info("Buying a new ticket ...");\n      e.confirmation().then((e: any) => {\n        alert.success("Ticket bought", {\n        });\n        return e;\n      });\n      return e;\n    })\n    .catch((e: any) => {\n      alert.show(e.message);\n      debugger\n      console.error(e.message);\n    });\n  }}>Buy</button>\n}\n')),(0,r.kt)("p",null,"Let's try to buy a second ticket with the same address:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(8598).Z})),(0,r.kt)("p",null,"An error notification displaying the error message from the smart contract should be raised."),(0,r.kt)("h1",{id:"preventing-the-user-from-using-the-same-counter"},"Preventing the user from using the same counter"),(0,r.kt)("p",null,"Let's try to make two contract calls to the ",(0,r.kt)("inlineCode",{parentName:"p"},"buyTicket"),' entrypoint in a row. If we click quickly enough twice on the "Buy" button, a ',(0,r.kt)("inlineCode",{parentName:"p"},"Counter already in use")," error may be raised as shown below:"),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(2064).Z})),(0,r.kt)("p",null,"It means that our first transaction is still in the mempool: the second transaction uses the same counter, hence the error."),(0,r.kt)("p",null,"The user should not be able to send a transaction if one is already in the mempool. These buttons need to be disabled."),(0,r.kt)("p",null,"We need to know if there is a pending transaction in the app: a boolean updated, before and after each transaction will be enough."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"function App() {\n  const [pendingTransaction, setPendingTransaction] = useState<boolean>(false);\n  return (\n    <AlertProvider template={AlertTemplate} {...alertOptions}>\n    <DAppProvider appName={APP_NAME}>\n      <React.Suspense fallback={null}>\n        <Page>\n          <ConnectionSection></ConnectionSection>\n          <RaffleInformation></RaffleInformation>\n          <LaunchRaffleSection></LaunchRaffleSection>\n          <BuyTicketButton></BuyTicketButton>\n        </Page>\n      </React.Suspense>\n    </DAppProvider>\n    </AlertProvider>\n  );\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LaunchRaffleSection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BuyTicketButton")," actions need to know if a transaction is pending. They need to get this boolean and a callback, to update it in their ",(0,r.kt)("inlineCode",{parentName:"p"},"props"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"type BuyTicketButtonProps = { pendingTransaction: boolean; setPendingTransactionCallback: (b : boolean) => void}\nfunction BuyTicketButton({pendingTransaction, setPendingTransactionCallback} : BuyTicketButtonProps) {\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"type LaunchRaffleSectionProps = { pendingTransaction: boolean; setPendingTransactionCallback: (b : boolean) => void}\nfunction LaunchRaffleSection({pendingTransaction, setPendingTransactionCallback} : BuyTicketButtonProps) {\n")),(0,r.kt)("p",null,"Our ",(0,r.kt)("inlineCode",{parentName:"p"},"App")," component will pass its ",(0,r.kt)("inlineCode",{parentName:"p"},"[pendingTransaction, setPendingTransaction]")," state to both of them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"function App() {\n  const [pendingTransaction, setPendingTransaction] = useState<boolean>(false);\n  return (\n    <AlertProvider template={AlertTemplate} {...alertOptions}>\n    <DAppProvider appName={APP_NAME}>\n      <React.Suspense fallback={null}>\n        <Page>\n          <ConnectionSection></ConnectionSection>\n          <RaffleInformation></RaffleInformation>\n          <LaunchRaffleSection pendingTransaction={pendingTransaction} setPendingTransactionCallback={setPendingTransaction}></LaunchRaffleSection>\n          <BuyTicketButton pendingTransaction={pendingTransaction} setPendingTransactionCallback={setPendingTransaction}></BuyTicketButton>\n        </Page>\n      </React.Suspense>\n    </DAppProvider>\n    </AlertProvider>\n  );\n}\n")),(0,r.kt)("p",null,"Let's see how to use this boolean in our ",(0,r.kt)("inlineCode",{parentName:"p"},"BuyTicketButton"),". We need to first check if there is a pending transaction: it must be done before any contract call (step 1). If a transaction is pending, the user must be notified and asked to wait (step 2). Then, once a transaction is sent, the boolean must be set to ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," (step 3). Finally, once the transaction is either validated or rejected, the user must be notified, and the boolean set back to ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," (step 4)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'  return <button onClick={() => {\n    if (!!pendingTransaction) { // 1. check\n      alert.info("A transaction is being processed, please wait...") //2. user notification that a transaction is pending\n    } else\n    buyTicketCallback().then((e: any) => {\n      alert.info("Buying a new ticket ...");\n      setPendingTransactionCallback(true) // 3. set boolean to true\n      e.confirmation().then((e: any) => {\n        alert.success("Ticket bought", {\n        });\n        return e;\n      }).finally( (e:any) => {\n        setPendingTransactionCallback(false)});  // 4. set the boolean to false, whether the transaction is validated or rejected\n      return e;\n    })\n    .catch((e: any) => {\n      alert.show(e.message);\n      console.error(e.message);\n    })}}>Buy</button>\n')),(0,r.kt)("p",null,"The same has to be done with the ",(0,r.kt)("inlineCode",{parentName:"p"},"LaunchRaffleSection")," component."),(0,r.kt)("h1",{id:"fetching-the-storage-without-a-wallet"},"Fetching the storage without a wallet"),(0,r.kt)("p",null,"Most dapp users want to know information from a contract without having to install a wallet or to use an address: those pieces of information are found in the contract storage. In our case, the users want to know the reward or the end date. "),(0,r.kt)("p",null,"We will use ",(0,r.kt)("em",{parentName:"p"},"Taquito"),", which can fetch a contract's storage without requiring any account. We will use a ",(0,r.kt)("inlineCode",{parentName:"p"},"TezosToolkit")," (with an rpc), instead of a Temple Wallet. "),(0,r.kt)("p",null,"First, let's define a rpc provider. We will use the ",(0,r.kt)("em",{parentName:"p"},"Smartpy")," edonet rpc: ",(0,r.kt)("a",{parentName:"p",href:"https://edonet.smartpy.io"},"https://edonet.smartpy.io")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'//src/dapp/defaults.ts\nexport const RPC_PROVIDER = "https://edonet.smartpy.io";\n')),(0,r.kt)("p",null,"We define a ",(0,r.kt)("inlineCode",{parentName:"p"},"TezosToolkit")," into the App component:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"import { APP_NAME, NETWORK, RAFFLE_ADDRESS, RPC_PROVIDER } from './dapp/defaults';\nimport { BigMapAbstraction, TezosToolkit, TransactionWalletOperation } from \"@taquito/taquito\";\n\nfunction App() {\n  const [pendingTransaction, setPendingTransaction] = useState<boolean>(false);\n  const tzToolkit: TezosToolkit = new TezosToolkit(RPC_PROVIDER);\n  return (\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RaffleInformation")," component will take this ",(0,r.kt)("inlineCode",{parentName:"p"},"TezosToolkit")," as props. The contract held in the component storage will be fetched directly by ",(0,r.kt)("em",{parentName:"p"},"Taquito")," as a ",(0,r.kt)("inlineCode",{parentName:"p"},"ContractAbstraction<ContractProvider>"),". The effect, which sets the contract state, is refactored using the ",(0,r.kt)("inlineCode",{parentName:"p"},"tzToolkit")," object."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'import { BigMapAbstraction, TezosToolkit, ContractAbstraction, ContractProvider, TransactionWalletOperation } from "@taquito/taquito";\n\ntype RaffleInformationProps = {tzToolkit: TezosToolkit}\nfunction RaffleInformation( {tzToolkit} : RaffleInformationProps) {\n    const [contract, setContract] = useState<ContractAbstraction<ContractProvider>>();\n\n    React.useEffect(() => {\n    (async () => {\n        const ctr = await tzToolkit.contract.at(RAFFLE_ADDRESS);\n        setContract(ctr);\n\n    })();\n  }, [tzToolkit]);\n')),(0,r.kt)("p",null,"And that's it! Since the Temple Wallet is based on ",(0,r.kt)("em",{parentName:"p"},"Taquito"),", the way the storage is fetched remains the same."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(7253).Z})),(0,r.kt)("p",null,"Everyone, even those who do not have a Temple Wallet, can have access to the stored pieces of information."),(0,r.kt)("h1",{id:"restricting-the-access"},"Restricting the access"),(0,r.kt)("p",null,"Some parts of the application should be restricted: "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"only the administrator should be able to fill the form to open a new raffle or to launch a new one."),(0,r.kt)("li",{parentName:"ol"},"only new players should be able to buy a ticket.")),(0,r.kt)("p",null,"By checking which user is connected, the app can display content or withhold it."),(0,r.kt)("h2",{id:"page-component-refactoring"},"Page component refactoring"),(0,r.kt)("p",null,"First, we need to do some refactoring. So far, the contract storage is only accessible from the ",(0,r.kt)("inlineCode",{parentName:"p"},"RaffleInformation")," component. However, if we want to restrict some parts of the app, we need to access the contract storage from the ",(0,r.kt)("inlineCode",{parentName:"p"},"Page")," component, which renders the ",(0,r.kt)("inlineCode",{parentName:"p"},"LaunchRaffleSection")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"BuyTicketButton")," components. Both those pieces of information are stored in the storage."),(0,r.kt)("p",null,"We need to pull the storage retrieving logic up to the component ",(0,r.kt)("inlineCode",{parentName:"p"},"Page"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'type PageProps = { pendingTransaction: boolean; setPendingTransactionCallback: (b: boolean) => void; tzToolkit: TezosToolkit }\nconst Page = ({ pendingTransaction, setPendingTransactionCallback, tzToolkit }: PageProps) => {\n\n  const tezos = useTezos();\n\n  const [contract, setContract] = useState<ContractAbstraction<ContractProvider>>();\n  const [storage, setStorage] = useState<RaffleStorage>();\n  const [tickets, setTickets] = useState<string[]>([]);\n\n  React.useEffect(() => {\n    (async () => {\n      const ctr = await tzToolkit.contract.at(RAFFLE_ADDRESS);\n      setContract(ctr);\n    })();\n  }, [tzToolkit]);\n\n  const loadStorage = React.useCallback(async () => {\n    if (contract) {\n      const str = await (contract as any).storage();\n      const ticket_ids = Array.from(Array(str.players.length).keys())\n      const tckts = await str.sold_tickets.getMultipleValues(ticket_ids)\n      setStorage(str)\n      setTickets([...tckts.valueMap])\n    }\n  }, [contract]);\n\n  React.useEffect(() => {\n    loadStorage();\n  }, [loadStorage]);\n\n  useOnBlock(tezos, loadStorage)\n\n\n  return <div className="App">           \n    <ConnectionSection></ConnectionSection>\n    <RaffleInformation storage={storage} tickets={tickets}></RaffleInformation>\n    <LaunchRaffleSection pendingTransaction={pendingTransaction} setPendingTransactionCallback={setPendingTransactionCallback}></LaunchRaffleSection>\n    <BuyTicketButton pendingTransaction={pendingTransaction} setPendingTransactionCallback={setPendingTransactionCallback}></BuyTicketButton> \n    </div>\n}\n\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"RaffleInformationProps")," are:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"type RaffleInformationProps = { storage: RaffleStorage | undefined, tickets: string[] }\nfunction RaffleInformation({ storage, tickets }: RaffleInformationProps) {...}\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"function App() {\n  const [pendingTransaction, setPendingTransaction] = useState<boolean>(false);\n  const tzToolkit: TezosToolkit = new TezosToolkit(RPC_PROVIDER);\n  return (\n    <AlertProvider template={AlertTemplate} {...alertOptions}>\n      <DAppProvider appName={APP_NAME}>\n        <React.Suspense fallback={null}>\n          <Page pendingTransaction={pendingTransaction} setPendingTransactionCallback={setPendingTransaction} tzToolkit={tzToolkit} />\n        </React.Suspense>\n      </DAppProvider>\n    </AlertProvider>\n  );\n}\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"BuyTicketButton")," component must be displayed when an address that does not own a ticket is connected."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Page")," component must return:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'return <div className="App">\n    <ConnectionSection></ConnectionSection>\n    <RaffleInformation storage={storage} tickets={tickets}></RaffleInformation>\n    <LaunchRaffleSection pendingTransaction={pendingTransaction} setPendingTransactionCallback={setPendingTransactionCallback}></LaunchRaffleSection>\n    {\n      (accountPkh ? storage?.players.includes(accountPkh) : true)\n        ? <div/>\n        : <BuyTicketButton pendingTransaction={pendingTransaction} setPendingTransactionCallback={setPendingTransactionCallback}></BuyTicketButton>\n    }\n  </div>\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"LaunchRaffleSection")," component must be displayed if the connected address is the administrator address (from the storage)\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"Page")," component must return:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},'return <div className="App">\n    <ConnectionSection></ConnectionSection>\n    <RaffleInformation storage={storage} tickets={tickets}></RaffleInformation>\n    {\n      (storage ? accountPkh === storage.admin : false)\n        ? <LaunchRaffleSection pendingTransaction={pendingTransaction} setPendingTransactionCallback={setPendingTransactionCallback}></LaunchRaffleSection>\n        : <div> </div>\n    }\n    {\n      (accountPkh ? storage?.players.includes(accountPkh) : true)\n        ? <div/>\n        : <BuyTicketButton pendingTransaction={pendingTransaction} setPendingTransactionCallback={setPendingTransactionCallback}></BuyTicketButton>\n    }\n  </div>\n')),(0,r.kt)("p",null,"From now on, our app will look different if it's an administrator, a player or a buyer connecting.\nFor instance, if an address is not connected, the app will display:\n",(0,r.kt)("img",{src:n(8445).Z})),(0,r.kt)("p",null,"If an address (different from the administrator) has not yet bought a ticket:\n",(0,r.kt)("img",{src:n(1755).Z})),(0,r.kt)("h1",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"Just like any web application, the user experience is essential in dapps. Users expect those applications to be easy-to-use and with quick access to clear information. Those apps must prevent average users from accessing restricted parts and from doing unnecessary actions."),(0,r.kt)("p",null,"All the refactoring made in this chapter aims to improve the function and the user experience: event notifications, restricting the access to the ",(0,r.kt)("inlineCode",{parentName:"p"},"openRaffle")," entrypoint, preventing the user from trying to buy a second ticket..."),(0,r.kt)("p",null,"Your dapp will certainly be a more complicated use-case: the smart contract will expose more entrypoints, the storage will hold more information, the front app is likely to have more pages... However, the features described in this chapter will most certainly come in handy."))}p.isMDXComponent=!0},1672:function(e,t,n){"use strict";t.Z=n.p+"assets/images/front15-1effae374075e16ea3be2064637e5e4f.png"},8598:function(e,t,n){"use strict";t.Z=n.p+"assets/images/front16-3453a049a6ee7ee6a4e1ecdf3327109c.png"},2064:function(e,t,n){"use strict";t.Z=n.p+"assets/images/front17-e945b2ae535d28023286d43e6322e5ad.png"},7253:function(e,t,n){"use strict";t.Z=n.p+"assets/images/front18-cdd5d09634b38ed11c1d516a5dff8122.png"},8445:function(e,t,n){"use strict";t.Z=n.p+"assets/images/front19-252907f25dc37c0fd10f3a2397bc1a43.png"},1755:function(e,t,n){"use strict";t.Z=n.p+"assets/images/front20-3cfaabcba0d53faf945677182714cefc.png"}}]);