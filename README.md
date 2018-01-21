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
![Alt text](https://raw.githubusercontent.com/aymen94/simple-Blockchain/master/blockchain-aymen%20.jpg?raw=true "Blockchain")


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

# OUTPUT
```
{
  "chain": [
    {
      "index": 0,
      "timestamp": "2018-01-21T12:52:27.140Z",
      "data": {
        "firstBlock": "Created By Aymen Naghmouchi"
      },
      "hashBlock": "5f7917e79d103391e47c77617f3481b1aaf040315852cf9295e95a2ad75eec79"
    },
    {
      "index": 1,
      "timestamp": "2018-01-21T12:52:27.142Z",
      "data": {
        "user": "Aymen Naghmouchi",
        "Amount": 100
      },
      "hashBlock": "a79037a2bea4db561e6d4f8193fbc2760ed806eb914ed23d67ae67fe82d8d3f7",
      "precedentHash": "5f7917e79d103391e47c77617f3481b1aaf040315852cf9295e95a2ad75eec79"
    },
    {
      "index": 2,
      "timestamp": "2018-01-21T12:52:27.143Z",
      "data": {
        "user": "Aymen Naghmouchi",
        "Amount": 2500
      },
      "hashBlock": "b0aab5a00f06523009fea719933c9f089167499ccd9c24805fc6c27f465f16d7",
      "precedentHash": "a79037a2bea4db561e6d4f8193fbc2760ed806eb914ed23d67ae67fe82d8d3f7"
    },
    {
      "index": 3,
      "timestamp": "2018-01-21T12:52:27.144Z",
      "data": {
        "user": "Aymen Naghmouchi",
        "Amount": 50
      },
      "hashBlock": "5940f04870f8f33790ed1778a6233959136a09fec586e1c397b05286c4c5d7d0",
      "precedentHash": "b0aab5a00f06523009fea719933c9f089167499ccd9c24805fc6c27f465f16d7"
    }
  ]
}
```



## How to use
* git clone or fork it
* npm install
* npm start

### compile and execute
