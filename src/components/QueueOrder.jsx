import React from "react";

export default function QueueOrder(props) {
    console.log(props);
    console.log(props.userOrder[0].id);

    const randomNames = ["Simone", "Rie", "Camilla", "Kristine", "Marie", "Anders", "Søren", "Christian", "Phillip", "Thomas"];
    const namesLen = randomNames.length;
    const randomNumber = getRandomNumber(namesLen);
    const randomName = getRandomName(randomNames, randomNumber);

    return (
        <div className="queueOrder row justify-content-between">
            <div className="col">
                <p>{props.id === props.userOrder[0].id ? props.userOrder[0].name : randomName}</p>
            </div>
            <div className="col text-end">
                <p>No. </p>
                <span>{props.id}</span>
            </div>
        </div>
    )
}

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

function getRandomName(names, num) {
    return names[num];
}