{% extends '../layout.swig' %}
{% block title %}基本信息{% endblock %}

{% block style %}
<link rel="stylesheet" type="text/css" href="/css/customer/customBasic.css">
{% endblock %}

{% block content %}
    <div class="container">
        <div class="row status-bar">
            <a class="goback" href="/customInfo"><span class="glyphicon glyphicon-menu-left"></span></a>
            基本信息
        </div>
        <div class="row basic-main">
            <span class="icon-business"></span>
            <h2 class="name">康师傅控股有限公司</h2>
            <ul class="display-box-li">
                <li><span class="glyphicon glyphicon-tasks"></span><span class="word">业务阶段</span><p class="control">初步想法</p></li>
                <li><span class="glyphicon glyphicon-rmb"></span><span class="word">预算</span><p class="control">50-100万</p></li>
                <li><span class="glyphicon glyphicon-stats"></span><span class="word">商机胜算率</span><p class="control">80%</p></li>
            </ul>
        </div>
        <div class="row section">
            <ul class="display-box-li basic-list">
                <li><span class="word">所属行业</span><p class="control">快消行业</p></li>
                <li><span class="word">地址</span><p class="control">福建省福建省福建省福建省福建省福建省福建省福建省福建省福建省福建省</p></li>
                <li><span class="word">年收入</span><p class="control">80</p></li>
                <li><span class="word">年收入</span><p class="control">80</p></li>
                <li><span class="word">年收入</span><p class="control">80</p></li>
                <li><span class="word">年收入</span><p class="control">80</p></li>
                <li><span class="word">年收入</span><p class="control">80</p></li>
                <li><span class="word">年收入</span><p class="control">80</p></li>
                <li><span class="word">年收入</span><p class="control">80</p></li>
            </ul>
            <div class="col-xs-12 all-btn"><button type="button" class="btn btn-default">查看全部<span class="glyphicon glyphicon-menu-down"></span></button></div>
        </div>
    </div>
{% endblock %}


