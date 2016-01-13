{% extends 'layout.swig' %}
{% block title %}登录页面{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/vendor/validator/jquery.validator.css">
{% endblock %}

{% block content %}
<div class="container">
    <form id="login-form" class="form" action="/login">
        <h3 class="form-signin-heading">请登录</h3>
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="glyphicon glyphicon-user"></i>
            </div>
            <input type="text" class="form-control" name="username" id="username" placeholder="用户名" autocomplete="off">
          </div>
        </div>

        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class=" glyphicon glyphicon-lock "></i>
            </div>
            <input type="password" class="form-control" name="password" id="password" placeholder="密码" autocomplete="off">
          </div>
        </div>
        <div class="form-group">
            <label class="checkbox">
                <input type="checkbox" style="position:relative;margin:0 5px 0 0;vertical-align:middle;" />记住我
            </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">登录</button>
    </form>
</div>
{% endblock %}

{% block script %}
<script src="/vendor/validator/jquery.validator.js"></script>
<script src="/vendor/validator/local/zh_CN.js"></script>
<script src="/js/member/login.js"></script>
{% endblock %}
