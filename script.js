let form = document.querySelector('#form');
let arr = []
let tbody = document.querySelector('tbody');

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let task = document.querySelector('#task').value
    let priority = document.querySelector('#priority').value
    // arr = []
    let obj = {
        task,
        priority
    }
    arr.push(obj);   
   CreateTr()
})

function CreateTr(){
    tbody.innerHTML = null
    arr.forEach((e,i)=>{
        let tr = document.createElement('tr');
        let td1 = document.createElement('td')
        let td2 = document.createElement('td')
        let td3 = document.createElement('td')
      
        td1.innerText = e.task
        td2.innerText = e.priority
        td3.innerText = 'Delete'
        tr.append(td1,td2,td3)
        tbody.append(tr)
        td3.addEventListener('click',(e)=>{
            e.target.parentElement.remove()
        })
    })
}