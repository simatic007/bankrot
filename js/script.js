/**
 * Created by simatic on 12.04.17.
 */
$(function(){
    $('.carousel').carousel({
        interval: false
    });
    
});
window.onload = function() { // после загрузки страницы

    var scrollUp = document.getElementById('menu'); // найти элемент
    var menuList = document.getElementById('menu__list'); // найти элемент
    var passive = document.getElementById('passive');
    var active = document.getElementById('active');
// show button
    if(document.body.clientWidth < 670) {
        active.style.display = 'block';
        passive.style.display = 'none';
        menuList.style.display = 'none';
        scrollUp.style.background = 'none';
    }
    window.onscroll = function () { // при скролле показывать и прятать блок
        if(document.body.clientWidth > 670) {
            if (window.pageYOffset > 0) {
                scrollUp.style.display = 'block';
                scrollUp.style.backgroundColor = 'white';
                if (active.style.display != 'block') {
                    passive.style.display = 'block';
                }
            } else {
                scrollUp.style.backgroundColor = '#BED017';
                passive.style.display = 'none';
            }
            if (active.style.display == 'block' && window.pageYOffset > 0) {
                scrollUp.style.background = 'none';
            }
        }
        if(document.body.clientWidth < 670) {
            active.style.display = 'block';
            passive.style.display = 'none';
            menuList.style.display = 'none';
            scrollUp.style.background = 'none';

        }
    };
    passive.onclick = function () { // при клике прятать меню и показывать иконку(пирожок)
        active.style.display = 'block';
        passive.style.display = 'none';
        menuList.style.display = 'none';
        scrollUp.style.background = 'none';

    };
    active.onclick = function () { // при клике показывать меню и прятать пирожок
        passive.style.display = 'block';
        active.style.display = 'none';
        menuList.style.display = 'block';
        scrollUp.style.background = 'white';

    };

};