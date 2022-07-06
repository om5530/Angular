import { Injectable } from '@angular/core';
import { dataType } from '../interface';
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor() { }
user(){
  return [{
    name:'omkar',email:'omkar@gmail.com'
  },
  {
    name:'sai',email:'sai@gmail.com'
  },
  {
    name:'rupesh',email:'rupesh@gmail.com'
  },
  {
    name:'swag',email:'swag@gmail.com'
  }]
}
Data(){
  const data:dataType={ 
     name:'omkar',
     id:1,
     indian:true,
     address:'noida up'
  }
  return data
  }

}

