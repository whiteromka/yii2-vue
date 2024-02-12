let stack = []
let stackIsAlreadyUnpaking = false

const magic = (label) => {
    for (let i = 1; i < 4; i++) {
        let item = {
            name: label,
            number: i
        }
        stack.push(item)
    }

    // a1 a2 b1 b2
    if (!stackIsAlreadyUnpaking) {
        let sortedStack = stack.sort((firstItem, nextItem) => {
            return firstItem.number - nextItem.number
        })
        console.log(sortedStack);
    }
}
// console.log(${label}${i})

magic("a");
magic("b");