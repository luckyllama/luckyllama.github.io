{
   "title": "{{ page.title }} - {{site.title}}",
   "scripts": [
      {% for key, val in page.scripts %}
        "{{ val }}"{% if not loop.last %},{% endif %}
      {% endfor %}
   ],
   "content":
      {% filter json %}
      {% block content %}

         {% include "includes/hero.html" %}
         <article>{% include "includes/article-header.html" %}
         {{ content | safe }}
         {% include "includes/article-footer.html" %}</article>

      {% endblock %}
      {% endfilter %}
}
