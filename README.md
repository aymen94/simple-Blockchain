# How to Work BlockChain  
how to work blockchain, this is only example structure. :smiley:

small tutorial with code to try to create your blockchain.

I used typescript because is very easy to read/understand.

## Block.ts

### Instance variable
- index ===> index block.

- timestamp ===> date of block instance.

- data ===> any type of  data to save in block

- precedentHash ===>hash of the last block (lock added before this block).

- hashBlock ===> hash of this block.

#### constructor block
```
public constructor(index,data)
```

#### methods of the block.
```
 public getHashBlock();
 
 public getprecedentHash();

 public setPrecedentHash(hash);
 
 public  generateHash();
```

## BlockChain.ts
### Instance variable
- chain:Array<Block> ===>  array of block.
  
 #### constructor BlockChain
 > when to start the blockchain,add the first block (this block is without the previous hash block because is the first block)
  ```
 constructor(){
   this.chain=new Array<Block>(new Block(0,{ firstBlock:"Created By Aymen Naghmouchi"}));
 }
 ```
 
 #### methods of the BlockChain.
```
  public getLastBlock();
  
  public checkBlockChain();
  
```

> set the precedent block hash in the last added and regenerate her hash
```
 public addBlock(newBlock:Block){
   newBlock.setPrecedentHash(this.getLastBlock().getHashBlock());   
   newBlock.generateHash();
   this.chain.push(newBlock);
  }
```

> check all blocks are linked  among them.
```

  public checkBlockChain():boolean{
    for(let i:number=1;i<this.chain.length;i++){
      let actualblock:Block=this.chain[i];
      let precedentblock:Block=this.chain[i-1];
      if(actualblock.getPrecedentHash()!==precedentblock.getHashBlock())
        return false;
    }
    return true;
  }
```

## How to use
* git clone or fork it
* npm install
* npm start

### compile and execute
