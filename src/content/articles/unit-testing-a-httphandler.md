---
title: "Unit Testing a HttpHandler"
date: 2011-07-23
modified: 2011-07-23

category: article
tags: [c-sharp, tips and tricks, unit testing]

comments: true
---

This is a simple trick that escaped me for a while today. A class that implements `IHttpHandler` has one main method that looks like this normally:

<pre><code class="c-sharp">
public void ProcessRequest(HttpContext context) {
    // processing logic
}
</code></pre>

Because the `HttpContext` class is sealed, you can have a hard time mocking it for unit testing purposes. In .net 3.5, Microsoft created a `HttpContextBase` that newer code uses instead of `HttpContext` which can be mocked but the `IHttpHandler` wasn't created to use it.

To get around this, all you really need to do is change your class to the following:

<pre><code class="c-sharp">
public void ProcessRequest(HttpContext context) {
    ProcessRequest(new HttpContextWrapper(context));
}
public void ProcessRequest(HttpContextBase context) {
    // processing logic
}
</code></pre>

When you structure it this way, your unit testing code that passes in a `HttpContextBase` object will naturally work while still fulfilling the interface requirements.

Like I said, a simple trick but one that took a little while to occur to me.
