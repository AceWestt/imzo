import { importAll } from '../../globalFunctions';

const images = importAll(require.context('./images/section-6', false, /\.(png|jpe?g|svg)$/));
const imagesCount = Object.keys(images).length - 1;

const headerImages = { obj: images, size: imagesCount };

export default headerImages;
