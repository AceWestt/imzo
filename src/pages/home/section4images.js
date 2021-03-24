import { importAll } from '../../globalFunctions';

const images = importAll(require.context('./images/pvx-slides', false, /\.(png|jpe?g|svg)$/));
const imagesCount = Object.keys(images).length - 1;

const headerImages = { obj: images, size: imagesCount };

export default headerImages;
