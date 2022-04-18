export function getCanvas() {
    const elementId = '#canvas'
    const canvas = document.querySelector(elementId)
    // var ctx = canvas.getContext("2d");
    //
    if (!canvas) {
        throw new Error(`Canvas with id ${elementId} doesn't exist in this project`)
    }

    return canvas
}