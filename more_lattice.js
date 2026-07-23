// More Lattice - Adds 18 extra lattice elements
// Sandboxels Mod

elements.lattice_2 = {
    color: "#8aa8ff",
    behavior: [
        "CL|XX|CL",
        "XX|XX|XX",
        "CL|XX|CL"
    ],
    category: "solids",
    state: "solid",
    density: 2000,
    hardness: 0.9,
    breakInto: "lattice"
};

elements.lattice_3 = {
    color: "#9b8aff",
    behavior: [
        "CL|XX|CL",
        "XX|XX|XX",
        "CL|XX|CL"
    ],
    category: "solids",
    state: "solid",
    density: 2050,
    hardness: 0.9,
    breakInto: "lattice"
};

for (let i = 4; i <= 19; i++) {
    let hue = (i * 20) % 360;

    elements["lattice_" + i] = {
        color: `hsl(${hue}, 80%, 65%)`,
        behavior: [
            "CL|XX|CL",
            "XX|XX|XX",
            "CL|XX|CL"
        ],
        category: "solids",
        state: "solid",
        density: 2000 + (i * 5),
        hardness: 0.9,
        breakInto: "lattice"
    };
}
