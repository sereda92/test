//------лайк первого трека
let like = document.getElementById('like');
let unLike = document.getElementById('unlike');

like.onclick = function () {
    like.src = 'icon2/laik2.png'
    unLike.src = 'icon2/unlaik.png'
}

unLike.onclick = function () {
    unLike.src = 'icon2/unlaik2.png'
    like.src = 'icon2/laik.png'
}
//------лайк второго трека
let likeTwo = document.getElementById('likeTwo');
let unLikeTwo = document.getElementById('unlikeTwo');

likeTwo.onclick = function () {
    likeTwo.src = 'icon2/laik2.png'
    unLikeTwo.src = 'icon2/unlaik.png'
}

unLikeTwo.onclick = function () {
    unLikeTwo.src = 'icon2/unlaik2.png'
    likeTwo.src = 'icon2/laik.png'
}
//------лайк третьего трека
let likeThree = document.getElementById('likeThree');
let unlikeThree = document.getElementById('unlikeThree');

likeThree.onclick = function () {
    likeThree.src = 'icon2/laik2.png'
    unlikeThree.src = 'icon2/unlaik.png'
}

unlikeThree.onclick = function () {
    unlikeThree.src = 'icon2/unlaik2.png'
    likeThree.src = 'icon2/laik.png'
}