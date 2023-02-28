const testImage = {
  name: "test image",
  src: "/src/assets/wallpaperflare.com_wallpaper.jpg",
  targets: [
    {
      name: "Johnny Bravo",
      coordsX: "39",
      coordsY: "36",
    },
    {
      name: "Waldo",
      coordsX: "15",
      coordsY: "64",
    },
    {
      name: "R2-D2",
      coordsX: "75",
      coordsY: "79",
    },
  ],
};


const testCopy = [...testImage.targets];
console.log("testCopy", testCopy);

export default testImage;
