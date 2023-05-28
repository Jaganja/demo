const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];//[button.pre-btn]
//const preBtn = document.querySelectorAll('.pre-btn');//NodeList [button.pre-btn]

productContainers.forEach((item, i) => {//<div>product-container  10 card</div>,0
    let containerDimensions = item.getBoundingClientRect();//DOMRect {x: 20, y: 419.51806640625, width: 824.5783081054688, height: 449.9999694824219, top: 419.51806640625,width,x,y …}
    let containerWidth = containerDimensions.width;//824.5783081054688

    nxtBtn[i].addEventListener('click', () => {//0
      //  console.log(item.scrollLeft);//10 card
        item.scrollLeft=item.scrollLeft + containerWidth;//move lift side
//                    0+824   613+824  /  1227+824   1847+824  2428+824
        

    })

    preBtn[i].addEventListener('click', () => {//0
        item.scrollLeft -= containerWidth;

    })
})