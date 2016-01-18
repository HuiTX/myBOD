{% extends '../layout.swig' %}
{% block title %}负责人列表{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/vendor/upload/css/hxmUpload.css">
{% endblock %}

{% block content %}
<div class="container">
    <form id="login-form" class="form" method="post" action="/postLogin">
        <h3 class="form-signin-heading">请登录</h3>
        <div id="demo" class="demo"></div>
    </form>
</div>
{% endblock %}

{% block script %}
<script src="/vendor/upload/hxmFile.js"></script>
<script src="/vendor/upload/hxmUpload.js"></script>
<script src="/js/member/upload.js"></script>
{% endblock %}
