export default function cleanImageName(beerName) {
    const newBeerName = beerName.toLowerCase().replaceAll(" ", "");
    const beerNamePath = `/kea/15_eksamen_3_sem/${newBeerName}.png`;
    return beerNamePath;
}