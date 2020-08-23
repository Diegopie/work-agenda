
$('#currentDay').text(moment().format('dddd, MMMM Mo hh:mm A' ));

let currentHour = moment().format('HH');
let intTime = parseInt(currentHour);

// Run Loop to Style Each Time-Block Based on the Current Time
for (t = 0; t < 9; t++) {
    // Grab the textContent From the Current Time-Block
    let timeBlockTime = $('.row')[t].children[0].textContent;
    // Convert timeBlock Into Moment JS Hour                           
    let timeBlockMoment = moment(timeBlockTime, "hh A").format('HH');

    // Convert timeBlockMoment and Current Hour into Integers
    
    let intMoment = parseInt(timeBlockMoment);
    // Conditional Statement to Check if Current Time-Block is in the Past, Present, or Future
    if (intMoment < intTime) {
        console.log($('.row')[t].children[1]);
        let addPast = $('.row')[t].children[1];
        $(addPast).addClass('past');
    } else if (intMoment === intTime) {
        let addPresent = $('.row')[t].children[1];
        $(addPresent).addClass('present');
    } else {
        let addFuture = $('.row')[t].children[1];
        $(addFuture).addClass('future');
    }


}



// Check Local Storage for Any Values and Place on Screen
function checkLocal() {
    // Loop Through Every Time-Block
    for (i = 1; i < 10; i++) {
    // Variable To Get Value of Current Time-Block Key
    
    var storedAgenda = localStorage.getItem(""+ i +"");
            console.log(storedAgenda);
    // Path to Current Time-Block's Text Area
    var agendaBlock = $("[value='"+i+"']")[0].children[1];
            console.dir(agendaBlock);
    // Check If There Is Nothing In Local Storage For This Item
    if (storedAgenda === null) {
        // If There Is Not, Set Empty Place Holder Text
        agendaBlock.setAttribute('placeholder', "")
    } else {
    // Set the Placeholder Text for Current Time-Block To the Value of storedAgenda
    agendaBlock.setAttribute('placeholder', storedAgenda)
       
    }
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


    if (intTime >= 22) {
        localStorage.clear();
    }


    // Current Bugs

        // time-block will display null if their corelating key has been deleted
            // Make a conditional in checkLocal if key is not null??