// In this exercise, you will use object oriented programming concepts to define and use a custom object in JavaScript.

// Create a class named Video. The class should be constructed with the following parameters:
class Video {
  // title (a string)
  // uploader (a string, the person who uploaded it)
  // time (a number, the duration of the video - in seconds)
  constructor(title, uploader, seconds) {
    this.title = title;
    this.uploader = uploader;
    this.seconds = seconds;
  }

  // Create a method called watch() which displays a string as follows:
  watch() {
    // “uploader parameter watched all time parameter of title parameter!”
    return `${this.uploader} watched all ${this.seconds} of ${this.title}`;
  }
}

// Instantiate a new Video instance and call the watch() method.
let video = new Video("The Matrix", "Johnnus", 2.5);
console.log(video.watch());
// Instantiate a second Video instance with different values.
let video2 = new Video("Baby dric[ver", "Annita", 4.5);
// Bonus: Use an array to store data for five Video instances (ie. title, uploader, time)
const videoArray = [
  { title: "Inception", uploader: "Ethan", seconds: 2.75 },
  { title: "Interstellar", uploader: "Cooper", seconds: 3.0 },
  { title: "Arrival", uploader: "Louise", seconds: 2.5 },
  { title: "Blade Runner", uploader: "Hicks", seconds: 2.2 },
  { title: "Her", uploader: "Theodore", seconds: 1.8 }
];

// Think of the best data structure to save this information within the array.
// Bonus: Loop through the array to instantiate those instances.
videoArray.forEach(video => {
  let newVideo = new Video(video.title, video.uploader, video.seconds);
  console.log(newVideo.watch());
});