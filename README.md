<div align="center">
  <img src="" alt="AppImage" style="border-radius: 17px; width: 100%; max-width: 800px; height: auto;">
</div>
<h3 align="center">
  <b><a href="#getting-started">Get Started</a></b>
  •
  <b><a href="#features">Features</a></b>
  •
  <b><a href="#contributing">Contributing</a></b>
</h3>
<div align="center">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  </a>
  <img src="https://img.shields.io/badge/built%20with-p5.js-orange.svg" alt="Built with p5.js">
</div>
</br>
<p align="center">The <b>UNION Synthesizer</b> is a web-based FM synthesizer that allows users to experiment with sound design and learn about frequency modulation (FM) synthesis. Built with <a href="https://p5js.org/">p5.js</a>, this tool includes adjustable FM controls, reverb and delay effects, and a logarithmic FFT visualization for analyzing the sound spectrum.</p>

## Introduction

FM synthesis is a powerful technique used in electronic music to create a wide range of sounds, from bell-like tones to complex textures. However, it can be difficult to understand and master. UNION Synthesizer aims to make FM synthesis more accessible and approachable by providing a user-friendly interface and easy-to-use controls.

The synthesizer can be accessed via a web server on a smartphone, making it easy to use and experiment with wherever you are. Simply connect to the web server using the given IP address and port number, and start creating sounds!

## Features

- **FM synthesis:** Adjust the frequency and amplitude modulation of the generated sounds using sliders. This allows you to create a wide range of tones and textures, from simple sine waves to complex, evolving sounds.
- **Reverb and delay effects:** Add depth and space to your sounds with adjustable reverb and delay effects. This can help create immersive soundscapes and give your sounds a professional, polished feel.
- **FFT visualization:** The logarithmic FFT visualization allows you to see the frequency spectrum of the generated sounds in real-time. This can help you better understand the relationship between the different frequency components and how they contribute to the overall sound.

## Getting Started

To use **UNION Synthesizer**, follow these steps:

1. Clone the repository:
    ```sh
    git clone https://github.com/chloelavrat/UNION-Synthesizer.git
    ```

2. Navigate to the `src_union` directory:
    ```sh
    cd src_union
    ```

3. Install the necessary dependencies:
    ```sh
    npm install
    ```

4. Start the web server:
    ```sh
    npm run dev
    ```

5. Connect your smartphone to the given IP address and port number to access the synthesizer.

## Contributing

The **UNION Synthesizer** project is an open-source project, and contributions are always welcome. If you would like to contribute to the project, you can do so by submitting a pull request or by creating an issue on the project's GitHub page.

## License

The **UNION Synthesizer** project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.