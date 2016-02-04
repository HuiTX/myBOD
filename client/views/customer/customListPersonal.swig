{% extends '../layout.swig' %}
{% block title %}客户列表{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/customer/customList.css">
{% endblock %}

{% block content %}
<div class="container" id="customListPersonal" v-cloak>
    <div class="row status-bar">
        <a class="goback" href="javascript:history.go(-1);"><span class="glyphicon glyphicon-menu-left"></span></a>
        {{ colleaguenName }}的客户
    </div>
    <div class="row company-list">
        <div class="col-xs-6 col-md-3" v-if="colleaguenName == '我' ">
            <div class="company-info">
                <a href="/customer/info/basic">
                    <div class="company-add">
                        <div class="company-logo"><img src="../img/client-add.png"></div>
                        <p>新增客户信息</p>
                    </div>
                </a>
            </div>
        </div>
        <div class="col-xs-6 col-md-3" v-for="item in items">
            <div class="company-info">
                <a href="/customer/info?id={{ item.id }}">
                    <div class="company-logo"><img src="../img/client-logo.jpg"></div>
                    <p class="company-name">{{ item.name }}</p>
                    <p>负责人：{{ item.major }}</p>
                    <span v-if="item.keyBusiness == 1" class="icon-business"></span>
                </a>
            </div>
        </div>
    </div>
</div>
{% endblock %}

{% block script %}
<script src="/js/custom/customListPersonal.js"></script>
{% endblock %}
