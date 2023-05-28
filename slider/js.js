

        // if (screen.width > 990) {//full container 
        //     itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-d");
        //     margin = itemDisplay * 5;
        //     console.log(margin);
        // }
        // if (screen.width > 700 && screen.width < 990) {
        //     itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-t");
        //     margin = itemDisplay * 6.8;//20.4
        //     console.log(margin);
        // }
        // if (screen.width > 280 && screen.width < 700) {
        //     itemDisplay = document.getElementsByClassName("slider-container")[0].getAttribute("item-display-m");
        //     margin = itemDisplay * 20;console.log(margin);
        // }
        //--------------------------------------------------------
        var count = 0;
        var inc = 0;
        margin = 0;
        var slider = document.getElementsByClassName("slider-width")[0];//slider-width     box flex row
        var itemDisplay = 0;//box 16

        var items = document.getElementsByClassName("item");//card
        //var itemleft = items.length % itemDisplay;//nan
        var itemleft = items.length;//16
        //var itemslide = Math.floor(items.length / itemDisplay) - 1;//Infinity
        var itemslide =4;
        // for (let i = 0; i < items.length; i++) {//i = 15 card
        //      items[i].style.width = (screen.width / itemDisplay) - margin + "px";
        //        //                        926        /   0 
        //    // items[i].style.width = 222 + "px";
        // console.log(items[i]);
        //    // console.log(items[i]);  <div item ></div> = 123...16
        // }

        function next() {
            //   0         4             16
            if(count>-3220){
                // if (inc == itemslide) {//0 run      
                //     inc = inc + itemleft;
                //     count = count - (screen.width / itemDisplay) * itemleft;
                // }
                // else {
                    inc++;//12344
                        //  0   -  -926 
                        // if(count>-3220){
                          count = count - screen.width;//-926   -1852   -2778    -3704   -4630
                    //  console.log(count);
                // }
                            slider.style.left = count + "px";//assin   
            //             }
                   
            }

        }

        function prev() {
            if (inc !== 0) {//43210
                // if (inc == itemleft) {
                //     inc = inc - itemleft;
                //     count = count + (screen.width / itemDisplay) * itemleft;
                // }
                // else {
             inc--;
                    count = count + screen.width; //0
                     slider.style.left = count + "px";
                // }
            }
          
        }