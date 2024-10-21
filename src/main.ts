import Blueprint from "npm:factorio-blueprint";

// Set type of Blueprint to type of Blueprint.default
function createBlueprint(): Blueprint.default {
    return new Blueprint();
}
function getBlueprint(): typeof Blueprint.default {
    return Blueprint;
}

// Create a new blueprint
const bp = createBlueprint();

// Create the constant combinator (memory cell) at position (0, 0)
const memoryCell = bp.createEntity('constant_combinator', { x: 0, y: 0 });

// Set the combinator's filter to store a memory value
memoryCell.setConstant(0, 'iron_plate', 100); // 100 iron plates

// Connect the memory cell to itself using the connect method
// Connecting the output of the combinator to its input with a red wire
memoryCell.connect(memoryCell, 'out', 'in', 'red');

// Join it with a piece of belt
bp.createEntity('transport_belt', { x: 1, y: 0 });

// Join the memory cell to the belt with a red wire
memoryCell.connect(bp.findEntity({ x: 1, y: 0 }), 'out', 'in', 'red');

// Center the blueprint
bp.fixCenter();

// Output the blueprint string
console.log(bp.encode());