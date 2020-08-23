
$('#currentDay').text(moment().format('dddd, MMMM Mo' ));

let currentHour = moment('12 PM', 'hh A').format('HH');
console.log(currentHour);


console.log(timeBlockTime = $('.row'));

for (t = 0; t < 9; t++) {
let timeBlockTime = $('.row')[t].children[0].textContent;
                            // set to i
let timeBlockMoment = moment(timeBlockTime, "hh A").format('HH');

let intTime = parseInt(currentHour);
let intMoment = parseInt(timeBlockMoment);

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




    // Current Bugs

        // time-block will display null if their corelating key has been deleted
            // Make a conditional in checkLocal if key is not null??