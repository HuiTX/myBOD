{% extends '../layout.swig' %}
{% block title %}拜访记录{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/visit/visitList.css">
{% endblock %}

{% block content %}
<div class="container" id="visitList" v-cloak>
    <div class="row banner">
        <img src="./img/banner.png"> {# <a class="button" href="#"><span class="glyphicon glyphicon-star"></span>关键商机</a> #}
    </div>
    <div class="row nav">
        <div class="col-xs-6 nav-list"><a href="/customer"><span class="icon-info"></span>客户信息</a></div>
        <div class="col-xs-6 nav-list active"><a href="/visit"><span class="icon-visit"></span>拜访记录</a></div>
    </div>
    <div class="row">
        <ul class="visit-list">
            <li  v-for="item in items">
                <a href="/visit/before?id={{ item.id }}">
                    <div class="visit-main">
                        <p class="visited">{{ item.user }}<span class="" style="color:#999;padding:0 5px;">拜访了</span>{{ item.customer }}</p>
                        <p class="time">{{ item.date }}</p>
                    </div>
                    <p class="major">负责人：{{ item.director }}</p>
                </a>
            </li>
        </ul>
    </div>
</div>

{% endblock %}

{% block script %}
<script src="/js/visit/visitList.js"></script>
{% endblock %}
