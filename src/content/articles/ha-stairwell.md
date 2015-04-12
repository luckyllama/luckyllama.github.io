---
title: "Watch Your Step!"
summary: "An interactive stairwell exibit done at Hornall Anderson."
date: 2014-07-23

category: articles
tags: [ha, environmental]

comments: false
image:
  feature: stairwell/hero.png
---

<style>
   .hero { background: #000; }
   .hero img { padding: 4em 0; }
</style>

_We found ourselves with some spare hardware, a blank canvas, and an idea for an interactive art project._

Our office here in Seattle spans two floors and we have a stairwell—and most importantly a large wall—connecting the two. The lower floor has become our new HAX area so we thought a new HAX project would be the perfect way to transition down to that space. We wanted something large and interactive (but not so interactive that someone might trip down the stairs). We wanted something abstract and pretty. We wanted something fun and eye-catching. In the end, we couldn't settle on just one idea.

<figure>
	![projector diagram](/assets/images/stairwell/Staircase-Projector-Diagram.png)
	<figcaption>The projector is mounted on the other side of a hallway that runs parallel to the stairs and projects on roughly 1+½ floors.</figcaption>
</figure>

Our first challenge was to find a projector. We wanted to fill as much wall space as possible and there was quite a lot of wall with which to work. In the end, we settled on a [short throw projector][hard1] set far enough back that our projection ended up being over 12 feet tall. At that distance, it projected far too wide for the narrow space so we blocked the sides with some foamcore to constrain the image.

<figure>
	![hardware](/assets/images/stairwell/setup.jpg)
	<figcaption>Setup: projector (top left), webcam (bottom left), and the stairwell and projection surface (right).</figcaption>
</figure>

Next, we setup a webcam to capture activity on the stairs. We hung a [Microsoft LifeCam][hard2] from the lighting fixture and draped a long usb extension cable over a wall to our waiting computer. The captured video is processed with the [OpenCV][lib4] image processing library where we compare the current video frame to previous video frames and determine what has changed. In this way, we can track motion and activity on the stairs.

<figure>
	![three examples](/assets/images/stairwell/visual-examples.png)
	<figcaption>Three of our final visuals: a particle generator (left), a grid based reveal (center), and space invaders (right).</figcaption>
</figure>

Once we collected this image data, we moved to the web. We created a dozen different visualizations which took advantage of several different [open source][lib1] [web graphics][lib2] [libraries][lib3]. A few creations didn't turn out but in the end we had 6 different visuals we liked. Instead of settling on one, we decided to use them all. The final visuals land in three camps: particle generators, grid based reveals, and classic video game homage. A particle generator reads a person's location on the stairs and creates many small images at the corresponding location in the visual. The grid based reveal visualizations have an underlying, grid-based, system that lays dormant until movement causes them to reveal themselves. Lastly, we created two video game related visuals: a Super Mario (NES) particle generator where little Marios come sprouting out of warp pipes, and a working (albeit unlosable) game of space invaders.

<figure>
	<iframe width="700" height="394" src="//player.vimeo.com/video/101571609?title=0&amp;byline=0&amp;portrait=0&amp;color=00d8fa" allowfullscreen=""></iframe>
	<figcaption>Video examples of all the visualizations. The handsome man on the right shows the raw webcam footage to which the visualizations are reacting.</figcaption>
</figure>

I'm really happy with the results. A bunch of people were able to contribute to the project and we made really quick progress. The project has been running for several months now and has received rave reviews from fellow office mates. Overall, a really successful HAX project.

[hard1]: http://www.projectorcentral.com/NEC-NP-M352WS.htm
[hard2]: http://www.microsoft.com/hardware/en-us/p/lifecam-cinema/H5D-00013
[lib1]: http://www.pixijs.com/
[lib2]: http://processingjs.org/
[lib3]: http://soulwire.github.io/sketch.js/
[lib4]: https://github.com/shimat/opencvsharp
