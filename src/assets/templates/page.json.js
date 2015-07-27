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
         {{ content | safe }}
      {% endblock %}
      {% endfilter %}
}