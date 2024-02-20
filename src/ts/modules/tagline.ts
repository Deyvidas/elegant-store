function tagline() {
    const root = document.querySelector(':root') as HTMLElement;
    const closeTaglineBtn = document.querySelector('#taglineClose') as HTMLButtonElement;
    const taglineElement = document.querySelector('#tagline') as HTMLDivElement;

    closeTaglineBtn.onclick = () => {
        taglineElement.remove();
        root.style.setProperty('--tagline-height', '0px');
    };
}

export { tagline };
