Display a QR code to the URL the presentation is hosted at, so the audience can follow along easily.

This uses https://github.com/davidshimjs/qrcodejs for rendering the QR Codes.

## Installation

Clone this repo to your plugins folder in your reveal.js presentation.
Add

```
{ src: 'plugins/reveal.js-qrcode/qrcode.min.js'}
{ src: 'plugins/reveal.js-qrcode/index.js'}
 ```
 
 to your `dependencies` in `Reveal.initialize`.

## Usage

Simply add a `div` with a class of `"reveal-js-qrcode"` to any of your presentation's slides. It will be automatically replaced by a QR Code pointing to the URL the presentation is hosted at.

## TODO

- [ ] support public URL for multiplexed presentations.
- [ ] support slide number in URL
