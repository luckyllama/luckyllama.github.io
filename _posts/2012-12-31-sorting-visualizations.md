---
layout: post
title: Sorting Visualizations
description: "An SVG visualization of several sorting algorithms."
modified: 2013-12-15
category: articles
tags: [projects]
comments: true 
extra_js:
  - /assets/js/vendor/d3.min.js
  - /assets/js/projects/sorting/sorting.js
extra:
  belowHeader: sorting
---

Inspired by [sortvis.org](http://sortvis.org), these visualizations create an interesting way to view various sorting
algorithms at work. For instance, you can compare the calm swapping of bubblesort with the mass confusion beginning of
the heapsort algorithm. Each algorithm saves a snapshot of the list during their sorting loops and then those logs are
shown line by line with SVG graphics.

Most algorithms were copied from either [sortvis.org](http://sortvis.org) or
[Rosetta Code](http://rosettacode.org/wiki/Sorting_algorithms).

You can view all the coffeescript code on [github](https://github.com/luckyllama/luckyllama.github.io/blob/master/assets/js/projects/sorting/sorting.coffee).

_Note: SVG is an advanced html5 feature. I've only tested this page in the lastest version of Chrome and Firefox, IE9,
and Safari for iPhone 4/new iPad._