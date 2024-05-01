const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");


buttons.forEach((button)=>{
    // console.log(button);
    button.addEventListener("click", (e)=>{
        console.log(e)
        console.log(e.target.id);
        const _id = e.target.id;
        switch (_id) {
            case "grey":
                body.style.backgroundColor = e.target.id;
                break;
            case "blue":
                body.style.backgroundColor = e.target.id;
                break;
            case "green":
                body.style.backgroundColor = e.target.id;
                break;
            case "yellow":
                body.style.backgroundColor = e.target.id;
                break;
            default:
                body.style.backgroundColor = "white";
                break;
        }
    })
})