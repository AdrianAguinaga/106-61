const API="https://106api-b0bnggbsgnezbzcz.westus3-01.azurewebsites.net/api/tasks";

function saveTask(){
    const title = $("#txtTitle").val();
    const descriptions = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, descriptions, color, date, status, budget);
    
    const data =new Task(title,descriptions,color,date,status,budget);
    console.log(data);
    displayTask(data);
}

function test(){
    $.ajax({
        type: "get",
        url: API,
        success: function(working){
            console.log(working);
        },
        error: function(err){
            console.log(err)
        }
    })
}

function displayTask(task){
    const render=`
    <div class="task" style="border-color:${task.color}">
        <div class="info">
            <h4>${task.title}</h4>
            <p>${task.description}</p>
        </div>
        <div>
        <label class="status">${task.status}</label>
            <div class="date-budget">
                <label>${task.date}</label>
                <label>${task.budget}</label>
            </div>
        </div>
    </div>
    `;
    $(".tasks").append(render);
}

function init(){
    console.log("init");
    //hook up event listeners
    $("#btnSave").click(saveTask);
}
window.onload = init;
//latets