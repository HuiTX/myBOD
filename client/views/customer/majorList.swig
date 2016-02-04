{% extends '../layout.swig' %}
{% block title %}负责人列表{% endblock %}

{% block style %}

{% endblock %}

{% block content %}
<div class="container" id="directorList" v-cloak>
    <div class="row status-bar">
        <a class="goback" href="javascript:history.go(-1);"><span class="glyphicon glyphicon-menu-left"></span></a> 负责人列表
    </div>
    {# <div class="row">
        <div class="btn-section">
            <a href="/director/info" class="btn btn-primary btn-icon-left"><span class="glyphicon glyphicon-plus"></span>新增</a>
        </div>
    </div> #}
    <div class="row section">
        <a href="/director/info?c={{ customerId }}" class="add-bar">新增负责人</a>
    </div>
    <div class="row section pt10">
        {# <div class="col-xs-12 btn-top-right">
            <a href="/director/info?customerId={{ customerId }}" class="btn btn-primary btn-icon-left"><span class="glyphicon glyphicon-plus"></span>新增</a>
        </div> #}
        <div class="col-xs-6 col-md-3" v-for="item in director">
            <div class="major-list">
                <p class="name"><span class="glyphicon glyphicon-user"></span>{{ item.director_name }}</p>
                <a class="tel" href="tel:{{ item.director_phone }}"><span class="glyphicon glyphicon-earphone"></span>{{ item.director_phone }}</a>
                <p class="role"><span class="glyphicon glyphicon-eye-open"></span>{{ item.name }}</p>
                <div class="btn-major">
                    <a href="/visit/before?c={{ customerId }}&d={{ item.director_id }}"><span class="glyphicon glyphicon-list-alt"></span><span class="text">拜访记录</span></a>
                    <a v-on:click="ckDirector(item)"><span class="glyphicon glyphicon-option-horizontal"></span></a>
                </div>
            </div>
        </div>
    </div>
</div>

{% endblock %}

{% block script %}
<script src="/js/custom/directorList.js"></script>
{% endblock %}
