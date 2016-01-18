<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{% block title %}Chat App{% endblock %}</title>
<link rel="stylesheet" href="/css/bootstrap.min.css">
{% block style %}
{% endblock %}
</head>
<body id="app">

{% block content %}
<p>OOPs.... Missing content!</p>
{% endblock %}

{# <script src="/js/vendor.js"></script> #}
<script src="/vendor/jquery/jquery.js"></script>
<script src="/vendor/vue.js"></script>
{% block script %}
{% endblock %}
</body>
</html>