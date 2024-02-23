const minWidth = 749;

const imgAlt = 'Subscribe Background';
const imgStub = './media/images/img-stub.png';

const imgLeftSelector = '#imgLeft';
const imgLeftSrc = './media/images/news-subscribe/subscribe-bg-left@3x.png';

const imgRightSelector = '#imgRight';
const imgRightSrc = './media/images/news-subscribe/subscribe-bg-right@3x.png';

function getWebElement<T extends HTMLElement>(selector: string): T {
    const webElement = document.querySelector(selector);
    if (!webElement) throw new Error(`HTMLElement with selector ${selector} not found`);
    return webElement as T;
}

function getImages(): [HTMLImageElement, HTMLImageElement] {
    const Left = getWebElement<HTMLImageElement>(imgLeftSelector);
    const Right = getWebElement<HTMLImageElement>(imgRightSelector);
    return [Left, Right];
}

function setSourceSet(img: HTMLImageElement, imgPath: string) {
    const source = img.parentElement?.querySelector('source');
    if (source instanceof HTMLSourceElement) source.srcset = imgPath;
}

function addImages() {
    const [imgLeft, imgRight] = getImages();
    setSourceSet(imgLeft, imgLeftSrc);
    setSourceSet(imgRight, imgRightSrc);

    imgLeft.src = imgLeftSrc;
    imgLeft.alt = imgAlt;

    imgRight.src = imgRightSrc;
    imgRight.alt = imgAlt;
}

function removeImages() {
    const [imgLeft, imgRight] = getImages();
    setSourceSet(imgLeft, imgStub);
    setSourceSet(imgRight, imgStub);

    imgLeft.src = imgStub;
    imgLeft.removeAttribute('alt');

    imgRight.src = imgStub;
    imgRight.removeAttribute('alt');
}

function onResizeHandler() {
    let windowWidth = window.screen.width;
    windowWidth > minWidth && addImages();

    addEventListener('resize', () => {
        windowWidth = window.screen.width;
        windowWidth > minWidth ? addImages() : removeImages();
    });
}

onResizeHandler();
