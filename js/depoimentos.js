document.addEventListener("DOMContentLoaded", function () {
    let depoimentos = document.querySelectorAll('.secao-depoimentos .depoimento');
    let index = 0;

    function showDepoimento(i, showAll = false) {
        depoimentos.forEach(function (depoimento) {
            depoimento.style.display = showAll ? 'block' : 'none';
        });
        if (!showAll) {
            depoimentos[i].style.display = 'block';
        }
    }

    function nextDepoimento() {
        index++;
        if (index >= depoimentos.length) {
            index = 0;
        }
        showDepoimento(index);
    }

    function checkScreenSize() {
        let isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
        if (isMobile) {
            showDepoimento(index);
            let btnNext = document.querySelector('.secao-depoimentos button');
            if (!btnNext) {
                btnNext = document.createElement('button');
                btnNext.innerHTML = ''; // Adiciona o ícone de seta
                btnNext.addEventListener('click', nextDepoimento);
                document.querySelector('.secao-depoimentos').appendChild(btnNext);
            }
        } else {
            showDepoimento(0, true);
            let btnNext = document.querySelector('.secao-depoimentos button');
            if (btnNext) {
                btnNext.remove();
            }
        }
    }

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
});

//imagem saltando
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.secao-bonus img');

    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.classList.add('hovered');
        });

        img.addEventListener('mouseleave', () => {
        img.classList.remove('hovered');
        });
    });
});
