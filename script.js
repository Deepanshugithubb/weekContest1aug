let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  

  
  function PrintDeveloper() {
   for( let i of arr){
    if(i.profession=='developer'){
        console.log(i)
    }
    
   }
  }
  
  function addData() {

    const newEmployee ={ id:4, name:"Deepanshu", age:21, profession:'Fresher' };
    for( let i=0;i<arr.length;i++){
        if(arr[i].id==4){
            console.log(arr);
            return;
            
        }
    }
        arr.push(newEmployee);
        console.log(arr);

       
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    for(let i =0;i<arr.length;i++){
        if(arr[i].profession=='admin'){
            arr.splice(i,1)
        }
    }
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    const moreArray = [
        { id: 4, name: 'mon', age: 22, profession: 'backend' },
        { id: 5, name: 'hawk', age: 23, profession: 'developer' }
    ]
     let combinedArray = arr.concat(moreArray);
     console.log(combinedArray);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
  }
