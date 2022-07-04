let input = document.querySelector('.message');
 let   btn = document.querySelector('.add');
  let  todo= document.querySelector('.todo');
 


btn.addEventListener('click',(e)=>{
    e.preventDefault();

    
     let task = input.value;
     if(!task){
         return;
     }
     const task_item = document.createElement('li');
     task_item.classList.add('task_item');
    //  task_item.innerHTML= task;
     todo.appendChild(task_item);

     
    

     const  task_itemInput= document.createElement('input');
            task_itemInput.classList.add('itemInput');
            task_itemInput.type='text';
            task_itemInput.value = task;
            task_itemInput.setAttribute('readonly', 'readonly');
            task_item.appendChild(task_itemInput);


       const task__innerBox = document.createElement('div');
             task__innerBox.classList.add('task__innerBox');  

       const task__editBtn= document.createElement('button');
             task__editBtn.classList.add('editBtn');
             task__editBtn.innerHTML = 'edit';


        const task__deleteBtn = document.createElement('button');
              task__deleteBtn.classList.add('deleteBtn');
              task__deleteBtn.innerHTML= 'delete';
              
        task__innerBox.appendChild(task__editBtn);
        task__innerBox.appendChild(task__deleteBtn);


        task_item.appendChild(task__innerBox);
        todo.appendChild(task_item);
        input.value= '';

        
        task__editBtn.addEventListener('click', ()=>{
            if(task__editBtn.innerText.toLowerCase()=='edit'){
            task_itemInput.removeAttribute('readonly');
            task_itemInput.focus();
            task__editBtn.innerText='Save';
 
            }else{
                task_itemInput.setAttribute('readonly', 'readonly');
                task__editBtn.innerText='edit'
                
            }
           
        })

        task__deleteBtn.addEventListener('click', ()=>{
            todo.removeChild(task_item);
           
           
        })


});


  
   




    