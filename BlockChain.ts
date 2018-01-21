//by Aymen Naghmouchi
import { Block } from './Block';

export class BlockChain{
 private chain:Array<Block>;
 constructor(){
   this.chain=new Array<Block>(new Block(0,{ firstBlock:"Created By Aymen Naghmouchi"}));
 }

 public getLastBlock():Block{
  return this.chain[this.chain.length-1];
 }

 public addBlock(newBlock:Block){
   newBlock.setPrecedentHash(this.getLastBlock().getHashBlock());
   newBlock.generateHash();
   this.chain.push(newBlock);
  }

  public checkBlockChain():boolean{
    for(let i:number=1;i<this.chain.length;i++){
      let actualblock:Block=this.chain[i];
      let precedentblock:Block=this.chain[i-1];
      if(actualblock.getPrecedentHash()!==precedentblock.getHashBlock())
        return false;
    }
    return true;
  }
}
