function tagline() {
    const closeTaglineBtn = document.querySelector('#taglineClose') as HTMLButtonElement;
    const taglineElement = document.querySelector('#tagline') as HTMLDivElement;

    closeTaglineBtn.onclick = () => {
        taglineElement.remove();
    };
}

export { tagline };
