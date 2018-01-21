//by Aymen Naghmouchi
import { BlockChain } from './BlockChain';
import { Block } from './block';


var AyCoin = new BlockChain();

AyCoin.addBlock(new Block(1,{user:"Aymen Naghmouchi",Amount:100}));
AyCoin.addBlock(new Block(2,{user:"Aymen Naghmouchi",Amount:2500}));
AyCoin.addBlock(new Block(3,{user:"Aymen Naghmouchi",Amount:50}));



console.log(JSON.stringify(AyCoin,null,2));

console.log("all blocks are linked? "+AyCoin.checkBlockChain());