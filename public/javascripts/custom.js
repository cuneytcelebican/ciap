// This function checks if user choose correctly from
// the form and make availabe next DOM element.
// When user reach the last option then make available
// next button.
function checkNext(event)
{
    let element = document.getElementById(event.target.id)
    if (event.target.id != "q6")
    {
        if (event.target.id != "q4")
        {
            if (element.value == "Yes")
            {
                let nextNumber = parseInt(event.target.id.substring(1,2)) + 1
                let nextItem = event.target.id.substring(0,1) + nextNumber.toString()
                document.getElementById(nextItem).disabled = false;
                console.log(nextItem)
            }
            else
            {
                let nextNumber = parseInt(event.target.id.substring(1,2)) + 1
                let nextItem = event.target.id.substring(0,1) + nextNumber.toString()
                document.getElementById(nextItem).disabled = true;
                console.log(nextItem)
            }
        }
        else
        {
            if(document.getElementById(event.target.id).value != "")
            {
                let nextNumber = parseInt(event.target.id.substring(1,2)) + 1
                let nextItem = event.target.id.substring(0,1) + nextNumber.toString()
                document.getElementById(nextItem).disabled = false;
                console.log(nextItem)
            }
            else
            {
                let nextNumber = parseInt(event.target.id.substring(1,2)) + 1
                let nextItem = event.target.id.substring(0,1) + nextNumber.toString()
                document.getElementById(nextItem).disabled = true;
                console.log(nextItem)
            }
        }
    }
    else
    {
        document.getElementById("business-next-button").disabled = false;
    }
}