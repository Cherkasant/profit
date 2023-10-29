import './index.html'
import './index.scss'
import { getResponse, onSubmit } from "./modules/api";
import './modules/validation'
import './modules/elements'
import './modules/modal'
import { email, phone,name,text,form,main} from "./modules/elements";


function createResponse(message){
    const responseModal=document.createElement('div')
    responseModal.classList.add('responseContainer')
    responseModal.insertAdjacentHTML('afterbegin',`<div class="response">${message}!</div>`)
    main.appendChild(responseModal)
    function closeModal(){
        responseModal.classList.add('hidden')
    }
    responseModal.addEventListener('click',closeModal
    )
    return main;
}


form.addEventListener('submit',(event)=>{
    event.preventDefault()
    onSubmit({
        name:name.value,
        email:email.value,
        phone:phone.value,
        text:text.value
    }).then((response)=>{
        createResponse(response.message)
    }).catch((err)=>{alert(err.message)})
    getResponse().then((res)=>{console.log(res)}).catch((err)=>{
        throw new Error(err)
    })
    form.reset();
})







