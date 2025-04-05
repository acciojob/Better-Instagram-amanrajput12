//your code here

document.querySelectorAll(".image").forEach((value, i) => {
    value.setAttribute("id", `div${i + 1}`);
});

let draggedElement = null;


document.querySelectorAll(".image").forEach(image => {

    image.addEventListener("dragstart", (e) => {
        draggedElement = e.target;
        // e.target.classList.add("dragging");
    });

    // Drag end
    image.addEventListener("dragend", (e) => {
        // e.target.classList.remove("dragging");
    });

    // Drag over
    image.addEventListener("dragover", (e) => {
        e.preventDefault(); // Necessary to allow drop
    });

    // Drop
    image.addEventListener("drop", (e) => {
        e.preventDefault();

        if (draggedElement === e.target) return;

        const draggedBg = getComputedStyle(draggedElement).backgroundImage;
        const draggedvalue=draggedElement.innerHTML;
        const draggedId =draggedElement.id;

        const targetBg = getComputedStyle(e.target).backgroundImage;
        const targetvalue=e.target.innerHTML;
        const targetId =e.target.id;

        // console.log("on drag ",draggedBg,draggedvalue,draggedId)
        // console.log("target value ",targetBg,targetvalue,targetId)
      
       
        draggedElement.style.backgroundImage =targetBg;
        draggedElement.innerHTML=targetvalue;
     
        // draggedElement.id=targetId

        e.target.style.backgroundImage =draggedBg;
        e.target.innerHTML=draggedvalue;
     
        // e.target.id=draggedId;
    });
});
