{% extends '../layout.swig' %}
{% block title %}拜访记录详情{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/visit/visitInfo.css">
<link rel="stylesheet" type="text/css" href="/css/customer/customBasic.css">
{% endblock %}

{% block content %}
<div class="container">
    <div class="row banner">
        <img src="./img/banner.png">
        <p class="name">康师傅控股有限公司</p>
    </div>
    <div class="row nav visit-nav">
        <div class="col-xs-6 nav-list active"><a href="/visitInfo">拜访前</a></div>
        <div class="col-xs-6 nav-list"><a href="/visitInfo">拜访后</a></div>
    </div>
    <div class="row section">
        <ul class="display-box-li basic-list">
            <li><span class="word">拜访对象</span><p class="control">快消行业</p></li>
            <li><span class="word">关系度</span><p class="control">福建省福建省福建省福建省福建省福建省福建省福建省福建省福建省福建省</p></li>
            <li><span class="word">拜访目的</span><p class="control">80</p></li>
            <li><span class="word">拜访形式</span><p class="control">80</p></li>
            <li><span class="word">业务阶段</span><p class="control">80</p></li>
            <li><span class="word">培训组织结构</span><p class="control">80</p></li>
            <li><span class="word">从事培训的人数</span><p class="control">80</p></li>
            <li><span class="word">目前主要的培训项目</span><p class="control">80</p></li>
            <li><span class="word">最重视的培训项目</span><p class="control">80</p></li>
        </ul>
    </div>
</div>
{% endblock %}

{% block script %}

{% endblock %}
