function saveTask(){
    const title = $("#txtTitle").val();
    const descriptions = $("#txtDescription").val();
    const color = $("#selColor").val();
    const date = $("#selDate").val();
    const status = $("#selStatus").val();
    const budget = $("#numBudget").val();
    console.log(title, descriptions, color, date, status, budget);
}

function init(){
    console.log("init");
    //hook up event listeners
    $("#btnSave").click(saveTask);
}
window.onload = init;