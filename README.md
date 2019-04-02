Display a QR code to the URL the presentation is hosted at, so the audience can follow along easily.

This uses https://github.com/davidshimjs/qrcodejs for rendering the QR Codes.

## Installation

Clone this repo to your plugins folder in your reveal.js presentation.
Add

```
{ src: 'plugin/reveal.js-qrcode/qrcode.min.js'}
{ src: 'plugin/reveal.js-qrcode/index.js'}
 ```
 
 to your `dependencies` in `Reveal.initialize`.

## Usage

Simply add a `div` with a class of `reveal-js-qrcode` to any of your presentation's slides. It will be automatically replaced by a QR Code pointing to the URL the presentation is hosted at.

If you additionally want to display the link to the URL below the QR Code, simply also add the class `reveal-js-qrcode-display-link`.

## TODO

- [ ] support public URL for multiplexed presentations.
- [ ] support slide number in URL
