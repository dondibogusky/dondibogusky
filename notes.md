# Notes

## Code

### HTML Attribute Order

- class
- id, name
- data-*
- src, for, type, href, value
- title, alt
- role, aria-*

### CSS Declaration Order

Alphabetical

## Image Sizes

### Deprecated

- category-title--!      =  416 × 312px
- category-title--!@2x   =  832 × 624px
- category-title--shot   =  800 × 600px

### Breakpoints

- xs                     = --breakpoint-0: 0, min mobile min width is 320px;
- sm                     = --breakpoint-1: 576px;
- md                     = --breakpoint-2: 768px;
- lg                     = --breakpoint-3: 992px;
- xl                     = --breakpoint-4: 1200px;

---

- xs (320)               <= 640 × ???
- sm (640)               <= 1280 × ???
- md (768)               <= 1536 × ???
- lg (1024)              <= 2048 × ???
- xl (1600)              <= 3200 × ???

### Grid

- col-1                  = 235.328px
- col-2                  = 482.656px
- col-3                  = 729.984px
- col≈1                  = 236px = base

### [Slider](https://kenwheeler.github.io/slick/)

- `slider__slide@xs`     <= 481px@1/1
- `slider__slide@sm`     =  408px@1/1
- `slider__slide@md`     =  273px@1/2
- `slider__slide@lg`     =  293px@1/2
- `slider__slide@xl`     =  232px@1/3

---

- xs to sm width is **354**
- md to xl width is **236**

### [Zoom](https://github.com/francoischalifour/medium-zoom)

- @hd, preferably, has a min width of 1920px. In most cases,
  lg@2x = @hd.

### Maths

- 236 × 1                = 236
- 236 × 2                = 472
- 236 × 3                = 708

---

- 472 - 236              = 236
- 708 - 472              = 236
- 708 - 236              = 472
- 236 / 2                = 118
- 236 × 1.5 or 236 + 118 = 354
- 236@2x                 = 472
- 354@2x                 = 708

## Image Process

- Scan convert to PNG (w/ alpha channel if needed) min width 1080
- Save out as 236 × ???, 236 × ???@2x, 354 × ???, and 354 × ???@2x
- Convert to webp with something like:

```sh
      cwebp -q 71 -mt -m 6 category-title-354x354@2x.png -o \
      category-title-354x354@2x.webp
```

Total default image bundle is **9** images, 4 thumbnails in 2 formats and 1 @hd
image. Total responsive image bundle is **13** images, 4 thumbnails in 2 formats
and 5 breakpoint images. Also, breakpoint images are always @2x. Web page
thumbnails (responsive image bundle images) are based on lg@2x image.

### To Do

- Theme switcher (day and night)
