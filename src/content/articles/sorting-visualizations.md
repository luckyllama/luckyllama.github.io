---
title: Sorting Visualizations
summary: "An SVG visualization of several sorting algorithms."
date: 2012-12-31
modified: 2014-05-9
featured: true

category: projects
tags: [projects]

comments: true

scripts:
  - /assets/js/vendor/d3.min.js
  - /assets/js/projects/sorting/sorting.js
extra: [sorting]
---

Inspired by [sortvis.org](http://sortvis.org), these visualizations create an interesting way to view various sorting
algorithms at work. For instance, you can compare the calm swapping of bubblesort with the mass confusion beginning of
the heapsort algorithm. Each algorithm saves a snapshot of the list during their sorting loops and then those logs are
shown line by line with SVG graphics.

<br>
Most algorithms were copied from either [sortvis.org](http://sortvis.org) or
[Rosetta Code](http://rosettacode.org/wiki/Sorting_algorithms).

<br>
You can view all the typescript code on [github](https://github.com/luckyllama/luckyllama.github.io/blob/dev/src/assets/js/projects/sorting/sorting.ts).

<br>
_Note: SVG is an advanced browser feature. I've only tested this page in the lastest version of Chrome and Firefox, IE9,
and Safari for iPhone 4/new iPad._
