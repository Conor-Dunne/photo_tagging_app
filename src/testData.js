const testImage = {
  name: "test image",
  src: "/src/assets/wallpaperflare.com_wallpaper.jpg",
  targets: [
    {
      name: "Wendy",
      coordsX: "99",
      coordsY: "52",
    },
    {
      name: "Odlaw",
      coordsX: "98",
      coordsY: "84",
    },
    {
      name: "knee",
      coordsX: "34",
      coordsY: "67",
    },
  ],
};


const testCopy = [...testImage.targets];
console.log("testCopy", testCopy);

export default testImage;
