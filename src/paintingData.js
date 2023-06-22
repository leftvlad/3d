export const paintingData = [
  // Front Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    // Array.from creates an array from an array-like object. The first parameter is the array-like object. The second parameter is a map function that is called for each element in the array-like object. The map function takes two parameters: the element and the index. The map function returns the value that will be added to the new array. In this case, we are returning an object with the painting data. `_` is a placeholder for the element. We don't need it because we are not using the element. `i` is the index. We use it to set the painting number.
    imgSrc: `artworks/${i + 1}.jpg`, // `i + 1` is the painting number. We add 1 to the index because the index starts at 0 but we want the painting numbers to start at 1.
    width: 5, // width of the painting
    height: 3, // height of the painting
    position: { x: -15 + 10 * i, y: 2, z: -19.5 }, // position of the painting
    rotationY: 0, // rotation of the painting
    info: { // info about the painting
      title: `Зимний пейзаж ${i + 1}`, 
      artist: 'Станислав Юлианович Жуковский',
      description: `Это одно из произведений зимнего пейзажа Станислава Жуковского Размер картины: 55х66 см`,
      year: `191${i + 1}`,
    },
  })),
  // Back Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 5}.jpg`,
    width: 5,
    height: 3,
    position: { x: -15 + 10 * i, y: 2, z: 19.5 },
    rotationY: Math.PI,
    info: {
      title: `Артхаус${i + 5}`,
      artist: 'Александр Михайлович Кищенко',
      description: `Материал: холст, масло. Его творчеству свойственны широкий жанровый и тематический диапазон, острое ощущение современности, характерные эмоционально-выразительные пластические решения.`,
      year: `196${i + 5}`,
    },
  })),
  // Left Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 9}.jpg`,
    width: 5,
    height: 3,
    position: { x: -19.5, y: 2, z: -15 + 10 * i },
    rotationY: Math.PI / 2,
    info: {
      title: `Жизнь крестьянин ${i + 9}`,
      artist: 'Максимов Василий Максимович',
      description: `Художник всё своё творчество посвятил изображению народа, крестьянского быта и уклада, был нацелен на показ положительных начал деревенской жизни.`,
      year: `1869`,
    },
  })),
  // Right Wall
  ...Array.from({ length: 4 }, (_, i) => ({
    imgSrc: `artworks/${i + 13}.jpg`,
    width: 5,
    height: 3,
    position: { x: 19.5, y: 2, z: -15 + 10 * i },
    rotationY: -Math.PI / 2,
    info: {
      title: `Дворянство ${i + 13}`,
      artist: 'Павел Андреевич Федотов',
      description: `Остроумие, тонкая наблюдательность, умение подмечать типичные черты людей разных сословий, знание обстановки их жизни, способность передать характер человека.`,
      year: `18${i + 23}`,
    },
  })),
];


