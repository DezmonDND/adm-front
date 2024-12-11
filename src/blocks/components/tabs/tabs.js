// const observer = new ResizeObserver(() => {
//     document.querySelectorAll('*').forEach(element => {
//         const isHidden = window.getComputedStyle(element).display === 'none';
//         console.log(isHidden);
        

//         if (isHidden) {
//             element.setAttribute('tabindex', '-1');
//             element.setAttribute('aria-hidden', 'true');
//         } else if (element.hasAttribute('tabindex') && element.getAttribute('tabindex') === '-1') {
//             element.removeAttribute('tabindex');
//             element.setAttribute('aria-hidden', 'false');
//         }
//     });
// });

// observer.observe(document.body);