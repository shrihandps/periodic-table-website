const elements = [
    { number: 1, symbol: 'H', name: 'Hydrogen', mass: 1.008, category: 'nonmetal', config: '1s¹' },
    { number: 2, symbol: 'He', name: 'Helium', mass: 4.003, category: 'noble-gas', config: '1s²' },
    { number: 3, symbol: 'Li', name: 'Lithium', mass: 6.941, category: 'alkali-metal', config: '[He] 2s¹' },
    { number: 4, symbol: 'Be', name: 'Beryllium', mass: 9.012, category: 'alkaline-earth', config: '[He] 2s²' },
    { number: 5, symbol: 'B', name: 'Boron', mass: 10.811, category: 'metalloid', config: '[He] 2s² 2p¹' },
    { number: 6, symbol: 'C', name: 'Carbon', mass: 12.011, category: 'nonmetal', config: '[He] 2s² 2p²' },
    { number: 7, symbol: 'N', name: 'Nitrogen', mass: 14.007, category: 'nonmetal', config: '[He] 2s² 2p³' },
    { number: 8, symbol: 'O', name: 'Oxygen', mass: 15.999, category: 'nonmetal', config: '[He] 2s² 2p⁴' },
    { number: 9, symbol: 'F', name: 'Fluorine', mass: 18.998, category: 'halogen', config: '[He] 2s² 2p⁵' },
    { number: 10, symbol: 'Ne', name: 'Neon', mass: 20.180, category: 'noble-gas', config: '[He] 2s² 2p⁶' },
    { number: 11, symbol: 'Na', name: 'Sodium', mass: 22.990, category: 'alkali-metal', config: '[Ne] 3s¹' },
    { number: 12, symbol: 'Mg', name: 'Magnesium', mass: 24.305, category: 'alkaline-earth', config: '[Ne] 3s²' },
    { number: 13, symbol: 'Al', name: 'Aluminum', mass: 26.982, category: 'metalloid', config: '[Ne] 3s² 3p¹' },
    { number: 14, symbol: 'Si', name: 'Silicon', mass: 28.086, category: 'metalloid', config: '[Ne] 3s² 3p²' },
    { number: 15, symbol: 'P', name: 'Phosphorus', mass: 30.974, category: 'nonmetal', config: '[Ne] 3s² 3p³' },
    { number: 16, symbol: 'S', name: 'Sulfur', mass: 32.065, category: 'nonmetal', config: '[Ne] 3s² 3p⁴' },
    { number: 17, symbol: 'Cl', name: 'Chlorine', mass: 35.453, category: 'halogen', config: '[Ne] 3s² 3p⁵' },
    { number: 18, symbol: 'Ar', name: 'Argon', mass: 39.948, category: 'noble-gas', config: '[Ne] 3s² 3p⁶' },
    { number: 19, symbol: 'K', name: 'Potassium', mass: 39.098, category: 'alkali-metal', config: '[Ar] 4s¹' },
    { number: 20, symbol: 'Ca', name: 'Calcium', mass: 40.078, category: 'alkaline-earth', config: '[Ar] 4s²' },
    { number: 21, symbol: 'Sc', name: 'Scandium', mass: 44.956, category: 'transition-metal', config: '[Ar] 3d¹ 4s²' },
    { number: 22, symbol: 'Ti', name: 'Titanium', mass: 47.867, category: 'transition-metal', config: '[Ar] 3d² 4s²' },
    { number: 23, symbol: 'V', name: 'Vanadium', mass: 50.942, category: 'transition-metal', config: '[Ar] 3d³ 4s²' },
    { number: 24, symbol: 'Cr', name: 'Chromium', mass: 51.996, category: 'transition-metal', config: '[Ar] 3d⁵ 4s¹' },
    { number: 25, symbol: 'Mn', name: 'Manganese', mass: 54.938, category: 'transition-metal', config: '[Ar] 3d⁵ 4s²' },
    { number: 26, symbol: 'Fe', name: 'Iron', mass: 55.845, category: 'transition-metal', config: '[Ar] 3d⁶ 4s²' },
    { number: 27, symbol: 'Co', name: 'Cobalt', mass: 58.933, category: 'transition-metal', config: '[Ar] 3d⁷ 4s²' },
    { number: 28, symbol: 'Ni', name: 'Nickel', mass: 58.693, category: 'transition-metal', config: '[Ar] 3d⁸ 4s²' },
    { number: 29, symbol: 'Cu', name: 'Copper', mass: 63.546, category: 'transition-metal', config: '[Ar] 3d¹⁰ 4s¹' },
    { number: 30, symbol: 'Zn', name: 'Zinc', mass: 65.380, category: 'transition-metal', config: '[Ar] 3d¹⁰ 4s²' },
    { number: 31, symbol: 'Ga', name: 'Gallium', mass: 69.723, category: 'metalloid', config: '[Ar] 3d¹⁰ 4s² 4p¹' },
    { number: 32, symbol: 'Ge', name: 'Germanium', mass: 72.640, category: 'metalloid', config: '[Ar] 3d¹⁰ 4s² 4p²' },
    { number: 33, symbol: 'As', name: 'Arsenic', mass: 74.922, category: 'metalloid', config: '[Ar] 3d¹⁰ 4s² 4p³' },
    { number: 34, symbol: 'Se', name: 'Selenium', mass: 78.960, category: 'nonmetal', config: '[Ar] 3d¹⁰ 4s² 4p⁴' },
    { number: 35, symbol: 'Br', name: 'Bromine', mass: 79.904, category: 'halogen', config: '[Ar] 3d¹⁰ 4s² 4p⁵' },
    { number: 36, symbol: 'Kr', name: 'Krypton', mass: 83.798, category: 'noble-gas', config: '[Ar] 3d¹⁰ 4s² 4p⁶' },
    { number: 37, symbol: 'Rb', name: 'Rubidium', mass: 85.468, category: 'alkali-metal', config: '[Kr] 5s¹' },
    { number: 38, symbol: 'Sr', name: 'Strontium', mass: 87.620, category: 'alkaline-earth', config: '[Kr] 5s²' },
    { number: 39, symbol: 'Y', name: 'Yttrium', mass: 88.906, category: 'transition-metal', config: '[Kr] 4d¹ 5s²' },
    { number: 40, symbol: 'Zr', name: 'Zirconium', mass: 91.224, category: 'transition-metal', config: '[Kr] 4d² 5s²' },
    { number: 41, symbol: 'Nb', name: 'Niobium', mass: 92.906, category: 'transition-metal', config: '[Kr] 4d⁴ 5s¹' },
    { number: 42, symbol: 'Mo', name: 'Molybdenum', mass: 95.940, category: 'transition-metal', config: '[Kr] 4d⁵ 5s¹' },
    { number: 43, symbol: 'Tc', name: 'Technetium', mass: 98, category: 'transition-metal', config: '[Kr] 4d⁵ 5s²' },
    { number: 44, symbol: 'Ru', name: 'Ruthenium', mass: 101.072, category: 'transition-metal', config: '[Kr] 4d⁷ 5s¹' },
    { number: 45, symbol: 'Rh', name: 'Rhodium', mass: 102.906, category: 'transition-metal', config: '[Kr] 4d⁸ 5s¹' },
    { number: 46, symbol: 'Pd', name: 'Palladium', mass: 106.420, category: 'transition-metal', config: '[Kr] 4d¹⁰' },
    { number: 47, symbol: 'Ag', name: 'Silver', mass: 107.868, category: 'transition-metal', config: '[Kr] 4d¹⁰ 5s¹' },
    { number: 48, symbol: 'Cd', name: 'Cadmium', mass: 112.411, category: 'transition-metal', config: '[Kr] 4d¹⁰ 5s²' },
    { number: 49, symbol: 'In', name: 'Indium', mass: 114.818, category: 'metalloid', config: '[Kr] 4d¹⁰ 5s² 5p¹' },
    { number: 50, symbol: 'Sn', name: 'Tin', mass: 118.711, category: 'metalloid', config: '[Kr] 4d¹⁰ 5s² 5p²' },
    { number: 51, symbol: 'Sb', name: 'Antimony', mass: 121.760, category: 'metalloid', config: '[Kr] 4d¹⁰ 5s² 5p³' },
    { number: 52, symbol: 'Te', name: 'Tellurium', mass: 127.600, category: 'nonmetal', config: '[Kr] 4d¹⁰ 5s² 5p⁴' },
    { number: 53, symbol: 'I', name: 'Iodine', mass: 126.904, category: 'halogen', config: '[Kr] 4d¹⁰ 5s² 5p⁵' },
    { number: 54, symbol: 'Xe', name: 'Xenon', mass: 131.293, category: 'noble-gas', config: '[Kr] 4d¹⁰ 5s² 5p⁶' },
    { number: 55, symbol: 'Cs', name: 'Cesium', mass: 132.905, category: 'alkali-metal', config: '[Xe] 6s¹' },
    { number: 56, symbol: 'Ba', name: 'Barium', mass: 137.327, category: 'alkaline-earth', config: '[Xe] 6s²' },
    { number: 57, symbol: 'La', name: 'Lanthanum', mass: 138.905, category: 'lanthanide', config: '[Xe] 5d¹ 6s²' },
    { number: 58, symbol: 'Ce', name: 'Cerium', mass: 140.116, category: 'lanthanide', config: '[Xe] 4f¹ 5d¹ 6s²' },
    { number: 59, symbol: 'Pr', name: 'Praseodymium', mass: 140.908, category: 'lanthanide', config: '[Xe] 4f³ 6s²' },
    { number: 60, symbol: 'Nd', name: 'Neodymium', mass: 144.242, category: 'lanthanide', config: '[Xe] 4f⁴ 6s²' },
    { number: 61, symbol: 'Pm', name: 'Promethium', mass: 145, category: 'lanthanide', config: '[Xe] 4f⁵ 6s²' },
    { number: 62, symbol: 'Sm', name: 'Samarium', mass: 150.360, category: 'lanthanide', config: '[Xe] 4f⁶ 6s²' },
    { number: 63, symbol: 'Eu', name: 'Europium', mass: 151.964, category: 'lanthanide', config: '[Xe] 4f⁷ 6s²' },
    { number: 64, symbol: 'Gd', name: 'Gadolinium', mass: 157.250, category: 'lanthanide', config: '[Xe] 4f⁷ 5d¹ 6s²' },
    { number: 65, symbol: 'Tb', name: 'Terbium', mass: 158.925, category: 'lanthanide', config: '[Xe] 4f⁹ 6s²' },
    { number: 66, symbol: 'Dy', name: 'Dysprosium', mass: 162.500, category: 'lanthanide', config: '[Xe] 4f¹⁰ 6s²' },
    { number: 67, symbol: 'Ho', name: 'Holmium', mass: 164.930, category: 'lanthanide', config: '[Xe] 4f¹¹ 6s²' },
    { number: 68, symbol: 'Er', name: 'Erbium', mass: 167.259, category: 'lanthanide', config: '[Xe] 4f¹² 6s²' },
    { number: 69, symbol: 'Tm', name: 'Thulium', mass: 168.934, category: 'lanthanide', config: '[Xe] 4f¹³ 6s²' },
    { number: 70, symbol: 'Yb', name: 'Ytterbium', mass: 173.040, category: 'lanthanide', config: '[Xe] 4f¹⁴ 6s²' },
    { number: 71, symbol: 'Lu', name: 'Lutetium', mass: 174.967, category: 'lanthanide', config: '[Xe] 4f¹⁴ 5d¹ 6s²' },
    { number: 72, symbol: 'Hf', name: 'Hafnium', mass: 178.492, category: 'transition-metal', config: '[Xe] 4f¹⁴ 5d² 6s²' },
    { number: 73, symbol: 'Ta', name: 'Tantalum', mass: 180.948, category: 'transition-metal', config: '[Xe] 4f¹⁴ 5d³ 6s²' },
    { number: 74, symbol: 'W', name: 'Tungsten', mass: 183.840, category: 'transition-metal', config: '[Xe] 4f¹⁴ 5d⁴ 6s²' },
    { number: 75, symbol: 'Re', name: 'Rhenium', mass: 186.207, category: 'transition-metal', config: '[Xe] 4f¹⁴ 5d⁵ 6s²' },
    { number: 76, symbol: 'Os', name: 'Osmium', mass: 190.960, category: 'transition-metal', config: '[Xe] 4f¹⁴ 5d⁶ 6s²' },
    { number: 77, symbol: 'Ir', name: 'Iridium', mass: 192.217, category: 'transition-metal', config: '[Xe] 4f¹⁴ 5d⁷ 6s²' },
    { number: 78, symbol: 'Pt', name: 'Platinum', mass: 195.084, category: 'transition-metal', config: '[Xe] 4f¹⁴ 5d⁹ 6s¹' },
    { number: 79, symbol: 'Au', name: 'Gold', mass: 196.967, category: 'transition-metal', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s¹' },
    { number: 80, symbol: 'Hg', name: 'Mercury', mass: 200.592, category: 'transition-metal', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s²' },
    { number: 81, symbol: 'Tl', name: 'Thallium', mass: 204.383, category: 'metalloid', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p¹' },
    { number: 82, symbol: 'Pb', name: 'Lead', mass: 207.200, category: 'metalloid', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p²' },
    { number: 83, symbol: 'Bi', name: 'Bismuth', mass: 208.980, category: 'metalloid', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p³' },
    { number: 84, symbol: 'Po', name: 'Polonium', mass: 209, category: 'nonmetal', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁴' },
    { number: 85, symbol: 'At', name: 'Astatine', mass: 210, category: 'halogen', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁵' },
    { number: 86, symbol: 'Rn', name: 'Radon', mass: 222, category: 'noble-gas', config: '[Xe] 4f¹⁴ 5d¹⁰ 6s² 6p⁶' },
    { number: 87, symbol: 'Fr', name: 'Francium', mass: 223, category: 'alkali-metal', config: '[Rn] 7s¹' },
    { number: 88, symbol: 'Ra', name: 'Radium', mass: 226, category: 'alkaline-earth', config: '[Rn] 7s²' },
    { number: 89, symbol: 'Ac', name: 'Actinium', mass: 227, category: 'actinide', config: '[Rn] 6d¹ 7s²' },
    { number: 90, symbol: 'Th', name: 'Thorium', mass: 232.038, category: 'actinide', config: '[Rn] 6d² 7s²' },
    { number: 91, symbol: 'Pa', name: 'Protactinium', mass: 231.036, category: 'actinide', config: '[Rn] 5f² 6d¹ 7s²' },
    { number: 92, symbol: 'U', name: 'Uranium', mass: 238.029, category: 'actinide', config: '[Rn] 5f³ 6d¹ 7s²' },
    { number: 93, symbol: 'Np', name: 'Neptunium', mass: 237, category: 'actinide', config: '[Rn] 5f⁴ 6d¹ 7s²' },
    { number: 94, symbol: 'Pu', name: 'Plutonium', mass: 244, category: 'actinide', config: '[Rn] 5f⁶ 7s²' },
    { number: 95, symbol: 'Am', name: 'Americium', mass: 243, category: 'actinide', config: '[Rn] 5f⁷ 7s²' },
    { number: 96, symbol: 'Cm', name: 'Curium', mass: 247, category: 'actinide', config: '[Rn] 5f⁷ 6d¹ 7s²' },
    { number: 97, symbol: 'Bk', name: 'Berkelium', mass: 247, category: 'actinide', config: '[Rn] 5f⁹ 7s²' },
    { number: 98, symbol: 'Cf', name: 'Californium', mass: 251, category: 'actinide', config: '[Rn] 5f¹⁰ 7s²' },
    { number: 99, symbol: 'Es', name: 'Einsteinium', mass: 252, category: 'actinide', config: '[Rn] 5f¹¹ 7s²' },
    { number: 100, symbol: 'Fm', name: 'Fermium', mass: 257, category: 'actinide', config: '[Rn] 5f¹² 7s²' },
    { number: 101, symbol: 'Md', name: 'Mendelevium', mass: 258, category: 'actinide', config: '[Rn] 5f¹³ 7s²' },
    { number: 102, symbol: 'No', name: 'Nobelium', mass: 259, category: 'actinide', config: '[Rn] 5f¹⁴ 7s²' },
    { number: 103, symbol: 'Lr', name: 'Lawrencium', mass: 262, category: 'actinide', config: '[Rn] 5f¹⁴ 6d¹ 7s²' },
    { number: 104, symbol: 'Rf', name: 'Rutherfordium', mass: 267, category: 'transition-metal', config: '[Rn] 5f¹⁴ 6d² 7s²' },
    { number: 105, symbol: 'Db', name: 'Dubnium', mass: 268, category: 'transition-metal', config: '[Rn] 5f¹⁴ 6d³ 7s²' },
    { number: 106, symbol: 'Sg', name: 'Seaborgium', mass: 271, category: 'transition-metal', config: '[Rn] 5f¹⁴ 6d⁴ 7s²' },
    { number: 107, symbol: 'Bh', name: 'Bohrium', mass: 272, category: 'transition-metal', config: '[Rn] 5f¹⁴ 6d⁵ 7s²' },
    { number: 108, symbol: 'Hs', name: 'Hassium', mass: 270, category: 'transition-metal', config: '[Rn] 5f¹⁴ 6d⁶ 7s²' },
    { number: 109, symbol: 'Mt', name: 'Meitnerium', mass: 278, category: 'transition-metal', config: '[Rn] 5f¹⁴ 6d⁷ 7s²' },
    { number: 110, symbol: 'Ds', name: 'Darmstadtium', mass: 281, category: 'transition-metal', config: '[Rn] 5f¹⁴ 6d⁹ 7s¹' },
    { number: 111, symbol: 'Rg', name: 'Roentgenium', mass: 280, category: 'transition-metal', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s¹' },
    { number: 112, symbol: 'Cn', name: 'Copernicium', mass: 285, category: 'transition-metal', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s²' },
    { number: 113, symbol: 'Nh', name: 'Nihonium', mass: 286, category: 'metalloid', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p¹' },
    { number: 114, symbol: 'Fl', name: 'Flerovium', mass: 289, category: 'metalloid', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p²' },
    { number: 115, symbol: 'Mc', name: 'Moscovium', mass: 290, category: 'metalloid', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p³' },
    { number: 116, symbol: 'Lv', name: 'Livermorium', mass: 293, category: 'nonmetal', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁴' },
    { number: 117, symbol: 'Ts', name: 'Tennessine', mass: 294, category: 'halogen', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁵' },
    { number: 118, symbol: 'Og', name: 'Oganesson', mass: 294, category: 'noble-gas', config: '[Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶' },
];

let allElements = [...elements];

// Quiz Questions
const quizQuestions = [
    { q: "What is the atomic number of Hydrogen?", options: ["1", "2", "3", "4"], answer: "1" },
    { q: "Which element has the symbol 'He'?", options: ["Helium", "Hydrogen", "Hafnium", "Holmium"], answer: "Helium" },
    { q: "Lithium belongs to which group?", options: ["Alkali metals", "Halogens", "Noble gases", "Transition metals"], answer: "Alkali metals" },
    { q: "What is the atomic number of Beryllium?", options: ["2", "3", "4", "5"], answer: "4" },
    { q: "Which element has the symbol 'B'?", options: ["Boron", "Barium", "Bismuth", "Berkelium"], answer: "Boron" },
    { q: "Carbon has how many valence electrons?", options: ["2", "4", "6", "8"], answer: "4" },
    { q: "Which element has the symbol 'N'?", options: ["Nitrogen", "Neon", "Nickel", "Niobium"], answer: "Nitrogen" },
    { q: "What is the atomic number of Oxygen?", options: ["6", "7", "8", "9"], answer: "8" },
    { q: "Which element has the symbol 'F'?", options: ["Fluorine", "Francium", "Fermium", "Iron"], answer: "Fluorine" },
    { q: "Neon belongs to which group?", options: ["Noble gases", "Halogens", "Alkali metals", "Lanthanides"], answer: "Noble gases" },
    { q: "What is the atomic number of Sodium?", options: ["9", "10", "11", "12"], answer: "11" },
    { q: "Which element has the symbol 'Mg'?", options: ["Magnesium", "Manganese", "Mercury", "Meitnerium"], answer: "Magnesium" },
    { q: "Aluminium is classified as?", options: ["Metal", "Non-metal", "Metalloid", "Noble gas"], answer: "Metal" },
    { q: "What is the atomic number of Silicon?", options: ["12", "13", "14", "15"], answer: "14" },
    { q: "Which element has the symbol 'P'?", options: ["Phosphorus", "Platinum", "Polonium", "Protactinium"], answer: "Phosphorus" },
    { q: "Sulfur is commonly used in?", options: ["Gunpowder", "Glass making", "Fertilizers", "All of these"], answer: "All of these" },
    { q: "What is the atomic number of Chlorine?", options: ["15", "16", "17", "18"], answer: "17" },
    { q: "Which element has the symbol 'Ar'?", options: ["Argon", "Arsenic", "Actinium", "Americium"], answer: "Argon" },
    { q: "Potassium belongs to which group?", options: ["Alkali metals", "Halogens", "Noble gases", "Transition metals"], answer: "Alkali metals" },
    { q: "What is the atomic number of Calcium?", options: ["18", "19", "20", "21"], answer: "20" }
];

let currentQuestions = [];
let userAnswers = [];
let quizTimer;
let timeLeft = 120;
let quizActive = false;

// Tab Switching
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    document.getElementById(tabName).classList.add('active');
    
    // Add active class to clicked button
    event.target.classList.add('active');
}

// Periodic Table Functions
function renderTable() {
    const table = document.getElementById('periodicTable');
    table.innerHTML = '';

    allElements.forEach(element => {
        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.category}`;
        elementDiv.innerHTML = `
            <div class="element-number">${element.number}</div>
            <div class="element-symbol">${element.symbol}</div>
            <div class="element-name">${element.name}</div>
            <div class="element-mass">${element.mass}</div>
        `;
        elementDiv.addEventListener('click', () => showElementDetails(element));
        table.appendChild(elementDiv);
    });
}

function showElementDetails(element) {
    const modal = document.getElementById('elementModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <div class="modal-element-header">${element.name} (${element.symbol})</div>
        <div class="modal-element-info">
            <div>
                <strong>Atomic Number:</strong>
                ${element.number}
            </div>
            <div>
                <strong>Atomic Mass:</strong>
                ${element.mass}
            </div>
            <div>
                <strong>Category:</strong>
                ${element.category.replace('-', ' ').toUpperCase()}
            </div>
            <div>
                <strong>Electron Configuration:</strong>
                ${element.config}
            </div>
        </div>
    `;
    
    modal.style.display = 'block';
}

function searchElements(query) {
    const searchTerm = query.toLowerCase();
    allElements = elements.filter(element => 
        element.name.toLowerCase().includes(searchTerm) ||
        element.symbol.toLowerCase().includes(searchTerm) ||
        element.number.toString().includes(searchTerm)
    );
    renderTable();
}

// Quiz Functions
function shuffle(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

function startQuiz() {
    quizActive = true;
    timeLeft = 120;
    currentQuestions = shuffle(quizQuestions).slice(0, 10);
    userAnswers = new Array(currentQuestions.length).fill(null);
    
    // Hide start button, show submit, close and reset buttons
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'inline-block';
    document.getElementById('close-btn').style.display = 'inline-block';
    document.querySelector('.tab-button:nth-child(2)').closest('.tab-navigation').querySelector('.tab-button:nth-child(1)').style.opacity = '0.5';
    document.querySelector('.tab-button:nth-child(2)').closest('.tab-navigation').querySelector('.tab-button:nth-child(1)').style.pointerEvents = 'none';
    
    renderQuiz();
    startTimer();
}

function renderQuiz() {
    const quizContent = document.getElementById('quiz-content');
    quizContent.innerHTML = '';

    currentQuestions.forEach((question, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        
        const questionText = document.createElement('p');
        questionText.textContent = `Q${index + 1}: ${question.q}`;
        questionDiv.appendChild(questionText);

        const optionsDiv = document.createElement('div');
        optionsDiv.className = 'quiz-options';

        question.options.forEach((option, optIndex) => {
            const optionLabel = document.createElement('label');
            optionLabel.className = 'quiz-option';

            const radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = `q${index}`;
            radio.value = option;
            radio.addEventListener('change', () => {
                userAnswers[index] = option;
            });

            optionLabel.appendChild(radio);
            optionLabel.appendChild(document.createTextNode(option));
            optionsDiv.appendChild(optionLabel);
        });

        questionDiv.appendChild(optionsDiv);
        quizContent.appendChild(questionDiv);
    });
}

function startTimer() {
    const timerDisplay = document.getElementById('quiz-timer');
    
    quizTimer = setInterval(() => {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        timerDisplay.textContent = `⏳ Time left: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        
        timeLeft--;
        if (timeLeft < 0) {
            clearInterval(quizTimer);
            submitQuiz();
        }
    }, 1000);
}

function submitQuiz() {
    quizActive = false;
    clearInterval(quizTimer);
    
    let score = 0;
    currentQuestions.forEach((question, index) => {
        if (userAnswers[index] === question.answer) {
            score++;
        }
    });

    showScore(score);
}

function showScore(score) {
    const scoreDiv = document.getElementById('quiz-score');
    const percentage = Math.round((score / currentQuestions.length) * 100);
    let message = '';
    
    if (percentage === 100) message = '🌟 Perfect Score!';
    else if (percentage >= 80) message = '🎉 Excellent!';
    else if (percentage >= 60) message = '👍 Good Job!';
    else if (percentage >= 40) message = '📚 Keep Learning!';
    else message = '💪 Try Again!';

    scoreDiv.innerHTML = `
        <div class="score-value">${score}/${currentQuestions.length}</div>
        <div>${percentage}%</div>
        <div class="score-message">${message}</div>
    `;
    scoreDiv.style.display = 'block';
    
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('reset-btn').style.display = 'inline-block';
}

function closeQuiz() {
    quizActive = false;
    clearInterval(quizTimer);
    
    document.getElementById('quiz-score').style.display = 'none';
    document.getElementById('quiz-content').innerHTML = '';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('close-btn').style.display = 'none';
    document.getElementById('reset-btn').style.display = 'none';
    document.getElementById('start-btn').style.display = 'inline-block';
    document.querySelector('.tab-button:first-child').style.opacity = '1';
    document.querySelector('.tab-button:first-child').style.pointerEvents = 'auto';
    document.getElementById('quiz-timer').textContent = '⏳ Time left: 2:00';
}

function resetQuiz() {
    quizActive = false;
    clearInterval(quizTimer);
    
    document.getElementById('quiz-score').style.display = 'none';
    document.getElementById('submit-btn').style.display = 'none';
    document.getElementById('reset-btn').style.display = 'none';
    document.querySelector('.tab-button:first-child').style.opacity = '1';
    document.querySelector('.tab-button:first-child').style.pointerEvents = 'auto';
    
    document.getElementById('quiz-content').innerHTML = '';
    document.getElementById('quiz-timer').textContent = '⏳ Time left: 2:00';
    
    startQuiz();
}

// Event listeners for Periodic Table
document.getElementById('searchBox').addEventListener('input', (e) => {
    searchElements(e.target.value);
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('elementModal').style.display = 'none';
});

window.addEventListener('click', (e) => {
    const modal = document.getElementById('elementModal');
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initial render
renderTable();
