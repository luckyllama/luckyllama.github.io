---
article: true
layout: article
title: "A Post with Images"
summary: "Examples and code for displaying images in posts."
date: 2013-05-22
category: articles
comments: false

published: false
---

Here are some examples of what a post with images might look like. If you want to display two or three images next to each other responsively use `figure` with the appropriate `class`. Each instance of `figure` is auto-numbered and displayed in the caption.

### Figures (for images or video)

#### One Up

<figure>
	[![Morning Fog][fig1-800]][fig1-1024]
	<figcaption>[Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr.][fig1-src]</figcaption>
</figure>

[fig1-src]: http://www.flickr.com/photos/80901381@N04/7758832526/ "Morning Fog Emerging From Trees by A Guy Taking Pictures, on Flickr"
[fig1-800]: http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_b.jpg
[fig1-1024]: http://farm9.staticflickr.com/8426/7758832526_cc8f681e48_c.jpg

Vero laborum commodo occupy. Semiotics voluptate mumblecore pug. Cosby sweater ullamco quinoa ennui assumenda, sapiente occupy delectus lo-fi. Ea fashion axe Marfa cillum aliquip. Retro Bushwick keytar cliche. Before they sold out sustainable gastropub Marfa readymade, ethical Williamsburg skateboard brunch qui consectetur gentrify semiotics. Mustache cillum irony, fingerstache magna pour-over keffiyeh tousled selfies.

#### Two Up

Apply the `half` class like so to display two images side by side that share the same caption.

``` html
<figure class="half">
    <a href="/images/image-filename-1-large.jpg"><img src="/images/image-filename-1.jpg"></a>
    <a href="/images/image-filename-2-large.jpg"><img src="/images/image-filename-2.jpg"></a>
    <figcaption>Caption describing these two images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="half">
	[![sample image][fig2-small]][fig2-big]
	[![sample image][fig2-small]][fig2-big]
	<figcaption>Two images.</figcaption>
</figure>

[fig2-small]: http://placehold.it/600x300.jpg
[fig2-big]: http://placehold.it/1200x600.jpg

#### Three Up

Apply the `third` class like so to display three images side by side that share the same caption.

``` html
<figure class="third">
	<img src="/images/image-filename-1.jpg">
	<img src="/images/image-filename-2.jpg">
	<img src="/images/image-filename-3.jpg">
	<figcaption>Caption describing these three images.</figcaption>
</figure>
```

And you'll get something that looks like this:

<figure class="third">
	<img src="http://placehold.it/600x300.jpg">
	<img src="http://placehold.it/600x300.jpg">
	<img src="http://placehold.it/600x300.jpg">
	<figcaption>Three images.</figcaption>
</figure>
