function  openPlayerConfig(e){
    playerConfigOverlayElement.style.display="block";
    editPlayer=e.target.dataset.playerid;
    backdrop.style.display="block";
    // console.log(editPlayer);
}

function closeConfig(){
    playerConfigOverlayElement.style.display="none";
    errors.textContent="";
    formE.firstElementChild.lastElementChild.value='';
    backdrop.style.display="none";
}

function savePlayer(e){
    e.preventDefault();
    const formData=new FormData(e.target);
    //playername is "name" property of input field
    const enteredData= formData.get('playername').trim();
    console.log(enteredData);
    if(!enteredData){
        errors.textContent="Enter a valid input";
        return;
    }
    if(editPlayer==1){
        document.getElementById('firstplayer').textContent=enteredData;
        player[0].name=enteredData;
        e.target.value="";
        
    }
    else{
        player[1].name=enteredData;
        document.getElementById('secondplayer').textContent=enteredData;
    }

    closeConfig();
}