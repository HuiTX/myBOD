{% extends '../layout.swig' %}
{% block title %}客户列表{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/customer/customList.css">
{% endblock %}

{% block content %}
    <div class="container" id="customList" v-cloak>
        <div class="row banner">
            <img src="./img/banner.png">
            <a class="button" href="#"><span class="glyphicon glyphicon-star"></span>关键商机</a>
        </div>
        <div class="row nav">
            <div class="col-xs-6 nav-list active"><a href="/customer"><span class="icon-info"></span>客户信息</a></div>
            <div class="col-xs-6 nav-list"><a href="/visit"><span class="icon-visit"></span>拜访记录</a></div>
        </div>
        <div class="row company-list">
            {# <div class="col-xs-12" style="padding:10px 0;"><button type="button" class="btn btn-primary" style="margin-right:10px;"><span class="glyphicon glyphicon-plus"></span>&nbsp;&nbsp;修改</button></div> #}
            <div class="col-xs-6 col-md-3">
                <div class="company-info">
                    <a href="/customer/info/basic">
                        <div class="company-add">
                        {# <span class="rectangle"></span><span class="rectangle rectangle-vertical"></span> #}
                            <div class="company-logo"><img src="./img/client-add.png"></div>
                            <p>新增客户信息</p>
                        </div>
                    </a>
                </div>
            </div>
            <div class="col-xs-6 col-md-3" v-for="item in items">
                <div class="company-info">
                    <a href="/customer/info?id={{ item.id }}">
                        <div class="company-logo"><img src="./img/client-logo.jpg"></div>
                        <p class="company-name">{{ item.name }}</p>
                        <p>负责人：{{ item.major }}</p>
                        <span v-if="item.keyBusiness == 1" class="icon-business"></span>
                    </a>
                </div>
            </div>
            <div class="col-xs-12 more-btn"><a href="/customer/personal" class="btn btn-primary">更多<span class="glyphicon glyphicon-menu-right"></span><span class="glyphicon glyphicon-menu-right"></span></a></div>
        </div>
        <div class="row">
            <div class="col-xs-12">
                <h1 class="client-classify"><span>下属的客户信息</span></h1>
            </div>
        </div>
        <div class="row colleague-list">
            <div class="col-xs-6 col-md-3" v-for="user in users">
                <div class="colleague-info" v-on:click="ckColleague(user)">
                    <div class="avatar">
                        <img v-if="user.sex == 1" src="./img/avatar_boy.png">
                        <img v-else src="./img/avatar_girl.png">
                    </div>
                    <div class="info">
                        <p class="name">{{ user.name }}</p>
                        <p class="record"><a href="tel:{{ user.phone }}"><span>tel：</span>{{ user.phone }}</a></p>
                    </div>
                </div>
            </div>
        </div>

        {# <div class="row">
            <div class="col-xs-12 section">
                <ul class="colleague-list">
                    <li><a href="">李潇潇<span class="glyphicon glyphicon-menu-right"></span></a></li>
                    <li><a href="">李潇潇<span class="glyphicon glyphicon-menu-right"></span></a></li>
                    <li><a href="">李潇潇<span class="glyphicon glyphicon-menu-right"></span></a></li>
                    <li><a href="">李潇潇<span class="glyphicon glyphicon-menu-right"></span></a></li>
                    <li><a href="">李潇潇<span class="glyphicon glyphicon-menu-right"></span></a></li>
                    <li><a href="">李潇潇<span class="glyphicon glyphicon-menu-right"></span></a></li>
                </ul>
            </div>
        </div> #}
    </div>
{% endblock %}

{% block script %}
<script src="/js/custom/custom.js"></script>
{% endblock %}