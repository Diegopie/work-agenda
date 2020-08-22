
// Check Local Storage for Any Values and Place on Screen
function checkLocal() {
    // Loop Through Every Time-Block
    for (i = 1; i < 3; i++) {
    // Variable To Get Value of Current Time-Block Key
    
    var storedAgenda = localStorage.getItem(""+ i +"");
            console.log(storedAgenda);
    // Path to Current Time-Block's Text Area
    var agendaBlock = $("[value='"+i+"']")[0].children[1];
            console.dir(agendaBlock);
    // Set the Placeholder Text for Current Time-Block To the Value of storedAgenda
    agendaBlock.setAttribute('placeholder', storedAgenda)
       
    }
};

checkLocal()



// * Event Listener To Store User Text In Local Storage
$('.container').on('click', function(event){
    let checkButton = event.target; 
    // Return Function if User Does Not Click a Button
    if (checkButton.matches("button") === false) {
       return;
    // 
    } else (checkButton.matches("button") === true)
        // Variable To Find Which Container User Clicked
        let userSave = checkButton.parentElement.getAttribute('value');
                console.dir(userSave);
        // Variable To Get The Value The User Typed in <textbox>                
        let userContent = checkButton.parentElement.children[1].value;
                console.dir(checkButton.parentElement.children[1].value);
        // Return Function If User Did Not Type Anything
        if (userContent === "") {
            return;
        }        
        // Store userContent to key userSave
            localStorage.setItem("" + userSave + "", userContent);
    });




    // Current Bugs

        // time-block will display null if their corelating key has been deleted