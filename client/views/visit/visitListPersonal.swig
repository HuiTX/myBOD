{% extends '../layout.swig' %}
{% block title %}拜访记录{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/visit/visitList.css">
{% endblock %}

{% block content %}
<div class="container" id="visitListPersonal" v-cloak>
    {# <div class="row banner">
        <img src="../img/partner.png">
        <p class="name">{{ name }}</p>
    </div> #}
    <div class="row status-bar">
        <a class="goback" href="javascript:history.go(-1);"><span class="glyphicon glyphicon-menu-left"></span></a>
        拜访记录
    </div>
    <div class="row section mb10">
        <a href="/visit/before?c={{ customer_id }}" class="add-bar">新增拜访记录</a>
    </div>
    <div class="row">
        <ul class="visit-list">
            <li v-for="item in items">
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
<script src="/js/visit/visitListPersonal.js"></script>
{% endblock %}
