
(function() {
    const popovers = document.querySelectorAll(`[data-toggle="popover"]`);
    if (!popovers || popovers.length === 0) return null;
    popovers.forEach(popover => {
        popover.addEventListener('click', function() {
            const isOpenPopup = popover.classList.contains('popover-open');
            console.log(isOpenPopup);
            if (!isOpenPopup) {
                popover.classList.add('popover-open');
                let title = document.createElement('div');
                let newDiv = document.createElement('div');
                newDiv.className = 'dropdown-content';
                newDiv.innerHTML = 'Some content inside the popover';
                title.className = 'dropdown-title';
                title.innerHTML = 'Popover Header';
                popover.prepend(newDiv);
                popover.prepend(title);
                const content = this.getAttribute('data-content');
            } else {
                const newDiv = popover.querySelector('.dropdown-content');
                const title = popover.querySelector('.dropdown-title');
                newDiv.remove();
                title.remove();
                popover.classList.remove('popover-open');
            }
        })
    })
})();