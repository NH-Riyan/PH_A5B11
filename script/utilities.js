function taskCompleted(btn,headline)
{
    alert("board Updated Successfully")
    const tag=document.getElementById(headline).innerText;
    const button= document.getElementById(btn)
    button.disabled="true";
    button.style.backgroundColor="grey"
    

    const p =document.createElement('p');
    const time = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });
    p.innerText=`You have completed the task ${tag} at ${time}`;
    p.classList.add("m-4","p-3","bg-[#cddde4]","rounded-xl")
    document.getElementById('History').appendChild(p);


    const taskRemain=document.getElementById('task-remain')
    let convertedTR = parseInt(taskRemain.innerText)
    convertedTR--;
    taskRemain.innerText=`0${convertedTR}`
    if(convertedTR===0)
    {
        alert("You have finished all the tasks🎉🎊")
    }


    const taskDone=document.getElementById('task-done')
    let convertedTD = parseInt(taskDone.innerText)
    convertedTD++;
    taskDone.innerText=`${convertedTD}`
    

}
