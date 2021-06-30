const taskContainer=document.querySelector(".task__container");

const globalStore=[];

const generateNewCard = (taskData) =>`
<div class="col-md-6 col-lg-4">
<div class="card text-center" id=${taskData.id}>
    <div class="card-header d-flex justify-content-end gap-2">
        <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
        <button type="button" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
    </div>
    <img src="${taskData.imageUrl}">
    <div class="card-body">
      <h5 class="card-title">${taskData.taskTitle}</h5>
      <p class="card-text">${taskData.taskDescription}</p>
      <a href="#" class="btn btn-primary">${taskData.taskType}</a>
    </div>
    <div class="card-footer text-muted">
        <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
    </div>
  </div>

</div>

</div>

`;
const loadInitialCardData=()=>{
    //localstorage to get tasky card data
const getCardData =localStorage.getItem("Tasky");
    //convert fro string to normal object
const {cards}=JSON.parse(getCardData);
    //loop over those array of task object to create html card,inject it to DOM
cards.map((cardObject) => {
    taskContainer.insertAdjacentHTML("beforeend",generateNewCard(cardObject));
    //update our global store
    globalStore.push(cardObject);
})
    //update our globalStore
}
const saveChange=()=>{
    const taskData={
        id:`${Date.now()}`,//unique number for id
    imageUrl: document.getElementById("imageurl").value,
    taskTitle:document.getElementById("tasktitle").value,
    taskType:document.getElementById("tasktype").value,
    taskDescription:document.getElementById("taskdescription").value,
    }
    //parent object:
//of browser is=>window
//and for DOM is =>document
const newCard =`

<div class="col-md-6 col-lg-4">
                    <div class="card text-center" id=${taskData.id}>
                        <div class="card-header d-flex justify-content-end gap-2">
                            <button type="button" class="btn btn-outline-success"><i class="fas fa-pencil-alt"></i></button>
                            <button type="button" class="btn btn-outline-danger"><i class="far fa-trash-alt"></i></button>
                        </div>
                        <img src="${taskData.imageUrl}">
                        <div class="card-body">
                          <h5 class="card-title">${taskData.taskTitle}</h5>
                          <p class="card-text">${taskData.taskDescription}</p>
                          <a href="#" class="btn btn-primary">${taskData.taskType}</a>
                        </div>
                        <div class="card-footer text-muted">
                            <button type="button" class="btn btn-outline-primary float-end">Open Task</button>
                        </div>
                      </div>

                 </div>
                 
             </div>

                   `;
                   taskContainer.insertAdjacentHTML("beforeend",generateNewCard(taskData));
                   globalStore.push(taskData);
                   localStorage.setItem("Tasky",JSON.stringify({cards:globalStore}));
};
