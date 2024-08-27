
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
                let text = document.createElement('div');
                let container = document.createElement('div');
                const content = this.getAttribute('data-content');
                const header = this.getAttribute('data-title');
                container.className = 'wrapper';
                text.className = 'popover-content';
                text.innerHTML = content;
                title.className = 'popover-title';
                title.innerHTML = header;
                popover.prepend(container);
                container.prepend(text);
                container.prepend(title);
            } else {
                const container = popover.querySelector('.wrapper');
                container.remove();
                popover.classList.remove('popover-open');
            }
        })
    })
})();