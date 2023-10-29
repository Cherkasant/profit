import { modal} from "./elements";
const btn=document.querySelector('[data-header-btn]')

modal.addEventListener('click',()=>{
  modal.classList.toggle('show')
})
btn.addEventListener('click',()=>{
  modal.classList.toggle('show')
})