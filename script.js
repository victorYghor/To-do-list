var task ,tasknum = [], checkbox, lista; 


function clicar(){
    window.location.href="tasks.html"  
    
}
function adicionar(){
    task = document.querySelector('input#task').value 
    if (task=='') {
        window.alert('write an activity')
    }else{

        lista = document.createElement('li')
        lista.innerText = task
    
        checkbox = document.createElement('input')
        checkbox.setAttribute('class','checkbox')
        checkbox.type = "checkbox"
        checkbox.addEventListener('click',concluida)
    
        let activity = document.createElement('div')
        activity.setAttribute('class','activity')
        
    
        lista.appendChild(checkbox)
    
        activity.appendChild(lista)
        
        document.querySelector('ol#activities').appendChild(activity)
           

    function concluida() {
        return lista.style.textDecoration = 'line-through';

       }
        tasknum.push(task);
        console.log(tasknum);
    
        document.querySelector('input#task').focus()


    
       
        document.querySelector('input#task').value ='';
    }

}





