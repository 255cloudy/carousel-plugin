carouselColors = ['red', 'black', 'green']
class Carousel {
    constructor(carouselNode) {
        this.currItem = 0;
        this.currTime = 0;
        this.itemSelected = 'carousel-item-selected'
        this.buttonSelected = 'carousel-button-selected'
        this.carousel = carouselNode
        this.items = this.carousel.querySelectorAll('.carousel-item');
        this.btns = Array.from(this.items, () => {
            const node = document.createElement('span')
            node.classList.add('carousel-btn')
            console.log(node)
            return node
        })
        console.log(this.btns)
        let btnContainer = document.createElement('div')
        btnContainer.classList.add('carousel-nav')
        btnContainer.append(...this.btns)
        this.carousel.append(btnContainer)
        this.items[this.currItem].classList.add(this.itemSelected)
        this.btns[this.currItem].classList.add(this.buttonSelected)
        this.btns.forEach((btn, index) => {
            console.log('setting listener')
            btn.addEventListener('click',()=> {
                this.updateCarousel(index)
            })})
    }
    updateCarousel(index){
        this.items[this.currItem].classList.remove(this.itemSelected)
        this.btns[this.currItem].classList.remove(this.buttonSelected)
        this.items[index].classList.add(this.itemSelected)
        this.btns[index].classList.add(this.buttonSelected)
        this.currItem = index
    }
}
document.querySelectorAll('.carousel').forEach( carousel => {
    let carouselObj  = new Carousel(carousel);
})
