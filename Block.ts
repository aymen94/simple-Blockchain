//by Aymen Naghmouchi
import  SHA256 =require('crypto-js/sha256');

export class Block{
 private index:number;
 private timestamp:Date;
 private data:any;
 private precedentHash:any;
 private hashBlock:any;
 private nonce:number;

 public constructor(index,data){
  this.index=index;
  this.timestamp=new Date();
  this.data=data;
  this.generateHash();
  this.nonce=0;
 }

 public getHashBlock(){
  return this.hashBlock;
 }

 public getPrecedentHash(){
  return this.precedentHash;
 }
 public setPrecedentHash(hash:any){
   this.precedentHash=hash;
 }
 public  generateHash(){
 this.hashBlock=SHA256(this.index+this.precedentHash+this.timestamp+this.data+this.nonce).toString();
  }

  public mineBlock(miningDifficulty:number){
    while(this.hashBlock.substring(0,miningDifficulty)!=Array(miningDifficulty+1).join('0')){
      this.nonce++;
      this.generateHash();
    }
  }
}
