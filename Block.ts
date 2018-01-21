//by Aymen Naghmouchi
import  SHA256 =require('sha256');

export class Block{
 private index:number;
 private timestamp:Date;
 private data:any;
 private precedentHash:any;
 private hashBlock:any;

 public constructor(index,data){
  this.index=index;
  this.timestamp=new Date();
  this.data=data;
  this.generateHash();
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
 this.hashBlock=SHA256(this.index+this.precedentHash+this.timestamp+this.data);
  }
}
