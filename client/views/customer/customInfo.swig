{% extends '../layout.swig' %}
{% block title %}客户信息{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/customer/customInfo.css">
{% endblock %}

{% block content %}
<div class="container pb60"  id="customInfo" v-cloak>
    <div class="row banner">
        <img src="../img/partner.png">
        <p class="name">{{ basic.name }}</p>
        <a class="goback-top" href="javascript:history.go(-1);"><span class="glyphicon glyphicon-menu-left"></span></a>
        {# <a class="button" href="/editCustomer"><span class="glyphicon glyphicon-pencil"></span>编辑</a> #}
    </div>
    <div class="row section">
        <div class="col-xs-12">
            <h2 class="title">
                <a href="/customer/info/basic?action=view&id={{ basic.id }}">基本信息<span class="glyphicon glyphicon-menu-right"></span></a>
            </h2>
        </div>
        <div class="col-xs-12">
            <a class="customer-basic" href="/customer/info/basic?action=view&id={{ basic.id }}">
                <p v-if="basic.boi_stage_name">业务阶段：{{ basic.boi_stage_name }}</p>
                <ul class="labels">
                    <li v-if="basic.keyBusiness == 1" class="l-bus">关键商机</li>
                    <li v-if="basic.boi_budget_name">预算:{{ basic.boi_budget_name }}</li>
                    <li v-if="basic.boi_price_name">{{ basic.boi_price_name }}</li>
                </ul>
            </a>
        </div>
    </div>
    <div class="row section" v-if="isDirector">
        <div class="col-xs-12">
            <h2 class="title">
                <a href="/director?id={{ basic.id }}">负责人<span class="glyphicon glyphicon-menu-right"></span></a>
            </h2>
        </div>
        <div class="col-xs-6 col-md-3" v-for="item in director">
            <div class="major-list">
                <p class="name"><span class="glyphicon glyphicon-user"></span>{{ item.director_name }}</p>
                <a class="tel" href="tel:{{ item.director_phone }}"><span class="glyphicon glyphicon-earphone"></span>{{ item.director_phone }}</a>
                <p class="role"><span class="glyphicon glyphicon-eye-open"></span>{{ item.name }}</p>
                <div class="btn-major">
                    <a href="/visit/before?c={{ basic.id }}&d={{ item.director_id }}"><span class="glyphicon glyphicon-list-alt"></span><span class="text">拜访记录</span></a>
                    <a v-on:click="ckDirector(item)"><span class="glyphicon glyphicon-option-horizontal"></span></a>
                </div>
            </div>
        </div>
    </div>
    <div class="row section" v-else>
        <a href="/director/info?c={{ basic.id }}" class="add-bar">添加负责人信息</a>
    </div>
    {# <div class="row section">
        <div class="col-xs-12">
            <h2 class="title">
                <a href="#">竞争对手<span class="glyphicon glyphicon-menu-right"></span></a>
            </h2>
        </div>
        <div class="col-xs-6 col-md-3">
            <div class="compete-list">
                <a href="#">
                    <p class="company-name">康师傅控股有限公司</p>
                    <p class="advantage">这里填与网龙相比对方的优势</p>
                </a>
            </div>
        </div>
        <div class="col-xs-6 col-md-3">
            <div class="compete-list">
                <a href="#">
                    <p class="company-name">康师傅控股有限公司</p>
                    <p class="advantage">这里填与网龙相比对方的优势</p>
                </a>
            </div>
        </div>
    </div> #}       
    <div class="btn-fix-box">
        <a href="/visit/personal?c={{ basic.id }}" v-if="isDirector">拜访记录</a>
        <a class="second" href="#" v-if="basic.keyBusiness != 1">申请进入关键商机</a>
    </div>
</div>
{% endblock %}
{% block script %}
<script src="/js/custom/customInfo.js"></script>
{% endblock %}
