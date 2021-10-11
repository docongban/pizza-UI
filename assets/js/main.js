//Toggle delivery
const deliverys = document.querySelectorAll('.header-delivery_item')
const searchs = document.querySelectorAll('.header-search')

deliverys.forEach((delivery,index) => {
    const search = searchs[index]
    
    delivery.onclick = () => {
        document.querySelector('.header-delivery_item.active').classList.remove('active')
        document.querySelector('.header-search.block').classList.remove('block')

        delivery.classList.add('active')
        search.classList.add('block')
    }
})