# How to Work BlockChain  
how to work blockchain, this is only example structure. :smiley:

small tutorial with code to try to create your blockchain.

I used typescript because is very easy to read/understand.

-----------------------------------------------------------------------------------------------------

## Block.ts

### Instance variable
- index ===> index block.

- timestamp ===> date of block instance.

- data ===> any type of  data to save in block

- precedentHash ===>hash of the last block (lock added before this block).

- hashBlock ===> hash of this block.

- nonce ===>it has nothing to do with blocking, change to something random (example random number).


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

> Proof-of-work  is used to  make secure the blockchain(similar bitcoin Hashcash)

> more info https://en.wikipedia.org/wiki/Proof-of-work_system
```
public mineBlock(miningDifficulty:number){
    while(this.hashBlock.substring(0,miningDifficulty)!=Array(miningDifficulty+1).join('0')){
      this.nonce++;
      this.generateHash();
  }
```

-----------------------------------------------------------------------------------------------------------
## BlockChain.ts
### Instance variable
- chain:Array<Block> ===>  array of block,(better chained list).
- miningDifficulty ===> the difficulty of mining expressed in numbers(the more the number is high the more the difficulty increases).
 
 #### constructor BlockChain
 > as a parameter it takes the difficulty of mining. 
 > when to start the blockchain,add the first block (this block is without the previous hash block because is the first block)
  ```
 constructor(miningD){
   this.chain=new Array<Block>(new Block(0,{ firstBlock:"Created By Aymen Naghmouchi"}));
   this.miningDifficulty=miningD;
 }
 ```
 
 #### methods of the BlockChain.
```
  public getLastBlock();
  
  public checkBlockChain();
  
```

> set the precedent block hash in the last added and regenerate her hash
```
 public addBlock(newBlock){
   newBlock.setPrecedentHash(this.getLastBlock().getHashBlock());
   newBlock.mineBlock(this.miningDifficulty);
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
      "timestamp": "2018-01-21T14:23:12.424Z",
      "data": {
        "firstBlock": "Created By Aymen Naghmouchi"
      },
      "hashBlock": "47234aa1697b3fd20bc5db17b899ac0d1d6adc7608cbca7fbdcd515d89c81954",
      "nonce": 0
    },
    {
      "index": 1,
      "timestamp": "2018-01-21T14:23:12.428Z",
      "data": {
        "user": "Aymen Naghmouchi",
        "Amount": 100
      },
      "hashBlock": "0008d50dfd76575392335a0df6b82d52826c75ee827b0c639c77405dc40b22cc",
      "nonce": 4636,
      "precedentHash": "47234aa1697b3fd20bc5db17b899ac0d1d6adc7608cbca7fbdcd515d89c81954"
    },
    {
      "index": 2,
      "timestamp": "2018-01-21T14:23:12.515Z",
      "data": {
        "user": "Aymen Naghmouchi",
        "Amount": 2500
      },
      "hashBlock": "0000c505fb52117656109daff8c9d18325b782b9674eb6f0d64840de43f0f0cc",
      "nonce": 4302,
      "precedentHash": "0008d50dfd76575392335a0df6b82d52826c75ee827b0c639c77405dc40b22cc"
    },
    {
      "index": 3,
      "timestamp": "2018-01-21T14:23:12.566Z",
      "data": {
        "user": "Aymen Naghmouchi",
        "Amount": 50
      },
      "hashBlock": "000fd901ae1c2622cb9b48a801099d8f5c884d73b86402078cdf9eea78c787eb",
      "nonce": 1479,
      "precedentHash": "0000c505fb52117656109daff8c9d18325b782b9674eb6f0d64840de43f0f0cc"
    }
  ],
  "miningDifficulty": 3
}
all blocks are linked? true
```



## How to use
* git clone or fork it
* npm install
* npm start

### compile
```
tsc main.ts
```
### execute
```
node main.js
```
