var Items = document.querySelectorAll('.msg-mark');


Items.forEach(function (Item) {
    var previousImageSrc;

    Item.addEventListener('click', function () {
        var ItemImage = Item.querySelector('.msg-mark-img');

        if (!previousImageSrc){
            previousImageSrc = ItemImage.src;

            ItemImage.src = './img/star2.svg';
        } else {
            ItemImage.src = previousImageSrc;
            previousImageSrc = null;
        }
    });
});

// const photoChanger = (event) => {
//     var color = event.target.src;
//     if (color === 'http://127.0.0.1:5500/img/star1.svg'){
//         console.log(color);
//         color = 'http://127.0.0.1:5500/img/star2.svg';

//     }

// }
// Array.from(marks).forEach(color => color.addEventListener('click', photoChanger));