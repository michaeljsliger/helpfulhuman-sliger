// Simulate basic DB tables
const DATASTORE = {
    baseColors: ['White', 'Red', 'Blue', 'Brown', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink'],
    colors: [
        { id: 0, hex: '#55c444', base: 'green', name: 'Green' },
        { id: 1, hex: '#cde0ce', base: 'blue', name: 'Blue' },
        { id: 2, hex: '#5cbecd', base: 'blue', name: 'Blue' },
        { id: 3, hex: '#7156b8', base: 'purple', name: 'Purple' },
        { id: 4, hex: '#8de43', base: 'white', name: 'White' },
        { id: 5, hex: '#7e84e6', base: 'blue', name: 'Blue' },
        { id: 6, hex: '#5b4146', base: 'brown', name: 'Brown' },
        { id: 7, hex: '#3c6396', base: 'purple', name: 'Purple' },
        { id: 8, hex: '#7605f6', base: 'purple', name: 'Purple' },
        { id: 9, hex: '#7a736d', base: 'brown', name: 'Brown' },
        { id: 10, hex: '#5cb2bb', base: 'blue', name: 'Blue' },
        { id: 11, hex: '#c44b8d', base: 'pink', name: 'Pink' },
        { id: 12, hex: '#9c44d2', base: 'purple', name: 'Purple' },
        { id: 13, hex: '#831258', base: 'red', name: 'Red' },
        { id: 14, hex: '#d221b0', base: 'pink', name: 'Pink' },
        { id: 15, hex: '#c69fc7', base: 'blue', name: 'Blue' },
        { id: 16, hex: '#3785f7', base: 'blue', name: 'blue' },
        { id: 17, hex: '#e348b6', base: 'pink', name: 'Pink' },
        { id: 18, hex: '#f83f2a', base: 'red', name: 'Red' },
        { id: 19, hex: '#6e114f', base: 'pink', name: 'Pink' },
        { id: 20, hex: '#9b3429', base: 'red', name: 'Red' },
        { id: 21, hex: '#392e72', base: 'blue', name: 'Blue' },
        { id: 22, hex: '#896f05', base: 'green', name: 'Green' },
        { id: 23, hex: '#95d3d4', base: 'blue', name: 'Blue' },
        { id: 24, hex: '#f623a5', base: 'pink', name: 'Pink' },
        { id: 25, hex: '#dfff7f', base: 'yellow', name: 'Yellow' },
        { id: 26, hex: '#aefc1b', base: 'green', name: 'Green' },
        { id: 27, hex: '#b5fa3f', base: 'green', name: 'Green' },
        { id: 28, hex: '#7a8261', base: 'brown', name: 'Brown' },
        { id: 29, hex: '#183485', base: 'blue', name: 'Blue' },
        { id: 30, hex: '#5edc78', base: 'green', name: 'Green' },
        { id: 31, hex: '#833319', base: 'purple', name: 'Purple' },
        { id: 32, hex: '#9d841d', base: 'brown', name: 'Brown' },
        { id: 33, hex: '#256ea1', base: 'blue', name: 'Blue' },
        { id: 34, hex: '#412e15', base: 'brown', name: 'Brown' },
        { id: 35, hex: '#b7f63b', base: 'orange', name: 'Orange' },
        { id: 36, hex: '#6d8cec', base: 'blue', name: 'Blue' },
        { id: 37, hex: '#7e73c1', base: 'blue', name: 'Blue' },
        { id: 38, hex: '#5f80e4', base: 'blue', name: 'Blue' },
        { id: 39, hex: '#c0e6e4', base: 'blue', name: 'Blue' },
        { id: 40, hex: '#458c46', base: 'green', name: 'Green' },
        { id: 41, hex: '#17c5f9', base: 'blue', name: 'Blue' },
        { id: 42, hex: '#76dd2b', base: 'green', name: 'Green' },
        { id: 43, hex: '#29aa38', base: 'green', name: 'Green' },
        { id: 44, hex: '#fa30d1', base: 'pink', name: 'Pink' },
        { id: 45, hex: '#6df838', base: 'green', name: 'Green' },
        { id: 46, hex: '#1f74d5', base: 'blue', name: 'Blue' },
        { id: 47, hex: '#aad864', base: 'green', name: 'Green' },
        { id: 48, hex: '#3f40b7', base: 'blue', name: 'Blue' },
        { id: 49, hex: '#5ab2df', base: 'blue', name: 'Blue' },
        { id: 50, hex: '#cb3787', base: 'pink', name: 'Pink' },
        { id: 51, hex: '#f1452c', base: 'red', name: 'Red' },
        { id: 52, hex: '#4ade82', base: 'green', name: 'Green' },
        { id: 53, hex: '#9dcca8', base: 'blue', name: 'Blue' },
        { id: 54, hex: '#42bcac', base: 'blue', name: 'Blue' },
        { id: 55, hex: '#ccb179', base: 'brown', name: 'Brown' },
        { id: 56, hex: '#b2955d', base: 'brown', name: 'Brown' },
        { id: 57, hex: '#8efecb', base: 'green', name: 'Green' },
        { id: 58, hex: '#ee189b', base: 'red', name: 'Red' },
        { id: 59, hex: '#5af874', base: 'green', name: 'Green' },
        { id: 60, hex: '#971f73', base: 'pink', name: 'Pink' },
        { id: 61, hex: '#d0c328', base: 'green', name: 'Green' },
        { id: 62, hex: '#34cf70', base: 'green', name: 'Green' },
        { id: 63, hex: '#e5c759', base: 'brown', name: 'Brown' },
        { id: 64, hex: '#f4016d', base: 'pinke', name: 'Pink' },
        { id: 65, hex: '#2387c6', base: 'blue', name: 'Blue' },
        { id: 66, hex: '#256add', base: 'blue', name: 'Blue' },
        { id: 67, hex: '#eeb902', base: 'orange', name: 'Orange' },
        { id: 68, hex: '#be6e2b', base: 'brown', name: 'Brown' },
        { id: 69, hex: '#d67a37', base: 'yellow', name: 'Yellow' },
        { id: 70, hex: '#373528', base: 'purple', name: 'Purple' },
        { id: 71, hex: '#adbf1b', base: 'green', name: 'Green' },
        { id: 72, hex: '#42acb1', base: 'blue', name: 'Blue' },
        { id: 73, hex: '#576017', base: 'green', name: 'Green' },
        { id: 74, hex: '#bb6193', base: 'pink', name: 'Pink' },
        { id: 75, hex: '#120579', base: 'blue', name: 'Blue' },
        { id: 76, hex: '#8382cf', base: 'purple', name: 'Purple' },
        { id: 77, hex: '#6dd8ad', base: 'blue', name: 'Blue' },
        { id: 78, hex: '#a1855', base: 'white', name: 'White' },
        { id: 79, hex: '#683834', base: 'purple', name: 'Purple' },
        { id: 80, hex: '#5477aa', base: 'purple', name: 'Purple' },
        { id: 81, hex: '#b77866', base: 'blue', name: 'Blue' },
        { id: 82, hex: '#fba000', base: 'brown', name: 'Brown' },
        { id: 83, hex: '#e3acd5', base: 'orange', name: 'Orange' },
        { id: 84, hex: '#3f047d', base: 'blue', name: 'Blue' },
        { id: 85, hex: '#1577eb', base: 'blue', name: 'Blue' },
        { id: 86, hex: '#215684', base: 'blue', name: 'Blue' },
        { id: 87, hex: '#ae5aeb', base: 'purple', name: 'Purple' },
        { id: 88, hex: '#77aaba', base: 'blue', name: 'Blue' },
        { id: 89, hex: '#e8cd29', base: 'yellow', name: 'Yellow' },
        { id: 90, hex: '#1492a0', base: 'blue', name: 'Blue' },
        { id: 91, hex: '#f7412', base: 'white', name: 'White' },
        { id: 92, hex: '#ddabbd', base: 'pink', name: 'Pink' },
        { id: 93, hex: '#7f3009', base: 'brown', name: 'Brown' },
        { id: 94, hex: '#c0d09', base: 'white', name: 'White' },
        { id: 95, hex: '#f52655', base: 'pink', name: 'Pink' },
        { id: 96, hex: '#f6f346', base: 'yellow', name: 'Yellow' },
        { id: 97, hex: '#86073a', base: 'purple', name: 'Purple' },
        { id: 98, hex: '#c71782', base: 'purple', name: 'Purple' },
        { id: 99, hex: '#b6a820', base: 'green', name: 'Green' }
    ]
}

export default DATASTORE;